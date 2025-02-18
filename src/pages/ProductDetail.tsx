
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

// Importe o array PRODUCTS do arquivo Products.tsx
import { PRODUCTS } from './Products';

const ProductDetail = () => {
  const { productId } = useParams();
  const [showForm, setShowForm] = useState(false);
  
  const product = PRODUCTS.find(p => p.id === productId);

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
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.detailImage} 
              alt={product.name}
              className="w-full rounded-xl shadow-lg object-cover aspect-video"
            />
            <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium">
              {product.brand}
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
