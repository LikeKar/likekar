
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Instagram, Link as LinkIcon, MessageSquare } from 'lucide-react';
import { toast } from "sonner";

interface ShareButtonsProps {
  productName: string;
  className?: string; // Adicionando className como prop opcional
}

export const ShareButtons = ({ productName, className }: ShareButtonsProps) => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Confira ${productName} na Like Kar!`;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'instagram':
        toast.info("Copie o link e compartilhe no Instagram!");
        navigator.clipboard.writeText(url);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success("Link copiado para a área de transferência!");
        break;
    }
  };

  return (
    <div className={`flex items-center space-x-4 justify-center pt-4 border-t ${className || ''}`}>
      <span className="text-sm text-gray-500 flex items-center">
        <Share2 className="w-4 h-4 mr-2" />
        Compartilhar:
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare('whatsapp')}
        className="rounded-full"
      >
        <MessageSquare className="w-4 h-4 text-green-600" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare('facebook')}
        className="rounded-full"
      >
        <Facebook className="w-4 h-4 text-blue-600" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare('instagram')}
        className="rounded-full"
      >
        <Instagram className="w-4 h-4 text-pink-600" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare('copy')}
        className="rounded-full"
      >
        <LinkIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
