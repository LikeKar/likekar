
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const PromotionalBanner = () => {
  const banners = [
    {
      id: 1,
      image: "/lovable-uploads/4b5c92f9-87bb-4b37-9af8-4e67075273fb.png",
      link: "/produtos",
      alt: "Centrais Multimídias"
    },
    {
      id: 2,
      image: "/lovable-uploads/f01dea51-3212-4de6-8504-ebe20a6e09eb.png",
      link: "/produtos",
      alt: "Novidades Like Kar"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <Link to={banner.link}>
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PromotionalBanner;
