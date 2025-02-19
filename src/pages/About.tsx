
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users2, Trophy, Target } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Anos de Experiência",
      value: "10+"
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Clientes Satisfeitos",
      value: "1000+"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Projetos Realizados",
      value: "2000+"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Cidades Atendidas",
      value: "50+"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 font-montserrat mb-6">
              Sobre a Like Kar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de uma década, a Like Kar é referência em acessórios automotivos, 
              fornecendo soluções inovadoras e atendimento de excelência para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 font-montserrat">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada com a visão de transformar a experiência dos motoristas, 
                  a Like Kar nasceu do amor pela inovação automotiva e do compromisso 
                  com a qualidade.
                </p>
                <p>
                  Ao longo dos anos, nos especializamos em oferecer as melhores 
                  soluções em acessórios automotivos, desde centrais multimídia 
                  até sistemas de segurança avançados.
                </p>
                <p>
                  Nossa equipe de profissionais altamente qualificados trabalha 
                  constantemente para garantir que cada instalação seja feita com 
                  precisão e excelência.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/3430e556-b884-4c88-b598-a8520a25ca7f.png"
                alt="Like Kar Instalação"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-likekar-yellow rounded-full">
                      {stat.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <p className="text-gray-600">{stat.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Missão</h3>
                <p className="text-gray-600">
                  Oferecer soluções automotivas inovadoras que melhorem a experiência 
                  de direção dos nossos clientes, com excelência em atendimento e 
                  instalação.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a principal referência em acessórios 
                  automotivos no Brasil, sempre à frente em inovação e qualidade.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Excelência no atendimento</li>
                  <li>• Compromisso com a qualidade</li>
                  <li>• Inovação constante</li>
                  <li>• Transparência</li>
                  <li>• Responsabilidade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
