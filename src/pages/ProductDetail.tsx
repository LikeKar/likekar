
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Facebook, Instagram, Link as LinkIcon, WhatsApp } from 'lucide-react';
import { useState } from 'react';
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Importe o array PRODUCTS do arquivo Products.tsx
import { PRODUCTS } from './Products';

const ProductDetail = () => {
  const { productId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos');
  
  const product = PRODUCTS.find(p => p.id === productId);

  const productMedia = {
    fotos: [
      product?.detailImage,
      product?.image,
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      "https://images.unsplash.com/photo-1619927938134-ab41528fca67"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Confira ${product?.name} na Like Kar!`;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'instagram':
        toast.info("Copie o link e compartilhe no Instagram!");
        navigator.clipboard.writeText(url);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success("Link copiado para a área de transferência!");
        break;
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p>Produto não encontrado.</p>
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
          {/* Media Section */}
          <div className="space-y-6">
            {/* Tab Buttons */}
            <div className="flex space-x-4 mb-4">
              <Button 
                variant={activeTab === 'fotos' ? 'default' : 'outline'}
                onClick={() => setActiveTab('fotos')}
                className={activeTab === 'fotos' ? 'bg-likekar-yellow text-black hover:bg-yellow-400' : ''}
              >
                Fotos
              </Button>
              <Button 
                variant={activeTab === 'videos' ? 'default' : 'outline'}
                onClick={() => setActiveTab('videos')}
                className={activeTab === 'videos' ? 'bg-likekar-yellow text-black hover:bg-yellow-400' : ''}
              >
                Vídeos
              </Button>
            </div>

            {/* Media Content */}
            {activeTab === 'fotos' ? (
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {productMedia.fotos.map((foto, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video">
                        <img 
                          src={foto} 
                          alt={`${product.name} - Foto ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <div className="space-y-4">
                {productMedia.videos.map((video, index) => (
                  <div key={index} className="relative aspect-video">
                    <iframe
                      src={video}
                      title={`${product.name} - Vídeo ${index + 1}`}
                      className="w-full h-full rounded-xl"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-gray-500 flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar:
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('whatsapp')}
                className="rounded-full"
              >
                <WhatsApp className="w-4 h-4 text-green-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('facebook')}
                className="rounded-full"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('instagram')}
                className="rounded-full"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare('copy')}
                className="rounded-full"
              >
                <LinkIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold font-montserrat mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6 text-lg">{product.fullDescription}</p>
            
            <div className="space-y-4">
              <Button 
                onClick={() => setShowForm(true)}
                className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black font-medium py-3 text-lg"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>

        {/* Orçamento Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Solicitar Orçamento</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefone</label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="Sua mensagem..."
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-likekar-yellow hover:bg-yellow-400 text-black"
                  >
                    Enviar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;
