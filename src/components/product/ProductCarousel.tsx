
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductMedia {
  fotos: (string | null)[];
  videos: string[];
}

interface ProductCarouselProps {
  media: ProductMedia;
  productName: string;
}

export const ProductCarousel = ({ media, productName }: ProductCarouselProps) => {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {media.fotos.map((foto, index) => (
          <CarouselItem key={`foto-${index}`}>
            <div className="relative aspect-video">
              <img 
                src={foto || '/placeholder.svg'} 
                alt={`${productName} - Foto ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
        {media.videos.map((video, index) => (
          <CarouselItem key={`video-${index}`}>
            <div className="relative aspect-video">
              <iframe
                src={video}
                title={`${productName} - Vídeo ${index + 1}`}
                className="w-full h-full rounded-xl"
                allowFullScreen
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
