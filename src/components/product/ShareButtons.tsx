
import { Button } from "@/components/ui/button";
import { Share2, Link as LinkIcon } from 'lucide-react';
import { toast } from "sonner";

interface ShareButtonsProps {
  productName: string;
  className?: string;
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
        className="rounded-full p-0 overflow-hidden border-0"
      >
        <img 
          src="/lovable-uploads/62d89078-3e05-4152-9df3-539d6801c128.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare('facebook')}
        className="rounded-full p-0 overflow-hidden border-0"
      >
        <img 
          src="/lovable-uploads/94528df8-a7dd-4597-a349-37b57a0953c3.png" 
          alt="Facebook" 
          className="w-8 h-8"
        />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleShare('instagram')}
        className="rounded-full p-0 overflow-hidden border-0"
      >
        <img 
          src="/lovable-uploads/7a042ba0-7e80-4bfc-ab38-ce91350be9ce.png" 
          alt="Instagram" 
          className="w-8 h-8"
        />
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
