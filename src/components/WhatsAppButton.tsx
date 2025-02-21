
import { MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=551145740701&text&type=phone_number&app_absent=0', '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg 
      hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 group animate-bounce"
      aria-label="Abrir WhatsApp"
    >
      <div className="absolute -inset-2 bg-green-500 rounded-full opacity-30 animate-ping" />
      <div className="relative">
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      </div>
    </button>
  );
};

export default WhatsAppButton;
