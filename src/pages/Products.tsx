
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
import { ChevronRight } from "lucide-react";

interface Product {
  name: string;
  description: string;
  category: string;
  subCategory?: string;
  brand: string;
  image: string;
  specs?: string[];
}

const PRODUCTS: Product[] = [
  {
    name: "Película Fumê Premium",
    description: "Proteção UV 99% | Redução de Calor",
    category: "peliculas",
    brand: "3M",
    image: "/placeholder.svg",
    specs: ["Proteção UV 99%", "Redução de Calor"]
  },
  {
    name: "Kit Alto-falantes 6"",
    description: "200W RMS | Qualidade Premium",
    category: "som",
    subCategory: "alto-falantes",
    brand: "JBL",
    image: "/placeholder.svg",
    specs: ["200W RMS", "Qualidade Premium"]
  },
  {
    name: "Kit Super LED H7",
    description: "6000K | Farol Alto/Baixo",
    category: "acessorios",
    subCategory: "iluminacao",
    brand: "Osram",
    image: "/placeholder.svg",
    specs: ["6000K", "Farol Alto/Baixo"]
  },
  {
    name: "Central Multimídia 9"",
    description: "Android | GPS | Bluetooth",
    category: "acessorios",
    subCategory: "multimidia",
    brand: "Pioneer",
    image: "/placeholder.svg",
    specs: ["Android", "GPS", "Bluetooth"]
  }
];

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Todas as Marcas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as Marcas</SelectItem>
              <SelectItem value="3M">3M</SelectItem>
              <SelectItem value="JBL">JBL</SelectItem>
              <SelectItem value="Osram">Osram</SelectItem>
              <SelectItem value="Pioneer">Pioneer</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="bg-white">
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
            <SelectTrigger className="bg-white">
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
        <div className="flex flex-wrap gap-2 mb-8">
          <Button 
            variant="default"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Todos os Produtos
          </Button>
          <Button 
            variant="outline"
            className="bg-white"
          >
            Películas
          </Button>
          <Button 
            variant="outline"
            className="bg-white"
          >
            Som Automotivo
          </Button>
          <Button 
            variant="outline"
            className="bg-white"
          >
            Acessórios
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, idx) => (
            <Card key={idx} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Ver Detalhes
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
