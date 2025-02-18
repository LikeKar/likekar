
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Film, Speaker, Car, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subCategory?: string;
  brand: string;
  image: string;
  price?: string;
  detailImage: string;
  fullDescription: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "pelicula-premium-3m",
    name: "Película Premium 3M",
    description: "Película de alta qualidade para proteção solar e privacidade",
    category: "peliculas",
    brand: "3M",
    image: "https://images.unsplash.com/photo-1619927938134-ab41528fca67",
    detailImage: "https://images.unsplash.com/photo-1619927938134-ab41528fca67",
    fullDescription: "Película automotiva premium da 3M que oferece máxima proteção contra raios UV, redução significativa de calor e privacidade superior. Instalação profissional com garantia.",
    price: "Sob consulta"
  },
  {
    id: "jbl-6x9",
    name: "Alto-falante JBL 6x9",
    description: "Alto-falante coaxial de alta performance",
    category: "som",
    subCategory: "alto-falantes",
    brand: "JBL",
    image: "https://images.unsplash.com/photo-1610478920392-95888b4a0bd4",
    detailImage: "https://images.unsplash.com/photo-1610478920392-95888b4a0bd4",
    fullDescription: "Alto-falante JBL 6x9 de alta qualidade com potência excepcional e clareza sonora incomparável. Ideal para quem busca uma experiência sonora premium.",
    price: "Sob consulta"
  },
  {
    id: "kit-led-osram",
    name: "Kit LED Osram",
    description: "Kit completo de iluminação LED para faróis",
    category: "acessorios",
    subCategory: "iluminacao",
    brand: "Osram",
    image: "https://images.unsplash.com/photo-1615836245451-6d922558d961",
    detailImage: "https://images.unsplash.com/photo-1615836245451-6d922558d961",
    fullDescription: "Kit LED Osram de última geração para faróis, oferecendo iluminação superior e maior segurança. Instalação profissional inclusa.",
    price: "Sob consulta"
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("peliculas");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 animate-fadeIn">
          <span className="bg-likekar-yellow/10 text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Produtos Premium
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-montserrat text-likekar-black mb-4">
            Nossos Produtos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Encontre tudo o que seu carro precisa em um só lugar. Trabalhamos com as melhores marcas do mercado.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-likekar-yellow shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product Categories */}
        <Tabs defaultValue="peliculas" className="space-y-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <TabsList className="w-full justify-start space-x-4 bg-transparent p-0 overflow-x-auto flex-nowrap">
            <TabsTrigger 
              value="peliculas"
              className="data-[state=active]:bg-likekar-yellow data-[state=active]:text-black rounded-xl px-6 py-3"
              onClick={() => setActiveCategory("peliculas")}
            >
              <Film className="mr-2" />
              Películas
            </TabsTrigger>
            <TabsTrigger 
              value="som"
              className="data-[state=active]:bg-likekar-yellow data-[state=active]:text-black rounded-xl px-6 py-3"
              onClick={() => setActiveCategory("som")}
            >
              <Speaker className="mr-2" />
              Som Automotivo
            </TabsTrigger>
            <TabsTrigger 
              value="acessorios"
              className="data-[state=active]:bg-likekar-yellow data-[state=active]:text-black rounded-xl px-6 py-3"
              onClick={() => setActiveCategory("acessorios")}
            >
              <Car className="mr-2" />
              Acessórios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="peliculas" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.filter(p => p.category === "peliculas").map((product) => (
                <Link key={product.id} to={`/produtos/${product.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl border-0 shadow-md group">
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium">
                        {product.brand}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-montserrat font-bold text-xl mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">{product.price}</span>
                        <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black">
                          Saiba mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="som" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.filter(p => p.category === "som").map((product) => (
                <Link key={product.id} to={`/produtos/${product.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl border-0 shadow-md group">
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium">
                        {product.brand}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-montserrat font-bold text-xl mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">{product.price}</span>
                        <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black">
                          Saiba mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="acessorios" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.filter(p => p.category === "acessorios").map((product) => (
                <Link key={product.id} to={`/produtos/${product.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl border-0 shadow-md group">
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium">
                        {product.brand}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-montserrat font-bold text-xl mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">{product.price}</span>
                        <Button className="bg-likekar-yellow hover:bg-yellow-400 text-black">
                          Saiba mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Products;
