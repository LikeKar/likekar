
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight, Film, Speaker, Car } from "lucide-react";
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
  specs?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "pelicula-premium-3m",
    name: "Película Fumê Premium",
    description: "Proteção UV 99% | Redução de Calor",
    category: "peliculas",
    brand: "3M",
    image: "https://images.unsplash.com/photo-1619927938134-ab41528fca67",
    detailImage: "https://images.unsplash.com/photo-1619927938134-ab41528fca67",
    fullDescription: "Película automotiva premium da 3M que oferece máxima proteção contra raios UV, redução significativa de calor e privacidade superior. Instalação profissional com garantia.",
    price: "Sob consulta",
    specs: ["Proteção UV 99%", "Redução de Calor", "Instalação Profissional"]
  },
  {
    id: "jbl-6x9",
    name: "Kit Alto-falantes 6\"",
    description: "200W RMS | Qualidade Premium",
    category: "som",
    subCategory: "alto-falantes",
    brand: "JBL",
    image: "https://images.unsplash.com/photo-1610478920392-95888b4a0bd4",
    detailImage: "https://images.unsplash.com/photo-1610478920392-95888b4a0bd4",
    fullDescription: "Alto-falante JBL de alta qualidade com potência excepcional e clareza sonora incomparável. Ideal para quem busca uma experiência sonora premium.",
    price: "Sob consulta",
    specs: ["200W RMS", "Qualidade Premium", "Garantia JBL"]
  },
  {
    id: "kit-led-osram",
    name: "Kit Super LED H7",
    description: "6000K | Farol Alto/Baixo",
    category: "acessorios",
    subCategory: "iluminacao",
    brand: "Osram",
    image: "https://images.unsplash.com/photo-1615836245451-6d922558d961",
    detailImage: "https://images.unsplash.com/photo-1615836245451-6d922558d961",
    fullDescription: "Kit LED Osram de última geração para faróis, oferecendo iluminação superior e maior segurança. Instalação profissional inclusa.",
    price: "Sob consulta",
    specs: ["6000K", "Farol Alto/Baixo", "Instalação Inclusa"]
  }
];

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  const filteredProducts = PRODUCTS.filter(product => {
    if (activeFilter !== "todos" && product.category !== activeFilter) return false;
    if (selectedBrand && product.brand !== selectedBrand) return false;
    if (selectedCategory && product.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-montserrat text-black mb-4">
            Nossos Produtos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre tudo o que seu carro precisa em um só lugar. Trabalhamos com as melhores marcas do mercado.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as Marcas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as Marcas</SelectItem>
              <SelectItem value="3M">3M</SelectItem>
              <SelectItem value="JBL">JBL</SelectItem>
              <SelectItem value="Osram">Osram</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as Categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as Categorias</SelectItem>
              <SelectItem value="peliculas">Películas</SelectItem>
              <SelectItem value="som">Som Automotivo</SelectItem>
              <SelectItem value="acessorios">Acessórios</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Todos os Tipos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todos os Tipos</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button 
            variant={activeFilter === "todos" ? "default" : "outline"}
            className={activeFilter === "todos" ? "bg-blue-600 hover:bg-blue-700" : ""}
            onClick={() => setActiveFilter("todos")}
          >
            Todos os Produtos
          </Button>
          <Button 
            variant={activeFilter === "peliculas" ? "default" : "outline"}
            className={`gap-2 ${activeFilter === "peliculas" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
            onClick={() => setActiveFilter("peliculas")}
          >
            <Film size={18} />
            Películas
          </Button>
          <Button 
            variant={activeFilter === "som" ? "default" : "outline"}
            className={`gap-2 ${activeFilter === "som" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
            onClick={() => setActiveFilter("som")}
          >
            <Speaker size={18} />
            Som Automotivo
          </Button>
          <Button 
            variant={activeFilter === "acessorios" ? "default" : "outline"}
            className={`gap-2 ${activeFilter === "acessorios" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
            onClick={() => setActiveFilter("acessorios")}
          >
            <Car size={18} />
            Acessórios
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/produtos/${product.id}`}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Ver Detalhes
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
