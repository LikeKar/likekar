
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Building2, CheckCircle2, MessageSquare, Tool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
                  <Tool className="text-black" size={24} />
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
              <img 
                src="/lovable-uploads/3430e556-b884-4c88-b598-a8520a25ca7f.png"
                alt="Like Kar Serviços"
                className="rounded-lg shadow-xl w-full"
              />
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
                    <Tool className="text-black" size={24} />
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

      {/* CTA */}
      <section className="py-20 bg-likekar-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white mb-6">
            Pronto para transformar seu carro?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a ter o carro dos seus sonhos.
          </p>
          <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black font-montserrat text-lg">
            Fale Conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
