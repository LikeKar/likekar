
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Phone, Mail, MapPin, Quote, Star } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Mensagem enviada com sucesso!");
    form.reset();
  };

  const testimonials = [
    {
      name: "João Silva",
      role: "Cliente desde 2020",
      content: "Excelente trabalho na instalação do som do meu carro. Superou todas as expectativas!",
      rating: 5,
    },
    {
      name: "Maria Oliveira",
      role: "Cliente desde 2021",
      content: "As películas ficaram perfeitas, acabamento impecável. Recomendo muito!",
      rating: 5,
    },
    {
      name: "Pedro Santos",
      role: "Cliente desde 2019",
      content: "Profissionais muito atenciosos e trabalho de alta qualidade. Voltarei sempre!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-likekar-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-montserrat text-white mb-4">
            Fale Conosco
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a transformar seu carro. Entre em contato conosco!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
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

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold font-montserrat mb-6">
                    Envie sua Mensagem
                  </h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Digite sua mensagem aqui..." 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat mb-4">
              Depoimentos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-likekar-yellow mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div>
                    <h4 className="font-montserrat font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
