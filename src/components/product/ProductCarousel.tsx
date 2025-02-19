
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
  // Filtra fotos nulas ou vazias
  const validPhotos = media.fotos.filter(foto => foto && foto.trim() !== '');
  
  // Filtra vídeos vazios e formata URLs do YouTube
  const validVideos = media.videos
    .filter(video => video && video.trim() !== '')
    .map(video => {
      // Converte URLs do YouTube para formato de embed
      if (video.includes('youtube.com') || video.includes('youtu.be')) {
        const videoId = video.includes('youtu.be') 
          ? video.split('/').pop()
          : video.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return video;
    });

  if (validPhotos.length === 0 && validVideos.length === 0) {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Sem mídia disponível</p>
      </div>
    );
  }

  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {validPhotos.map((foto, index) => (
          <CarouselItem key={`foto-${index}`}>
            <div className="relative aspect-[4/3] lg:aspect-[16/9]">
              <img 
                src={foto || '/placeholder.svg'} 
                alt={`${productName} - Foto ${index + 1}`}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
        {validVideos.map((video, index) => (
          <CarouselItem key={`video-${index}`}>
            <div className="relative aspect-[4/3] lg:aspect-[16/9]">
              <iframe
                src={video}
                title={`${productName} - Vídeo ${index + 1}`}
                className="w-full h-full rounded-xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {(validPhotos.length > 1 || validVideos.length > 0) && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};
