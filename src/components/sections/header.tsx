"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, LogIn, ArrowRight } from "lucide-react"; // Ícones adicionados
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 h-16 shadow-lg shadow-black/30 transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-90 transition-opacity flex items-center space-x-2"
        >
          <h1 className="text-lg md:text-xl font-semibold tracking-tight text-white">
            Agend
            <span className="font-light bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
              ai
            </span>
          </h1>
        </Link>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            variant="ghost"
            className="flex items-center space-x-2 text-gray-300 border border-gray-700 px-6 py-3 text-sm rounded-lg hover:text-teal-400 hover:border-teal-400 hover:bg-transparent transition-all duration-300"
          >
            <Link href="/login">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </Button>
          <Button
            asChild
            className="flex items-center space-x-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-black px-6 py-3 text-sm rounded-lg hover:opacity-90 transition-all duration-300"
          >
            <Link href="/novo-negocio">
              <ArrowRight className="h-4 w-4" />
              <span>Começar</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white ml-auto"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 bg-black/90 backdrop-blur-lg border-gray-800 p-4"
          >
            <div className="flex flex-col gap-4 mt-6 border-t border-gray-800 pt-4">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-center flex items-center space-x-2 text-gray-300 border border-gray-700 px-6 py-3 rounded-lg hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
                onClick={handleLinkClick}
              >
                <Link href="/login">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>
              <Button
                asChild
                className="w-full justify-center flex items-center space-x-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-black px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
                onClick={handleLinkClick}
              >
                <Link href="/novo-negocio">
                  <ArrowRight className="h-4 w-4" />
                  <span>Começar</span>
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
