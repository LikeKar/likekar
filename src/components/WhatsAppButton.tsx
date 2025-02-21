
import { toast } from 'sonner';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=551145740701&text&type=phone_number&app_absent=0', '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 rounded-full shadow-lg 
      hover:scale-110 transition-all duration-300 group"
      aria-label="Abrir WhatsApp"
    >
      <div className="absolute -inset-2 bg-green-500 rounded-full opacity-30 animate-ping" />
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <img 
          src="/lovable-uploads/f26a30a1-a024-42b1-8451-79bada866e01.png" 
          alt="WhatsApp"
          className="w-full h-full object-contain"
        />
      </div>
    </button>
  );
};

export default WhatsAppButton;
