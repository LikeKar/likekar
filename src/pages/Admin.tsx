import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Search, Edit2, Trash2, Image as ImageIcon, X, ArrowUp, ArrowDown } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string | null;
  category: string;
  brand: string | null;
  photos: string[];
  videos: string[];
  price: number | null;
  active: boolean | null;
  status: boolean | null;
}

export default function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });
  const [pendingPhotos, setPendingPhotos] = useState<string[]>([]);
  const [pendingVideos, setPendingVideos] = useState<string[]>([]);

  useEffect(() => {
    checkUser();
    fetchProducts();
  }, []);

  async function checkUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
    }
  }

  async function fetchProducts() {
    try {
      let query = supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (searchQuery) {
        query = query.ilike("name", `%${searchQuery}%`);
      }

      if (filterCategory !== "all") {
        query = query.eq("category", filterCategory);
      }

      if (filterStatus !== "all") {
        query = query.eq("active", filterStatus === "active");
      }

      const { data, error } = await query;

      if (error) throw error;

      setProducts(data || []);
      
      const stats = {
        total: data?.length || 0,
        active: data?.filter(p => p.active).length || 0,
        inactive: data?.filter(p => !p.active).length || 0,
      };
      setStats(stats);
    } catch (error: any) {
      toast.error("Erro ao carregar produtos: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleFileUpload(file: File, path: string) {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(filePath, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    return publicUrl;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedProduct) return;

    try {
      setLoading(true);
      let uploadedPhotos = [...(selectedProduct.photos || [])];

      for (const file of imageFiles) {
        const photoUrl = await handleFileUpload(file, "images");
        uploadedPhotos.push(photoUrl);
      }

      const { error } = await supabase
        .from("products")
        .update({
          ...selectedProduct,
          photos: pendingPhotos,
          videos: pendingVideos,
        })
        .eq("id", selectedProduct.id);

      if (error) throw error;

      toast.success("Produto atualizado com sucesso!");
      fetchProducts();
      setSelectedProduct(null);
      setImageFiles([]);
      setPendingPhotos([]);
      setPendingVideos([]);
    } catch (error: any) {
      toast.error("Erro ao atualizar produto: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    try {
      setLoading(true);
      let uploadedPhotos: string[] = [];

      for (const file of imageFiles) {
        const photoUrl = await handleFileUpload(file, "images");
        uploadedPhotos.push(photoUrl);
      }

      const videoUrl = formData.get("video_url") as string;
      const videos = videoUrl ? [videoUrl] : [];

      const { error } = await supabase
        .from("products")
        .insert({
          name: formData.get("name") as string,
          description: formData.get("description") as string,
          full_description: formData.get("full_description") as string,
          category: formData.get("category") as string,
          brand: formData.get("brand") as string || null,
          photos: uploadedPhotos,
          videos: videos,
          price: parseFloat(formData.get("price") as string) || null,
          active: true,
          status: true,
        });

      if (error) throw error;

      toast.success("Produto criado com sucesso!");
      fetchProducts();
      (e.target as HTMLFormElement).reset();
      setImageFiles([]);
    } catch (error: any) {
      toast.error("Erro ao criar produto: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      try {
        const { error } = await supabase
          .from("products")
          .delete()
          .eq("id", id);

        if (error) throw error;

        toast.success("Produto excluído com sucesso!");
        fetchProducts();
      } catch (error: any) {
        toast.error("Erro ao excluir produto: " + error.message);
      }
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/auth");
  }

  useEffect(() => {
    if (selectedProduct) {
      setPendingPhotos(selectedProduct.photos || []);
      setPendingVideos(selectedProduct.videos || []);
    }
  }, [selectedProduct]);

  if (loading && !products.length) {
    return <div className="flex items-center justify-center min-h-screen">
      Carregando...
    </div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Central de Administração</h1>
        <Button onClick={handleLogout} variant="outline">
          Sair
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total de Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Produtos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{stats.active}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Produtos Inativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">{stats.inactive}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas categorias</SelectItem>
            <SelectItem value="peliculas">Películas</SelectItem>
            <SelectItem value="som">Som</SelectItem>
            <SelectItem value="acessorios">Acessórios</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="inactive">Inativos</SelectItem>
          </SelectContent>
        </Select>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black">
              <Plus className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Produto</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateProduct} className="space-y-4">
              <div>
                <Label>Nome</Label>
                <Input name="name" required />
              </div>
              <div>
                <Label>Descrição Curta</Label>
                <Input name="description" required />
              </div>
              <div>
                <Label>Descrição Completa</Label>
                <Textarea name="full_description" rows={4} />
              </div>
              <div>
                <Label>Categoria</Label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="peliculas">Películas</SelectItem>
                    <SelectItem value="som">Som</SelectItem>
                    <SelectItem value="acessorios">Acessórios</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Marca</Label>
                <Input name="brand" required />
              </div>
              <div>
                <Label>Preço</Label>
                <Input name="price" type="number" step="0.01" />
              </div>
              <div>
                <Label>Imagem Principal</Label>
                <Input
                  type="file"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  accept="image/*"
                />
              </div>
              <div>
                <Label>Imagem Detalhada</Label>
                <Input
                  type="file"
                  onChange={(e) => setDetailImageFile(e.target.files?.[0] || null)}
                  accept="image/*"
                />
              </div>
              <div>
                <Label>Links dos Vídeos (um por linha)</Label>
                <Textarea
                  placeholder="Cole aqui os links dos vídeos (YouTube, Vimeo, etc)"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black"
                disabled={loading}
              >
                {loading ? "Salvando..." : "Criar Produto"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  {product.price
                    ? `R$ ${product.price.toFixed(2)}`
                    : "Sob consulta"}
                </TableCell>
                <TableCell>
                  <Switch
                    checked={product.active}
                    onCheckedChange={async (checked) => {
                      try {
                        const { error } = await supabase
                          .from("products")
                          .update({ active: checked })
                          .eq("id", product.id);

                        if (error) throw error;
                        fetchProducts();
                      } catch (error: any) {
                        toast.error("Erro ao atualizar status: " + error.message);
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Editar Produto</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Nome</Label>
                <Input
                  value={selectedProduct?.name}
                  onChange={(e) =>
                    setSelectedProduct(prev => prev ? {
                      ...prev,
                      name: e.target.value,
                    } : null)
                  }
                  required
                />
              </div>
              
              <div>
                <Label>Descrição Curta</Label>
                <Input
                  value={selectedProduct?.description}
                  onChange={(e) =>
                    setSelectedProduct(prev => prev ? {
                      ...prev,
                      description: e.target.value,
                    } : null)
                  }
                  required
                />
              </div>

              <div>
                <Label>Descrição Completa</Label>
                <Textarea
                  value={selectedProduct?.full_description || ""}
                  onChange={(e) =>
                    setSelectedProduct(prev => prev ? {
                      ...prev,
                      full_description: e.target.value,
                    } : null)
                  }
                  rows={4}
                />
              </div>

              <div>
                <Label>Categoria</Label>
                <Select
                  value={selectedProduct?.category}
                  onValueChange={(value) =>
                    setSelectedProduct(prev => prev ? {
                      ...prev,
                      category: value,
                    } : null)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="peliculas">Películas</SelectItem>
                    <SelectItem value="som">Som</SelectItem>
                    <SelectItem value="acessorios">Acessórios</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Marca (opcional)</Label>
                <Input
                  value={selectedProduct?.brand || ""}
                  onChange={(e) =>
                    setSelectedProduct(prev => prev ? {
                      ...prev,
                      brand: e.target.value || null,
                    } : null)
                  }
                />
              </div>

              <div>
                <Label>Preço</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={selectedProduct?.price || ""}
                  onChange={(e) =>
                    setSelectedProduct(prev => prev ? {
                      ...prev,
                      price: parseFloat(e.target.value) || null,
                    } : null)
                  }
                />
              </div>

              <div>
                <Label>Fotos do Produto</Label>
                <Input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    setImageFiles(files);
                  }}
                  accept="image/*"
                  className="mb-2"
                />
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {pendingPhotos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img
                        src={photo}
                        alt={`Foto ${index + 1}`}
                        className="w-full h-32 object-cover rounded"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => setPendingPhotos(photos => photos.filter((_, i) => i !== index))}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="secondary"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => movePhotoUp(index)}
                          disabled={index === 0}
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="secondary"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => movePhotoDown(index)}
                          disabled={index === pendingPhotos.length - 1}
                        >
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Links dos Vídeos (um por linha)</Label>
                <Textarea
                  value={pendingVideos.join('\n')}
                  onChange={(e) => setPendingVideos(e.target.value.split('\n').filter(v => v.trim()))}
                  placeholder="Cole aqui os links dos vídeos (YouTube, Vimeo, etc)"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="active"
                  checked={selectedProduct?.active}
                  onCheckedChange={(checked) =>
                    setSelectedProduct(prev => prev ? {
                      ...prev,
                      active: checked,
                    } : null)
                  }
                />
                <Label htmlFor="active">Produto Ativo</Label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-likekar-yellow hover:bg-yellow-400 text-black"
                  disabled={loading}
                >
                  {loading ? "Salvando..." : "Salvar Alterações"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedProduct(null)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
