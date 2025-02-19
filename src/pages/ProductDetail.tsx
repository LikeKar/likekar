
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Instagram, 
  Link as LinkIcon, 
  MessageSquareMore,
  CheckCircle,
  Shield,
  Sun,
  Lock
} from 'lucide-react';
import { useState } from 'react';
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { PRODUCTS } from './Products';

const ProductDetail = () => {
  const { productId } = useParams();
  const [showForm, setShowForm] = useState(false);
  
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

  const features = [
    {
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      title: "Proteção UV",
      description: "Máxima proteção contra raios ultravioleta"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Redução de Calor",
      description: "Redução significativa da temperatura interna"
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-500" />,
      title: "Privacidade",
      description: "Privacidade superior para seu veículo"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Garantia",
      description: "Instalação profissional com garantia"
    }
  ];

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
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar para Produtos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {productMedia.fotos.map((foto, index) => (
                    <CarouselItem key={`foto-${index}`}>
                      <div className="relative aspect-video">
                        <img 
                          src={foto} 
                          alt={`${product.name} - Foto ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  {productMedia.videos.map((video, index) => (
                    <CarouselItem key={`video-${index}`}>
                      <div className="relative aspect-video">
                        <iframe
                          src={video}
                          title={`${product.name} - Vídeo ${index + 1}`}
                          className="w-full h-full rounded-xl"
                          allowFullScreen
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-4xl font-bold font-montserrat mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center mb-2">
                      {feature.icon}
                      <h3 className="ml-2 font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => setShowForm(true)}
                className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black font-medium py-6 text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
              </Button>

              <div className="flex items-center space-x-4 justify-center pt-6 mt-6 border-t">
                <span className="text-sm text-gray-500 flex items-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar:
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('whatsapp')}
                  className="rounded-full hover:bg-green-50 hover:border-green-200 transition-colors"
                >
                  <MessageSquareMore className="w-4 h-4 text-green-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('facebook')}
                  className="rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('instagram')}
                  className="rounded-full hover:bg-pink-50 hover:border-pink-200 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('copy')}
                  className="rounded-full hover:bg-gray-50 hover:border-gray-200 transition-colors"
                >
                  <LinkIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scaleIn">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Solicitar Orçamento
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Nome</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Telefone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Mensagem</label>
                  <textarea
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    rows={4}
                    placeholder="Sua mensagem..."
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-likekar-yellow hover:bg-yellow-400 text-black py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Enviar
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-6 rounded-xl hover:bg-gray-50"
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
