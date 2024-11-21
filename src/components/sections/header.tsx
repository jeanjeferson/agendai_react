"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Planos', href: '#pricing' },
  { name: 'Contato', href: '#contact' },
  { name: 'Perguntas frequentes', href: '#faq' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Previne scroll quando menu está aberto
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <nav className="relative w-full px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="hover:opacity-90 transition-opacity flex items-center"
        >
          <h1 className="text-balance relative text-xl md:text-2xl font-sans font-semibold tracking-tight text-white flex items-center">
            Agend
            <span className="font-light bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
              ai
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700/50 rounded-lg
                       hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10
                       transition-all duration-300"
            >
              Login
            </a>
            <a
              href="/novo-negocio"
              className="px-4 py-2 text-sm font-medium text-black
                       bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg
                       hover:opacity-90 transition-all duration-300 transform hover:scale-105
                       shadow-lg border border-teal-300/30"
            >
              Começar
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-black/20 backdrop-blur-lg border border-white/10
                     hover:bg-black/30 transition-all duration-200 text-white relative z-50"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
            onClick={handleLinkClick}
          />
        )}

        {/* Mobile Menu Content */}
        <div
          className={cn(
            "fixed inset-x-0 top-0 h-screen bg-black pt-20 z-50 md:hidden transition-transform duration-300",
            "flex flex-col items-center px-6",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-col items-center space-y-6 w-full max-w-sm mx-auto">
            {/* Mobile Navigation Links */}
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col w-full space-y-4 pt-6">
              <a
                href="/login"
                onClick={handleLinkClick}
                className="w-full text-center px-6 py-4 text-base font-medium text-gray-300
                         border border-gray-700/50 rounded-lg
                         hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10
                         transition-all duration-300"
              >
                Login
              </a>
              <a
                href="/novo-negocio"
                onClick={handleLinkClick}
                className="w-full text-center px-6 py-4 text-base font-medium text-black
                         bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg
                         hover:opacity-90 transition-opacity shadow-lg"
              >
                Começar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header