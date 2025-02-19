import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Building2, CheckCircle2, MessageSquare, Wrench, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const navigate = useNavigate();
  const partners = [
    { name: "3M", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "JBL", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Pioneer", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Osram", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Bosch", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Alpine", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
  ];

  const handleContactClick = () => {
    navigate('/contato');
    toast.success("Redirecionando para página de contato...");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />

      {/* Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços para deixar seu carro com a sua cara
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-likekar-yellow rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Building2 className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-center mb-2">Películas</h3>
                <p className="text-gray-600 text-center">
                  Instalação profissional de películas automotivas com garantia
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-likekar-yellow rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Wrench className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-center mb-2">Som Automotivo</h3>
                <p className="text-gray-600 text-center">
                  Instalação e manutenção de sistemas de som de alta qualidade
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-likekar-yellow rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle2 className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-center mb-2">Acessórios</h3>
                <p className="text-gray-600 text-center">
                  Instalação de acessórios para personalizar seu veículo
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-likekar-yellow rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MessageSquare className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-center mb-2">Consultoria</h3>
                <p className="text-gray-600 text-center">
                  Orientação especializada para melhorar seu veículo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img alt="Like Kar Serviços" className="rounded-lg shadow-xl w-full object-cover" src="/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold font-montserrat mb-6">
                Por que escolher a Like Kar?
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold mb-2">Experiência Comprovada</h3>
                    <p className="text-gray-600">
                      Mais de 10 anos no mercado automotivo, com milhares de clientes satisfeitos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Wrench className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold mb-2">Produtos Premium</h3>
                    <p className="text-gray-600">
                      Trabalhamos apenas com as melhores marcas e produtos do mercado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold mb-2">Atendimento Personalizado</h3>
                    <p className="text-gray-600">
                      Equipe especializada para atender todas as suas necessidades.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/produtos">
                  <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat text-lg">
                    Conheça Nossos Produtos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com as melhores marcas do mercado para garantir a qualidade dos nossos serviços
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="w-32 h-32 relative mb-4">
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-montserrat font-bold text-center">
                          {partner.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-likekar-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white mb-6">
            Pronto para transformar seu carro?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a ter o carro dos seus sonhos.
          </p>
          <Button 
            onClick={handleContactClick}
            className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat text-lg"
          >
            <Phone className="mr-2" size={20} />
            Fale Conosco
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-likekar-black py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sobre */}
            <div>
              <h3 className="text-white font-montserrat font-bold text-xl mb-4">
                Sobre a Like Kar
              </h3>
              <p className="text-gray-400">
                Especialistas em personalização automotiva, oferecendo serviços de alta qualidade para transformar seu veículo.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-white font-montserrat font-bold text-xl mb-4">
                Contato
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Phone size={20} className="mr-2 text-likekar-yellow" />
                  <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                    (11) 99999-9999
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail size={20} className="mr-2 text-likekar-yellow" />
                  <a href="mailto:contato@likekar.com" className="hover:text-white transition-colors">
                    contato@likekar.com
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin size={20} className="mr-2 text-likekar-yellow" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-white font-montserrat font-bold text-xl mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="text-gray-400 hover:text-white transition-colors">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-white font-montserrat font-bold text-xl mb-4">
                Siga-nos
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-likekar-yellow transition-colors"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-likekar-yellow transition-colors"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-likekar-yellow transition-colors"
                >
                  <Youtube size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Like Kar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
