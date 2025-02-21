
import { ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background com gradiente e overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-likekar-yellow/10 px-4 py-2 rounded-full animate-fadeIn backdrop-blur-sm border border-likekar-yellow/20">
            <Star size={16} className="text-likekar-yellow" />
            <span className="font-montserrat text-sm text-white">26 Anos de Experiência</span>
          </div>
          
          <h1 className="mt-8 text-4xl sm:text-7xl font-extrabold font-montserrat tracking-tight animate-fadeIn text-white" style={{
            animationDelay: '0.2s'
          }}>
            Transforme seu
            <span className="block text-likekar-yellow">carro dos sonhos</span>
            <span className="block">em realidade</span>
          </h1>
          
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 font-inter animate-fadeIn leading-relaxed" style={{
            animationDelay: '0.4s'
          }}>
            Som automotivo, películas, acessórios e muito mais.
            Trabalhamos com as melhores marcas do mercado.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{
            animationDelay: '0.6s'
          }}>
            <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat h-14 px-8 text-lg w-full sm:w-auto">
              Ver Produtos
              <ChevronRight size={20} />
            </Button>
            <Button variant="outline" className="font-montserrat h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm">
              Fale Conosco
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fadeIn" style={{
            animationDelay: '0.8s'
          }}>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="font-montserrat font-bold text-3xl text-likekar-yellow">26+</div>
              <div className="text-gray-300 font-inter text-sm mt-2">Anos de Experiência</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="font-montserrat font-bold text-3xl text-likekar-yellow">5000+</div>
              <div className="text-gray-300 font-inter text-sm mt-2">Clientes Satisfeitos</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="font-montserrat font-bold text-3xl text-likekar-yellow">50+</div>
              <div className="text-gray-300 font-inter text-sm mt-2">Marcas Premium</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="font-montserrat font-bold text-3xl text-likekar-yellow">6500+</div>
              <div className="text-gray-300 font-inter text-sm mt-2">Projetos Realizados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
