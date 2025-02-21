
import { ChevronRight, Star, Car, Wrench, Shield } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=551145740701&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div className="relative min-h-screen pt-20">
      {/* Background com gradiente e padrão */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }} />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          {/* Badge animada */}
          <div 
            className="inline-flex items-center gap-2 bg-likekar-yellow/10 px-6 py-3 rounded-full 
            animate-fadeIn backdrop-blur-sm border border-likekar-yellow/20 hover:scale-105 transition-transform"
          >
            <Star size={18} className="text-likekar-yellow animate-pulse" />
            <span className="font-montserrat text-white text-sm">Produtos Premium para seu Carro</span>
          </div>
          
          {/* Título principal com animação */}
          <h1 className="mt-8 text-5xl sm:text-7xl font-extrabold font-montserrat text-white tracking-tight animate-fadeIn" 
              style={{ animationDelay: '0.2s' }}
          >
            Transforme seu
            <span className="block text-likekar-yellow mt-2">carro dos sonhos</span>
            <span className="block mt-2">em realidade</span>
          </h1>
          
          {/* Subtítulo com animação */}
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 font-inter animate-fadeIn leading-relaxed" 
             style={{ animationDelay: '0.4s' }}
          >
            Som automotivo, películas, acessórios e muito mais.
            Trabalhamos com as melhores marcas do mercado.
          </p>
          
          {/* Botões com efeitos hover */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn" 
               style={{ animationDelay: '0.6s' }}
          >
            <Button 
              className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat h-14 px-8 text-lg
              group relative overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Produtos
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              variant="outline" 
              className="font-montserrat h-14 px-8 text-lg border-white/20 text-white
              hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              Fale Conosco
            </Button>
          </div>
          
          {/* Cards com estatísticas e ícones */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fadeIn" 
               style={{ animationDelay: '0.8s' }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-likekar-yellow/20 to-transparent rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-likekar-yellow/50 transition-all duration-300">
                <Car size={32} className="text-likekar-yellow mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-montserrat font-bold text-3xl text-white">5000+</div>
                <div className="text-gray-400 font-inter text-sm mt-2">Clientes Satisfeitos</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-likekar-yellow/20 to-transparent rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-likekar-yellow/50 transition-all duration-300">
                <Wrench size={32} className="text-likekar-yellow mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-montserrat font-bold text-3xl text-white">26+</div>
                <div className="text-gray-400 font-inter text-sm mt-2">Anos de Experiência</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-likekar-yellow/20 to-transparent rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-likekar-yellow/50 transition-all duration-300">
                <Shield size={32} className="text-likekar-yellow mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-montserrat font-bold text-3xl text-white">50+</div>
                <div className="text-gray-400 font-inter text-sm mt-2">Marcas Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
};

export default Hero;
