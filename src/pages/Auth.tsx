
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres").optional(),
});

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Verificar sessão atual ao montar o componente
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Current session:", session);
      if (session?.user) {
        console.log("User already logged in, redirecting to admin");
        navigate("/admin");
      }
    });

    // Monitorar mudanças na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event, session);
      if (event === 'SIGNED_IN' && session) {
        console.log("Login successful, redirecting to admin");
        navigate("/admin");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const handleAuth = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      console.log("Starting authentication process...");

      if (isLogin) {
        // Login
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });

        if (error) {
          console.error("Login error:", error);
          if (error.message === 'Invalid login credentials') {
            throw new Error('Email ou senha inválidos');
          }
          throw error;
        }

        if (data.user) {
          console.log("Login successful:", data.user);
          toast.success("Login realizado com sucesso!");
          // Redirecionamento será feito pelo onAuthStateChange
        }
      } else {
        // Signup
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            data: {
              name: values.name,
            },
            emailRedirectTo: `${window.location.origin}/auth`,
          },
        });

        if (signUpError) {
          console.error("Signup error:", signUpError);
          if (signUpError.message.includes('User already registered')) {
            throw new Error('Este email já está cadastrado');
          }
          throw signUpError;
        }

        if (data.user) {
          console.log("Signup successful:", data.user);
          toast.success("Conta criada com sucesso! Verifique seu email para confirmar.");
          setIsLogin(true);
          form.reset();
        }
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {isLogin ? "Fazer Login" : "Criar Conta"}
          </h2>
          <p className="text-sm text-gray-500">
            {isLogin
              ? "Faça login para gerenciar os produtos"
              : "Crie sua conta para acessar"}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAuth)} className="space-y-6">
            {!isLogin && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Seu nome"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="seu@email.com"
                        type="email"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="••••••"
                        type="password"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-likekar-yellow hover:bg-yellow-400 text-black font-medium"
              disabled={loading}
            >
              {loading
                ? "Carregando..."
                : isLogin
                ? "Entrar"
                : "Criar Conta"}
            </Button>
          </form>
        </Form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              form.reset();
            }}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isLogin
              ? "Não tem uma conta? Cadastre-se"
              : "Já tem uma conta? Faça login"}
          </button>
        </div>
      </div>
    </div>
  );
}
