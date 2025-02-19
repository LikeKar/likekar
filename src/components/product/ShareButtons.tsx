
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Link as LinkIcon } from 'lucide-react';
import { toast } from "sonner";

interface ShareButtonsProps {
  productName: string;
}

export const ShareButtons = ({ productName }: ShareButtonsProps) => {
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
    <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-100">
      <span className="text-sm text-gray-500 flex items-center">
        <Share2 className="w-4 h-4 mr-2" />
        Compartilhar
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleShare('whatsapp')}
        className="rounded-full hover:bg-green-50 hover:text-green-600 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleShare('copy')}
        className="rounded-full hover:bg-gray-50 hover:text-gray-600 transition-colors"
      >
        <LinkIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};
