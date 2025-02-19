import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Thermometer, Eye } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { ProductCarousel } from '@/components/product/ProductCarousel';
import { ShareButtons } from '@/components/product/ShareButtons';
import { QuoteForm } from '@/components/product/QuoteForm';

interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string | null;
  photos: string[];
  videos: string[];
  active: boolean | null;
}

const ProductDetail = () => {
  const {
    productId
  } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
    const channel = supabase.channel('product-detail-changes').on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'products',
      filter: `id=eq.${productId}`
    }, () => {
      fetchProduct();
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [productId]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const {
        data,
        error
      } = await supabase.from('products').select('*').eq('id', productId).eq('active', true).single();
      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511457407011";
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto ${product?.name}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const productMedia = product ? {
    fotos: product.photos || [],
    videos: product.videos || []
  } : {
    fotos: [],
    videos: []
  };

  const features = [{
    icon: <Shield className="w-8 h-8" />,
    title: "Proteção UV 99%",
    description: "Máxima proteção contra raios ultravioleta"
  }, {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Redução de Calor",
    description: "Até 78% de redução da temperatura interna"
  }, {
    icon: <Eye className="w-8 h-8" />,
    title: "Privacidade Total",
    description: "Visibilidade de dentro para fora"
  }];

  if (loading) {
    return <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <p>Carregando produto...</p>
        </div>
      </div>;
  }

  if (!product) {
    return <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <p>Produto não encontrado ou foi desativado.</p>
          <Link to="/produtos">
            <Button className="mt-4">Voltar para Produtos</Button>
          </Link>
        </div>
      </div>;
  }

  return <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-[168px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-16">
          <div className="py-2 sm:py-[10px] px-0 mx-0">
            <ProductCarousel media={productMedia} productName={product.name} />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-[40px] leading-tight font-bold font-montserrat mb-4">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                {product.full_description || product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-4 text-likekar-yellow">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12">
              <Button 
                onClick={handleWhatsAppClick} 
                className="w-full bg-likekar-black hover:bg-black/90 text-white py-4 sm:py-6 rounded-none text-base sm:text-lg font-medium"
              >
                Solicitar Orçamento
              </Button>

              <ShareButtons productName={product.name} className="mt-6" />
            </div>
          </div>
        </div>
      </main>

      {showForm && <QuoteForm onClose={() => setShowForm(false)} />}
    </div>;
};

export default ProductDetail;
