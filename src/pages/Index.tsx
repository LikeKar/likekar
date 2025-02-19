import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import { Building2, CheckCircle2, MessageSquare, Wrench, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from "lucide-react";
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
  const whatsappNumber = "551145740701";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  const handleContactClick = () => {
    window.open(whatsappLink, '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  const partners = [
    { name: "3M", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "JBL", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Pioneer", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Osram", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Bosch", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
    { name: "Alpine", logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <PromotionalBanner />

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

      {/* Footer Melhorado */}
      <footer className="bg-likekar-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h3 className="text-white font-montserrat font-bold text-2xl">
                LIKE KAR
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Transformando seu veículo com excelência e qualidade desde 2010. Referência em personalização automotiva.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-likekar-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <Facebook size={20} className="text-black" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-likekar-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <Instagram size={20} className="text-black" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-likekar-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <Youtube size={20} className="text-black" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 uppercase">
                Menu
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-likekar-yellow transition-colors flex items-center">
                    <span className="w-2 h-2 bg-likekar-yellow rounded-full mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="text-gray-400 hover:text-likekar-yellow transition-colors flex items-center">
                    <span className="w-2 h-2 bg-likekar-yellow rounded-full mr-2"></span>
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-400 hover:text-likekar-yellow transition-colors flex items-center">
                    <span className="w-2 h-2 bg-likekar-yellow rounded-full mr-2"></span>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 uppercase">
                Contato
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400 hover:text-likekar-yellow transition-colors">
                  <Phone size={20} className="text-likekar-yellow mr-3" />
                  <a href="tel:+551145740701">
                    +55 11 4574-0701
                  </a>
                </li>
                <li className="flex items-center text-gray-400 hover:text-likekar-yellow transition-colors">
                  <Mail size={20} className="text-likekar-yellow mr-3" />
                  <a href="mailto:contato@likekar.com">
                    contato@likekar.com
                  </a>
                </li>
                <li className="flex items-start text-gray-400 group">
                  <MapPin size={20} className="text-likekar-yellow mr-3 mt-1 flex-shrink-0" />
                  <span className="group-hover:text-likekar-yellow transition-colors">
                    Av. Bartolomeu de Carlos, 333 - Jardim Flor da Montanha, Guarulhos
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 uppercase">
                Horário
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Clock size={20} className="text-likekar-yellow mr-3" />
                  <div>
                    <p className="font-semibold">Segunda à Sexta</p>
                    <p>08:00 - 18:00</p>
                  </div>
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock size={20} className="text-likekar-yellow mr-3" />
                  <div>
                    <p className="font-semibold">Sábado</p>
                    <p>08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
