
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Speaker, Film, Car, Search } from "lucide-react";

interface Product {
  name: string;
  description: string;
  category: string;
  subCategory?: string;
  brand: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Película Premium 3M",
    description: "Película de alta qualidade para proteção solar e privacidade",
    category: "peliculas",
    brand: "3M",
    image: "/placeholder.svg"
  },
  {
    name: "Alto-falante JBL 6x9",
    description: "Alto-falante coaxial de alta performance",
    category: "som",
    subCategory: "alto-falantes",
    brand: "JBL",
    image: "/placeholder.svg"
  },
  {
    name: "Kit LED Osram",
    description: "Kit completo de iluminação LED para faróis",
    category: "acessorios",
    subCategory: "iluminacao",
    brand: "Osram",
    image: "/placeholder.svg"
  }
];

const BRANDS = [
  { name: "Focal", logo: "/placeholder.svg", description: "Referência mundial em áudio de alta fidelidade" },
  { name: "JBL", logo: "/placeholder.svg", description: "Líder em som automotivo de qualidade" },
  { name: "3M", logo: "/placeholder.svg", description: "Pioneira em películas e produtos automotivos" },
  { name: "Hertz", logo: "/placeholder.svg", description: "Excelência em som automotivo" },
  { name: "Taramps", logo: "/placeholder.svg", description: "Potência e qualidade em amplificadores" },
  { name: "Bravox", logo: "/placeholder.svg", description: "Tradição em alto-falantes" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("peliculas");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-montserrat text-likekar-black mb-4">
            Produtos e Serviços
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre tudo o que seu carro precisa em um só lugar. Trabalhamos com as melhores marcas do mercado.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-likekar-yellow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product Categories */}
        <Tabs defaultValue="peliculas" className="space-y-8">
          <TabsList className="w-full justify-start space-x-4 bg-transparent p-0">
            <TabsTrigger 
              value="peliculas"
              className="data-[state=active]:bg-likekar-yellow data-[state=active]:text-black"
            >
              <Film className="mr-2" />
              Películas
            </TabsTrigger>
            <TabsTrigger 
              value="som"
              className="data-[state=active]:bg-likekar-yellow data-[state=active]:text-black"
            >
              <Speaker className="mr-2" />
              Som Automotivo
            </TabsTrigger>
            <TabsTrigger 
              value="acessorios"
              className="data-[state=active]:bg-likekar-yellow data-[state=active]:text-black"
            >
              <Car className="mr-2" />
              Acessórios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="peliculas" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.filter(p => p.category === "peliculas").map((product, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black">
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="som" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.filter(p => p.category === "som").map((product, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black">
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="acessorios" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.filter(p => p.category === "acessorios").map((product, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black">
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Brands Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-12">Marcas Parceiras</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {BRANDS.map((brand, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-4">
                <img src={brand.logo} alt={`${brand.name} Logo`} className="w-24 h-24 object-contain" />
                <h3 className="font-montserrat font-bold text-center">{brand.name}</h3>
                <p className="text-sm text-gray-600 text-center">{brand.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
