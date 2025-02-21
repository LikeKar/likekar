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
    logo: "/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png"
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <img alt="Like Kar Serviços" className="rounded-lg shadow-xl w-full object-cover" src="/lovable-uploads/c099f154-5ae8-42bd-8ed0-e88be8b9c9d2.png" />
              </div>
              
              <div className="lg:w-1/2 my-[32px] mx-[142px] px-[17px]">
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
                        Mais de 26 anos no mercado automotivo, com milhares de clientes satisfeitos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Wrench className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-bold mb-2">Sonhos Realizados</h3>
                      <p className="text-gray-600">
                        Transformamos o sonho do seu carro ideal em realidade.
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
                    <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat text-lg text-center mx-0 px-[77px] py-[23px] my-[15px]">
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
      <footer className="bg-likekar-black hidden md:block">
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sobre */}
            <div className="space-y-6">
              <h3 className="text-white font-montserrat font-bold text-2xl">
                LIKE KAR
              </h3>
              <p className="text-gray-400 leading-relaxed mx-[23px]">
                Transformando seu veículo com excelência e qualidade desde 2010. Referência em personalização automotiva.
              </p>
              <div className="flex space-x-4 mx-[60px]">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-likekar-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Facebook size={20} className="text-black" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-likekar-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Instagram size={20} className="text-black" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-likekar-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Youtube size={20} className="text-black" />
                </a>
              </div>
            </div>

            {/* Menu */}
            <div className="mx-[94px]">
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

            {/* Contato */}
            <div className="py-[4px] mx-[26px]">
              <h3 className="text-white font-montserrat font-bold text-xl mb-6 uppercase">
                Contato
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+551145740701" className="text-gray-400 hover:text-likekar-yellow transition-colors flex items-center">
                    <Phone size={20} className="text-likekar-yellow mr-3" />
                    +55 11 4574-0701
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@likekar.com" className="text-gray-400 hover:text-likekar-yellow transition-colors flex items-center">
                    <Mail size={20} className="text-likekar-yellow mr-3" />
                    contato@likekar.com
                  </a>
                </li>
                <li className="flex items-start text-gray-400 group">
                  <MapPin size={20} className="text-likekar-yellow mr-3 mt-1 flex-shrink-0" />
                  <span className="group-hover:text-likekar-yellow transition-colors">
                    Av. Bartolomeu de Carlos, 333
                  </span>
                </li>
              </ul>
            </div>

            {/* Horário */}
            <div className="mx-[57px]">
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
                    <p className="font-semibold mx-[31px]">Sábado</p>
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
      <footer className="bg-likekar-black md:hidden">
        <div className="container px-4 py-8">
          {/* Logo e Redes Sociais */}
          <div className="text-center mb-8">
            <h3 className="text-white font-montserrat font-bold text-2xl mb-4 hidden md:block">
              LIKE KAR
            </h3>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center">
                <Facebook size={24} className="text-black" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center">
                <Instagram size={24} className="text-black" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center">
                <Youtube size={24} className="text-black" />
              </a>
            </div>
          </div>

          {/* Informações de Contato */}
          

          {/* Horário de Funcionamento */}
          <div className="bg-black/20 rounded-lg p-6 mb-8">
            <h4 className="text-white font-montserrat font-bold text-lg mb-4 text-center">
              Horário de Funcionamento
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-gray-300">
                <span>Segunda à Sexta:</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Sábado:</span>
                <span>08:00 - 12:00</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Link to="/" className="bg-likekar-yellow text-black font-medium py-3 px-4 rounded-lg text-center text-sm">
              Home
            </Link>
            <Link to="/produtos" className="bg-likekar-yellow text-black font-medium py-3 px-4 rounded-lg text-center text-sm">
              Produtos
            </Link>
            <Link to="/contato" className="bg-likekar-yellow text-black font-medium py-3 px-4 rounded-lg text-center text-sm">
              Contato
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Like Kar.</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
