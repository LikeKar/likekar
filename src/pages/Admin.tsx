
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
import { toast } from "sonner";
import { PlusCircle, Loader2, LogOut, Pencil } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string;
  category: string;
  brand: string;
  image: string;
  detail_image: string;
  video_url: string | null;
}

export default function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [detailImageFile, setDetailImageFile] = useState<File | null>(null);
  const [isCreating, setIsCreating] = useState(false);

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
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
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
    if (!selectedProduct && !isCreating) return;

    try {
      setLoading(true);
      let imageUrl = selectedProduct?.image || "";
      let detailImageUrl = selectedProduct?.detail_image || "";

      if (imageFile) {
        imageUrl = await handleFileUpload(imageFile, "images");
      }
      if (detailImageFile) {
        detailImageUrl = await handleFileUpload(detailImageFile, "detail-images");
      }

      const productData = {
        ...selectedProduct,
        image: imageUrl,
        detail_image: detailImageUrl,
      };

      if (isCreating) {
        const { error } = await supabase
          .from("products")
          .insert([productData]);

        if (error) throw error;
        toast.success("Produto criado com sucesso!");
      } else {
        const { error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", selectedProduct?.id);

        if (error) throw error;
        toast.success("Produto atualizado com sucesso!");
      }

      fetchProducts();
      setSelectedProduct(null);
      setIsCreating(false);
    } catch (error: any) {
      toast.error("Erro ao salvar produto: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/auth");
  }

  function handleCreate() {
    setIsCreating(true);
    setSelectedProduct({
      id: "",
      name: "",
      description: "",
      full_description: "",
      category: "",
      brand: "",
      image: "",
      detail_image: "",
      video_url: null,
    });
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-likekar-yellow" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Central de Administração</h1>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {selectedProduct || isCreating ? (
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">
              {isCreating ? "Criar Novo Produto" : "Editar Produto"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <Input
                  value={selectedProduct.name}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      name: e.target.value,
                    })
                  }
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Descrição Curta</label>
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
                <label className="block text-sm font-medium mb-1">Descrição Completa</label>
                <Textarea
                  value={selectedProduct.full_description}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      full_description: e.target.value,
                    })
                  }
                  required
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Categoria</label>
                <Input
                  value={selectedProduct.category}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      category: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Marca</label>
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
                <label className="block text-sm font-medium mb-1">Imagem Principal</label>
                <Input
                  type="file"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  accept="image/*"
                  className="mb-2"
                />
                {selectedProduct.image && (
                  <img
                    src={selectedProduct.image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded border"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Imagem Detalhada</label>
                <Input
                  type="file"
                  onChange={(e) => setDetailImageFile(e.target.files?.[0] || null)}
                  accept="image/*"
                  className="mb-2"
                />
                {selectedProduct.detail_image && (
                  <img
                    src={selectedProduct.detail_image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded border"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">URL do Vídeo (opcional)</label>
                <Input
                  value={selectedProduct.video_url || ""}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      video_url: e.target.value,
                    })
                  }
                  placeholder="URL do vídeo do YouTube"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-likekar-yellow hover:bg-yellow-400 text-black"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    isCreating ? "Criar Produto" : "Salvar Alterações"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setSelectedProduct(null);
                    setIsCreating(false);
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <Button
                onClick={handleCreate}
                className="bg-likekar-yellow hover:bg-yellow-400 text-black flex items-center gap-2"
              >
                <PlusCircle className="h-4 w-4" />
                Novo Produto
              </Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Imagem</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Marca</TableHead>
                    <TableHead className="w-[100px]">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => setSelectedProduct(product)}
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Pencil className="h-4 w-4" />
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
