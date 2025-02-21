import Navbar from "@/components/Navbar";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-montserrat text-white mb-4">
            Fale Conosco
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a transformar seu carro. Entre em contato conosco!
          </p>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-montserrat mb-8">
                Informações de Contato
              </h2>
              
              {/* Cards de Informação */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-likekar-yellow rounded-xl flex items-center justify-center mb-4">
                    <Phone className="text-black" size={24} />
                  </div>
                  <h3 className="font-montserrat font-bold mb-2">Telefone</h3>
                  <a href="tel:+5511999999999" className="text-gray-600 hover:text-black">
                    (11) 4574-0701
                  </a>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-likekar-yellow rounded-xl flex items-center justify-center mb-4">
                    <Mail className="text-black" size={24} />
                  </div>
                  <h3 className="font-montserrat font-bold mb-2">Email</h3>
                  <a href="mailto:contato@likekar.com" className="text-gray-600 hover:text-black">
                    contato@likekar.com
                  </a>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-likekar-yellow rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <h3 className="font-montserrat font-bold mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Bartolomeu de Carlos, 333
                    <br />
                    São Paulo, SP
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-likekar-yellow rounded-xl flex items-center justify-center mb-4">
                    <Clock className="text-black" size={24} />
                  </div>
                  <h3 className="font-montserrat font-bold mb-2">Horário</h3>
                  <p className="text-gray-600">
                    Seg-Sex: 08h - 18h
                    <br />
                    Sáb: 08h - 12h
                  </p>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-12">
                <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8869961505543!2d-46.5235297!3d-23.534337399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e33e36edd3b%3A0x7d74b04741735cbd!2sAv.%20Bartolomeu%20de%20Carlos%2C%20333%20-%20Vila%20Carrrao%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003447-000!5e0!3m2!1sen!2sbr!4v1631234567890!5m2!1sen!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen={true} loading="lazy"></iframe>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;