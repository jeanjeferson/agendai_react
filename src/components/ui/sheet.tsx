"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X, LogIn, ArrowRight } from "lucide-react"; // Importar LogIn e ArrowRight
import Link from "next/link"; // Importar Link do Next.js

import { cn } from "@/lib/utils"; // Garantir que cn seja importado
import { Button } from "@/components/ui/button"; // Importar o Button corretamente

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        sheetVariants({ side }),
        "w-64 bg-black/90 backdrop-blur-lg border-gray-800 p-4 flex flex-col justify-between",
        className
      )}
      {...props}
    >
      {/* Título acessível (pode ser escondido) */}
      <SheetPrimitive.Title className="sr-only">Menu</SheetPrimitive.Title>

      {/* Header do Menu */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-white text-lg font-semibold">Menu</span>
        <SheetPrimitive.Close
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-md transition-all hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Fechar</span>
        </SheetPrimitive.Close>
      </div>

      {/* Conteúdo do Menu */}
      <div className="flex flex-col space-y-6">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-center flex items-center space-x-2 text-gray-300 border border-gray-700 px-6 py-3 rounded-lg hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
        >
          <Link href="/login">
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </Link>
        </Button>
        <Button
          asChild
          className="w-full justify-center flex items-center space-x-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-black px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
        >
          <Link href="/novo-negocio">
            <ArrowRight className="h-4 w-4" />
            <span>Começar</span>
          </Link>
        </Button>
      </div>

      {/* Rodapé do Menu */}
      <div className="mt-6 border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-400 text-center">
          © 2024 AgendAI. Todos os direitos reservados.
        </p>
      </div>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;



const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
