
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, LogIn, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  image: string | null;
  price: number | null;
  detail_image: string | null;
  full_description: string | null;
  active: boolean | null;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();

    // Inscrever-se para atualizações em tempo real
    const channel = supabase
      .channel('products-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Escutar todos os eventos (INSERT, UPDATE, DELETE)
          schema: 'public',
          table: 'products'
        },
        () => {
          // Recarregar produtos quando houver mudanças
          fetchProducts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('active', true) // Apenas produtos ativos
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedBrand !== "all" && product.brand !== selectedBrand) return false;
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    return true;
  });

  return <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-end mb-4">
            <Link to="/auth">
              <Button variant="outline" className="gap-2">
                <LogIn className="w-4 h-4" />
                Área Administrativa
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-black mb-4">
            Nossos Produtos
          </h1>
          <p className="text-gray-800 max-w-2xl mx-auto mb-8">
            Encontre tudo o que seu carro precisa em um só lugar. Trabalhamos com as melhores marcas do mercado.
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Pesquisar produtos..." 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                className="w-full px-6 py-4 pr-12 text-lg rounded-full border-2 border-[#ffdd00] focus:outline-none focus:ring-2 focus:ring-[#ffdd00] focus:border-transparent transition-all duration-300 placeholder:text-gray-400" 
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={24} />
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Carregando produtos...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map(product => (
                <Link key={product.id} to={`/produtos/${product.id}`}>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-[#ffdd00]/20">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image || '/placeholder.svg'} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                      <Button variant="link" className="p-0 h-auto text-black hover:text-[#ffdd00] font-medium flex items-center">
                        Ver Detalhes
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">Nenhum produto encontrado para sua pesquisa.</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>;
};

export default Products;
