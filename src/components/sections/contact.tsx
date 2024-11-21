import { Button } from '@/components/ui/button'

export const Contact = () => {
  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-xl mx-auto">
        {/* Card do Formulário */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          {/* Cabeçalho */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Contato</h2>
            <p className="text-gray-400">
              Entre em contato conosco e responderemos o mais breve possível.
            </p>
          </div>

          {/* Formulário */}
          <form className="space-y-6">
            {/* Nome Completo */}
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-sm mb-2"
              >
                Nome completo
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-shadow"
              />
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-shadow"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label 
                htmlFor="whatsapp" 
                className="block text-sm mb-2"
              >
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-shadow"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Digite sua mensagem aqui"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent transition-shadow resize-none"
              />
            </div>

            {/* Botão de Envio */}
            <Button 
              type="submit"
              className="w-full py-6 bg-teal-400 hover:bg-teal-500 text-black font-medium"
            >
              Enviar mensagem
            </Button>
          </form>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="relative mt-24">
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="w-px h-24 bg-gradient-to-b from-teal-400/20 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-teal-400 -mt-1 -ml-1" />
        </div>
      </div>
    </section>
  )
}

export default Contact