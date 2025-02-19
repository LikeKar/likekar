
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import LocationMap from "@/components/LocationMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PromotionalBanner />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-gray-900">
              Nossas Unidades
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Encontre a unidade Like Kar mais próxima de você
            </p>
          </div>
          <LocationMap />
        </div>
      </section>
    </div>
  );
};

export default Index;
