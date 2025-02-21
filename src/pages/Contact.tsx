
import Navbar from "@/components/Navbar";
import { Mail, Phone, MessageSquare } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            Como você prefere falar com a gente?
          </h1>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Email Card */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-likekar-yellow rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">E-mail</h3>
              <p className="text-gray-600 mb-4">
                Tem alguma dúvida?
              </p>
              <a href="mailto:contato@likekar.com.br" className="text-black hover:text-likekar-yellow transition-colors font-medium">
                contato@likekar.com.br
              </a>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-likekar-yellow rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">Telefone</h3>
              <p className="text-gray-600 mb-4">
                Você pode ligar a qualquer hora.
              </p>
              <a href="tel:+551145740701" className="text-black hover:text-likekar-yellow transition-colors font-medium">
                (11) 4574-0701
              </a>
            </div>

            {/* Chat Card */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-likekar-yellow rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">Chat</h3>
              <p className="text-gray-600 mb-4">
                Precisa de uma ajuda agora?
              </p>
              <a href="https://wa.me/551145740701" target="_blank" rel="noopener noreferrer" className="text-black hover:text-likekar-yellow transition-colors font-medium">
                Iniciar conversa no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat mb-4">
              Venha nos Visitar
            </h2>
            <p className="text-gray-600">Av. Bartolomeu de Carlos, 333 - São Paulo, SP</p>
          </div>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8869961505543!2d-46.5235297!3d-23.534337399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e33e36edd3b%3A0x7d74b04741735cbd!2sAv.%20Bartolomeu%20de%20Carlos%2C%20333%20-%20Vila%20Carrrao%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003447-000!5e0!3m2!1sen!2sbr!4v1631234567890!5m2!1sen!2sbr" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;
