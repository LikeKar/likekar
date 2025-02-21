
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import { Building2, CheckCircle2, MessageSquare, Wrench, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const handleContactClick = () => {
    const whatsappNumber = "551145740701";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <PromotionalBanner />

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat mb-6">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços para deixar seu carro ainda mais incrível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-likekar-yellow" />,
                title: "Instalação Profissional",
                description: "Equipe especializada com anos de experiência em instalação de acessórios automotivos."
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-likekar-yellow" />,
                title: "Garantia de Qualidade",
                description: "Trabalhamos apenas com as melhores marcas do mercado, garantindo durabilidade e satisfação."
              },
              {
                icon: <Wrench className="h-8 w-8 text-likekar-yellow" />,
                title: "Manutenção Especializada",
                description: "Serviço de manutenção e suporte técnico para todos os produtos instalados."
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-likekar-yellow/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-montserrat mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat mb-6">
                Venha nos Visitar
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Estamos localizados em uma região de fácil acesso em Guarulhos. Venha conhecer nossa loja e descobrir todos os produtos e serviços que oferecemos para seu veículo.
              </p>
              <div className="flex items-start space-x-4 mb-8">
                <MapPin className="h-6 w-6 text-likekar-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Av. Bartolomeu de Carlos, 333</p>
                  <p className="text-gray-600">Jardim Flor da Montanha, Guarulhos - SP</p>
                  <p className="text-gray-600">CEP 07097-420</p>
                </div>
              </div>
              <Button onClick={handleContactClick} className="bg-likekar-yellow hover:bg-yellow-400 text-black">
                <Phone className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.9613371963897!2d-46.51791312534959!3d-23.45932225936611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5193749e9e7%3A0x407e7183d919673e!2sAv.%20Bartolomeu%20de%20Carlos%2C%20333%20-%20Jardim%20Flor%20da%20Montanha%2C%20Guarulhos%20-%20SP%2C%2007097-420!5e0!3m2!1spt-BR!2sbr!4v1710203622599!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-likekar-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-likekar-yellow/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat text-white mb-6">
            Pronto para transformar seu carro?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Entre em contato conosco e descubra como podemos ajudar você a ter o carro dos seus sonhos.
          </p>
          <Button onClick={handleContactClick} className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat text-lg h-14 px-8">
            <Phone className="mr-2" size={20} />
            Fale Conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
