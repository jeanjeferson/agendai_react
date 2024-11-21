"use client"
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqData = [
  {
    question: "Como a IA melhora meus agendamentos?",
    answer: "Nossa IA analiza padrões de agendamento, preferências dos clientes e sua disponibilidade para otimizar automaticamente sua agenda."
  },
  {
    question: "Posso integrar com meu sistema atual?",
    answer: "Sim, o Agendai oferece integração com diversos sistemas de calendário e CRM populares."
  },
  {
    question: "O Agendai é difícil de configurar?",
    answer: "Não, nosso processo de configuração é simples e intuitivo. Além disso, oferecemos suporte para guiar em cada etapa."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria dos nossos parceiros vê uma melhora na eficiência dos agendamentos em apenas uma semana de uso."
  }
]

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Perguntas frequentes
        </h2>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="border-b border-gray-800"
            >
              {/* Cabeçalho da questão */}
              <button
                className="w-full py-4 flex justify-between items-center text-left hover:text-teal-400 transition-colors focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Conteúdo da resposta */}
              <div 
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  activeIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
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

export default FAQ