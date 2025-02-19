
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/Auth";
import Admin from "@/pages/Admin";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/produtos/:productId" element={<ProductDetail />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
