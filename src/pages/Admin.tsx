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
import { Plus, Search, Edit2, Trash2, Image as ImageIcon } from "lucide-react";
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
  brand: string;
  image: string | null;
  detail_image: string | null;
  video_url: string | null;
  price: number | null;
  active: boolean | null;
  status: boolean | null;
}

export default function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [detailImageFile, setDetailImageFile] = useState<File | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });

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
      let imageUrl = selectedProduct.image;
      let detailImageUrl = selectedProduct.detail_image;

      if (imageFile) {
        imageUrl = await handleFileUpload(imageFile, "images");
      }
      if (detailImageFile) {
        detailImageUrl = await handleFileUpload(detailImageFile, "detail-images");
      }

      const { error } = await supabase
        .from("products")
        .update({
          ...selectedProduct,
          image: imageUrl,
          detail_image: detailImageUrl,
        })
        .eq("id", selectedProduct.id);

      if (error) throw error;

      toast.success("Produto atualizado com sucesso!");
      fetchProducts();
      setSelectedProduct(null);
    } catch (error: any) {
      toast.error("Erro ao atualizar produto: " + error.message);
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

  async function handleCreateProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    try {
      setLoading(true);
      
      let imageUrl = null;
      let detailImageUrl = null;

      if (imageFile) {
        imageUrl = await handleFileUpload(imageFile, "images");
      }
      if (detailImageFile) {
        detailImageUrl = await handleFileUpload(detailImageFile, "detail-images");
      }

      const { error } = await supabase
        .from("products")
        .insert({
          name: formData.get("name") as string,
          description: formData.get("description") as string,
          full_description: formData.get("full_description") as string,
          category: formData.get("category") as string,
          brand: formData.get("brand") as string,
          price: parseFloat(formData.get("price") as string) || null,
          image: imageUrl,
          detail_image: detailImageUrl,
          active: true,
          status: true,
        });

      if (error) throw error;

      toast.success("Produto criado com sucesso!");
      fetchProducts();
      (e.target as HTMLFormElement).reset();
      setImageFile(null);
      setDetailImageFile(null);
    } catch (error: any) {
      toast.error("Erro ao criar produto: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/auth");
  }

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
                  value={selectedProduct.name}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              
              <div>
                <Label>Descrição Curta</Label>
                <Input
                  value={selectedProduct.description}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div>
                <Label>Descrição Completa</Label>
                <Textarea
                  value={selectedProduct.full_description || ""}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      full_description: e.target.value,
                    })
                  }
                  rows={4}
                />
              </div>

              <div>
                <Label>Categoria</Label>
                <Select
                  value={selectedProduct.category}
                  onValueChange={(value) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      category: value,
                    })
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
                <Label>Marca</Label>
                <Input
                  value={selectedProduct.brand}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      brand: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div>
                <Label>Preço</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={selectedProduct.price || ""}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: parseFloat(e.target.value) || null,
                    })
                  }
                />
              </div>

              <div>
                <Label>Imagem Principal</Label>
                <Input
                  type="file"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  accept="image/*"
                />
                {selectedProduct.image && (
                  <img
                    src={selectedProduct.image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded"
                  />
                )}
              </div>

              <div>
                <Label>Imagem Detalhada</Label>
                <Input
                  type="file"
                  onChange={(e) => setDetailImageFile(e.target.files?.[0] || null)}
                  accept="image/*"
                />
                {selectedProduct.detail_image && (
                  <img
                    src={selectedProduct.detail_image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded"
                  />
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="active"
                  checked={selectedProduct.active}
                  onCheckedChange={(checked) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      active: checked,
                    })
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
