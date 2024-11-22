"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Background effect */}
      <div
        className="
      absolute top-0 left-1/2 transform -translate-x-1/2
      w-[800px] h-[800px]
      bg-gradient-to-r from-teal-400/20 to-black/0
      rounded-full blur-2xl opacity-70
    "
      />
      <div
        className="
      absolute top-0 left-1/4 transform -translate-x-1/4
      w-[600px] h-[600px]
      bg-gradient-to-l from-teal-500/40 to-black/0
      rounded-full blur-[150px] opacity-60
    "
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Agendamento Inteligente
            <span className="block text-teal-400 mt-2">com IA</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mx-auto max-w-xl">
            Deixe a IA cuidar da sua agenda enquanto você cuida dos clientes
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="text-base px-8 py-4 font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-black hover:opacity-90 transition"
            >
              Comece Gratuitamente
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-base px-8 py-4 font-semibold border border-gray-700 text-gray-300 hover:text-teal-400 hover:border-teal-400 transition"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-teal-400 mb-4 z-10">
        <button
          onClick={handleScrollDown}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-teal-400 transition hover:scale-110 z-10"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
