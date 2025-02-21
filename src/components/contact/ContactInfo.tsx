
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold font-montserrat mb-8">
        Informações de Contato
      </h2>
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center mr-4">
            <Phone className="text-black" size={24} />
          </div>
          <div>
            <h3 className="font-montserrat font-bold">Telefone</h3>
            <a href="tel:+5511999999999" className="text-gray-600 hover:text-black">
              (11) 99999-9999
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center mr-4">
            <Mail className="text-black" size={24} />
          </div>
          <div>
            <h3 className="font-montserrat font-bold">Email</h3>
            <a href="mailto:contato@likekar.com" className="text-gray-600 hover:text-black">
              contato@likekar.com
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-12 h-12 bg-likekar-yellow rounded-full flex items-center justify-center mr-4">
            <MapPin className="text-black" size={24} />
          </div>
          <div>
            <h3 className="font-montserrat font-bold">Endereço</h3>
            <p className="text-gray-600">
              Rua Example, 123 - São Paulo, SP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
