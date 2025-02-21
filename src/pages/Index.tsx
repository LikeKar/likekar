import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import Map from "@/components/Map";
import { Building2, CheckCircle2, MessageSquare, Wrench, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const navigate = useNavigate();
  const whatsappNumber = "551145740701";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const handleContactClick = () => {
    window.open(whatsappLink, '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  const partners = [{
    name: "JBL",
    logo: "/lovable-uploads/c006c759-b5f9-4749-9249-c95f966f83ef.png"
  }, {
    name: "Pioneer",
    logo: "/lovable-uploads/c3f316f9-d75f-46c1-bf61-7e5c21bf40cb.png"
  }, {
    name: "Htech",
    logo: "/lovable-uploads/1c884ea7-e928-405d-b340-0e68047813ce.png"
  }, {
    name: "2mix",
    logo: "/lovable-uploads/0ef11402-c2e8-49ad-b1a2-6234ed3980bd.png"
  }, {
    name: "Winca",
    logo: "/lovable-uploads/18cec1f1-dfcf-4626-bcee-43d608bf518b.png"
  }, {
    name: "Osram",
    logo: "/lovable-uploads/cfafc983-e801-4ae2-b5f8-79fac4608395.png"
  }, {
    name: "Bravox",
    logo: "/lovable-uploads/2ddd1a1b-83a6-48d0-a7bb-51a11221e55b.png"
  }, {
    name: "Positron",
    logo: "/lovable-uploads/5fcb3237-237f-4fc4-bc93-4e9d56512887.png"
  }, {
    name: "Taramps",
    logo: "/lovable-uploads/23052ce6-a2ce-4f3f-8af6-1c893d7afe64.png"
  }, {
    name: "Adak",
    logo: "/lovable-uploads/50df2582-6f58-4253-a00f-36721383ba7a.png"
  }, {
    name: "Tury",
    logo: "/lovable-uploads/fc37b677-cf0c-45bb-aa21-bac2aa71beab.png"
  }, {
    name: "Etech",
    logo: "/lovable-uploads/c2dba4e7-0f3c-45c3-b46f-645f6c2e7461.png"
  }, {
    name: "Eros",
    logo: "/lovable-uploads/098f3533-203b-44ee-a093-86c5206e84cf.png"
  }, {
    name: "Audiophonic",
    logo: "/lovable-uploads/1c60bdc1-2dcb-4dab-afab-874660ce5f2f.png"
  }];

  return <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <PromotionalBanner />

      {/* Conteúdo Principal com Container */}
      <div className="flex-1">
        {/* Serviços */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="lg:flex lg:items-center lg:gap-16">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-24 h-24 bg-likekar-yellow rounded-full opacity-20 animate-pulse"></div>
                  <img 
                    alt="Like Kar Serviços" 
                    className="rounded-2xl shadow-2xl w-full object-cover relative z-10 transform transition-transform duration-500 hover:scale-105" 
                    src="/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" 
                  />
                  <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-black rounded-full opacity-10 animate-pulse delay-150"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold font-montserrat bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                    Por que escolher a Like Kar?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Experiência e excelência em cada detalhe do seu veículo
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-likekar-yellow rounded-xl flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:rotate-6">
                        <CheckCircle2 className="text-black w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-montserrat font-bold mb-2">Experiência Comprovada</h3>
                        <p className="text-gray-600">
                          Mais de 26 anos no mercado automotivo, com milhares de clientes satisfeitos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-likekar-yellow rounded-xl flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:rotate-6">
                        <Wrench className="text-black w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-montserrat font-bold mb-2">Sonhos Realizados</h3>
                        <p className="text-gray-600">
                          Transformamos o sonho do seu carro ideal em realidade com expertise e dedicação.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-likekar-yellow rounded-xl flex items-center justify-center flex-shrink-0 transform transition-transform group-hover:rotate-6">
                        <MessageSquare className="text-black w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-montserrat font-bold mb-2">Atendimento Personalizado</h3>
                        <p className="text-gray-600">
                          Equipe especializada para atender todas as suas necessidades com excelência.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link to="/produtos">
                    <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                      Conheça Nossos Produtos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas Parceiras */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-montserrat mb-4">
                Marcas Parceiras
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trabalhamos com as melhores marcas do mercado para garantir a qualidade dos nossos serviços
              </p>
            </div>

            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {partners.map((partner, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                          <div className="w-32 h-32 relative mb-4">
                            <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-contain" />
                          </div>
                          <h3 className="text-xl font-montserrat font-bold text-center">
                            {partner.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        {/* Localização */}
        <section className="py-20 bg-gray-50">
          
        </section>

        {/* CTA */}
        <section className="py-20 bg-likekar-black">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white mb-6">
              Pronto para transformar seu carro?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Entre em contato conosco e descubra como podemos ajudar você a ter o carro dos seus sonhos.
            </p>
            <Button onClick={handleContactClick} className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat text-lg">
              <Phone className="mr-2" size={20} />
              Fale Conosco
            </Button>
          </div>
        </section>
      </div>

      {/* Footer Desktop (escondido em mobile) */}
      <footer className="bg-gradient-to-br from-gray-900 to-black hidden md:block">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sobre */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-white font-montserrat font-bold text-2xl relative z-10">
                  LIKE KAR
                </h3>
                <div className="absolute -left-2 -top-2 w-12 h-12 bg-likekar-yellow rounded-full opacity-10 animate-pulse"></div>
              </div>
              <p className="text-gray-400 leading-relaxed mx-[23px] hover:text-gray-300 transition-colors">
                Transformando seu veículo com excelência e qualidade desde 2010. Referência em personalização automotiva.
              </p>
              <div className="flex space-x-4 mx-[60px]">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-likekar-yellow rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Facebook size={20} className="text-black" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-likekar-yellow rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Instagram size={20} className="text-black" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-likekar-yellow rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Youtube size={20} className="text-black" />
                </a>
              </div>
            </div>

            {/* Menu */}
            <div className="mx-[94px]">
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-likekar-yellow">
                Menu
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-likekar-yellow transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-likekar-yellow rounded-full mr-2 transform group-hover:scale-150 transition-transform"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="text-gray-400 hover:text-likekar-yellow transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-likekar-yellow rounded-full mr-2 transform group-hover:scale-150 transition-transform"></span>
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-400 hover:text-likekar-yellow transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-likekar-yellow rounded-full mr-2 transform group-hover:scale-150 transition-transform"></span>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div className="py-[4px] mx-[26px]">
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-likekar-yellow">
                Contato
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+551145740701" className="text-gray-400 hover:text-likekar-yellow transition-all duration-300 flex items-center group">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-likekar-yellow transition-colors">
                      <Phone size={20} className="text-likekar-yellow group-hover:text-black transition-colors" />
                    </div>
                    +55 11 4574-0701
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@likekar.com" className="text-gray-400 hover:text-likekar-yellow transition-all duration-300 flex items-center group">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-likekar-yellow transition-colors">
                      <Mail size={20} className="text-likekar-yellow group-hover:text-black transition-colors" />
                    </div>
                    contato@likekar.com
                  </a>
                </li>
                <li className="flex items-start text-gray-400 group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-likekar-yellow transition-colors">
                    <MapPin size={20} className="text-likekar-yellow group-hover:text-black transition-colors" />
                  </div>
                  <span className="group-hover:text-likekar-yellow transition-all duration-300">
                    Av. Bartolomeu de Carlos, 333
                  </span>
                </li>
              </ul>
            </div>

            {/* Horário */}
            <div className="mx-[57px]">
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 uppercase relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-likekar-yellow">
                Horário
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400 group hover:text-likekar-yellow transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-likekar-yellow transition-colors">
                    <Clock size={20} className="text-likekar-yellow group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold">Segunda à Sexta</p>
                    <p>08:00 - 18:00</p>
                  </div>
                </li>
                <li className="flex items-center text-gray-400 group hover:text-likekar-yellow transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-likekar-yellow transition-colors">
                    <Clock size={20} className="text-likekar-yellow group-hover:text-black transition-colors" />
                  </div>
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
          <div className="container mx-auto px-4 max-w-7xl py-6">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Like Kar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Footer Mobile (visível apenas em mobile) */}
      <footer className="bg-gradient-to-br from-gray-900 to-black md:hidden">
        <div className="container px-4 py-6">
          {/* Localização e Contato Rápido */}
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-likekar-yellow rounded-lg flex items-center justify-center">
                <MapPin size={20} className="text-black" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">Visite-nos</h4>
                <p className="text-gray-300 text-sm">Av. Bartolomeu de Carlos, 333</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Av. Bartolomeu de Carlos, 333" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-likekar-yellow p-2 rounded-lg"
              >
                <Map className="w-5 h-5 text-black" />
              </a>
            </div>
            <div className="flex justify-between">
              <a href="tel:+551145740701" className="flex items-center bg-gray-800/30 rounded-lg p-2 flex-1 mr-2">
                <Phone className="w-4 h-4 text-likekar-yellow mr-2" />
                <span className="text-gray-300 text-sm">4574-0701</span>
              </a>
              <a href="https://wa.me/551145740701" className="flex items-center bg-gray-800/30 rounded-lg p-2 flex-1">
                <MessageSquare className="w-4 h-4 text-likekar-yellow mr-2" />
                <span className="text-gray-300 text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Horário Resumido */}
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-3 mb-4">
            <div className="flex items-center justify-between text-gray-300 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-likekar-yellow mr-2" />
                <span>Seg-Sex:</span>
              </div>
              <span>08h - 18h</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center space-x-4 mb-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-likekar-yellow rounded-lg flex items-center justify-center"
            >
              <Facebook size={18} className="text-black" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-likekar-yellow rounded-lg flex items-center justify-center"
            >
              <Instagram size={18} className="text-black" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-likekar-yellow rounded-lg flex items-center justify-center"
            >
              <Youtube size={18} className="text-black" />
            </a>
          </div>

          {/* Copyright simplificado */}
          <div className="text-center text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Like Kar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
