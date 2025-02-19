
import { Button } from "@/components/ui/button";

interface QuoteFormProps {
  onClose: () => void;
}

export const QuoteForm = ({ onClose }: QuoteFormProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Solicitar Orçamento</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Telefone</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Sua mensagem..."
            />
          </div>
          <div className="flex gap-4">
            <Button
              type="submit"
              className="flex-1 bg-likekar-yellow hover:bg-yellow-400 text-black"
            >
              Enviar
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
