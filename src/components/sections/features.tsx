import React from 'react'
import { 
  MessageSquare, 
  Bell, 
  Calendar, 
  Users, 
  BarChart2, 
  CreditCard, 
  Clock,
  Database
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: "Agendamento via WhatsApp",
    description: "Nossa IA automatiza todo processo de agendamento pelo WhatsApp para você"
  },
  {
    icon: Bell,
    title: "Lembretes que Funcionam",
    description: "Notificações inteligentes e personalizadas para reduzir faltas"
  },
  {
    icon: Calendar,
    title: "Programa de Recorrência",
    description: "Sistema automático para solicitar e trazer clientes de forma inteligente"
  },
  {
    icon: Database,
    title: "Calendário Inteligente",
    description: "Visualize e gerencie sua agenda de forma profissional sem complicações"
  },
  {
    icon: Users,
    title: "Clube de Vantagens",
    description: "Recompense a fidelidade dos clientes automaticamente"
  },
  {
    icon: BarChart2,
    title: "Marketing Automático",
    description: "Campanhas personalizadas que engajam no momento certo"
  },
  {
    icon: CreditCard,
    title: "Pagamento Garantido",
    description: "Sistema de pagamento antecipado simples e seguro"
  },
  {
    icon: Clock,
    title: "Feedback em Tempo Real",
    description: "Audiências e insights automáticos dos seus clientes"
  }
]

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-black" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Funcionalidades
        </h2>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 transition-colors group"
              >
                {/* Ícone */}
                <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Decorative shape */}
      <div className="relative mt-24">
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="w-px h-24 bg-gradient-to-b from-teal-400/20 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-teal-400 -mt-1 -ml-1" />
        </div>
      </div>
    </section>
  )
}

export default Features