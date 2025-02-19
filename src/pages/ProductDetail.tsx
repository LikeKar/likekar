
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { ProductCarousel } from '@/components/product/ProductCarousel';
import { ShareButtons } from '@/components/product/ShareButtons';
import { QuoteForm } from '@/components/product/QuoteForm';

interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string | null;
  image: string | null;
  detail_image: string | null;
  active: boolean | null;
}

const ProductDetail = () => {
  const { productId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();

    const channel = supabase
      .channel('product-detail-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products',
          filter: `id=eq.${productId}`
        },
        () => {
          fetchProduct();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [productId]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .eq('active', true)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  const productMedia = product ? {
    fotos: [
      product.detail_image,
      product.image,
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      "https://images.unsplash.com/photo-1619927938134-ab41528fca67"
    ].filter(Boolean),
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  } : { fotos: [], videos: [] };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p>Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p>Produto não encontrado ou foi desativado.</p>
          <Link to="/produtos">
            <Button className="mt-4">Voltar para Produtos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link 
          to="/produtos"
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Produtos
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ProductCarousel media={productMedia} productName={product.name} />
          </div>

          <div>
            <h1 className="text-3xl font-bold font-montserrat mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6 text-lg">{product.full_description || product.description}</p>
            
            <div className="space-y-6">
              <Button 
                onClick={() => setShowForm(true)}
                className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black font-medium py-3 text-lg"
              >
                Solicitar Orçamento
              </Button>

              <ShareButtons productName={product.name} />
            </div>
          </div>
        </div>

        {showForm && <QuoteForm onClose={() => setShowForm(false)} />}
      </main>
    </div>
  );
};

export default ProductDetail;
