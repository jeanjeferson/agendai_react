import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div 
        className="absolute top-1/2 right-0 w-[800px] h-[800px] transform translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'linear-gradient(180deg, rgba(47, 184, 255, 0.1) 0%, rgba(47, 184, 255, 0) 100%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          opacity: '0.5'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Agendamento Inteligente
              <span className="block text-teal-400 mt-2">com IA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mx-auto max-w-2xl">
              Deixe a IA cuidar da sua agenda enquanto você cuida dos clientes
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                size="lg"
                className="text-base px-8 py-6 font-semibold"
              >
                Comece Gratuitamente
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 font-semibold"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </section>

        {/* Decorative shape */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-teal-400"
          >
            <path 
              d="M20 4V36M4 20H36" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero