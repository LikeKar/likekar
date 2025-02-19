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

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Você precisa estar logado para acessar esta página");
        navigate("/auth");
      } else {
        fetchProducts();
      }
    };
    checkUser();
  }, [navigate]);

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

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/auth");
  }

  if (loading) {
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

      {selectedProduct ? (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Editar Produto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="block text-sm font-medium mb-1">Imagem Detalhada</label>
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
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Ações</TableHead>
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
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    variant="outline"
                    size="sm"
                  >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
