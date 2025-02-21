import { ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
const Hero = () => {
  return <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-likekar-yellow/10 px-4 py-2 rounded-full animate-fadeIn">
            <Star size={16} className="text-likekar-yellow" />
            <span className="font-montserrat text-sm">Produtos Premium para seu Carro</span>
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold font-montserrat text-likekar-black tracking-tight animate-fadeIn" style={{
          animationDelay: '0.2s'
        }}>
            Tudo para seu carro em
            <span className="block text-likekar-yellow">um só lugar</span>
          </h1>
          
          <p className="mt-6 max-w-lg mx-auto text-lg text-gray-600 font-inter animate-fadeIn" style={{
          animationDelay: '0.4s'
        }}>
            Som automotivo, películas, acessórios e muito mais.
            Trabalhamos com as melhores marcas do mercado.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{
          animationDelay: '0.6s'
        }}>
            <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat h-12 px-8 text-lg">
              Ver Produtos
              <ChevronRight size={20} />
            </Button>
            <Button variant="outline" className="font-montserrat h-12 px-8 text-lg">
              Fale Conosco
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fadeIn" style={{
          animationDelay: '0.8s'
        }}>
            <div className="flex flex-col items-center">
              <div className="font-montserrat font-bold text-2xl text-likekar-black">26+</div>
              <div className="text-gray-600 font-inter text-sm">Anos de Experiência</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-montserrat font-bold text-2xl text-likekar-black">5000+</div>
              <div className="text-gray-600 font-inter text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-montserrat font-bold text-2xl text-likekar-black">50+</div>
              <div className="text-gray-600 font-inter text-sm">Marcas Premium</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-montserrat font-bold text-2xl text-likekar-black">2500+</div>
              <div className="text-gray-600 font-inter text-sm">Projetos Realizados</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;