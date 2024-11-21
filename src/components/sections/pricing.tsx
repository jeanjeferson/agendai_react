import React from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

// Definição dos planos e suas características
const plans = [
  {
    name: "Starter",
    price: "29",
    period: "/month",
    features: [
      "Access to basic analytics reports",
      "Up to 10,000 data points per month",
      "Email support",
      "Community forum access",
      "Cancel anytime"
    ],
    buttonText: "Get Starter",
    buttonVariant: 'default' as const,
  },
  {
    name: "Professional",
    price: "99",
    period: "/month",
    popular: true,
    features: [
      "Advanced analytics dashboard",
      "Customizable reports and charts",
      "Real-time data tracking",
      "Integration with third party tools",
      "Everything in Hobby Plan"
    ],
    buttonText: "Get Professional",
    buttonVariant: 'default' as const,
  },
  {
    name: "Enterprise",
    price: "299",
    period: "/month",
    features: [
      "Unlimited data storage",
      "Customizable dashboards",
      "Advanced data segmentation",
      "Real-time data processing",
      "AI-powered insights and recommendations",
      "Everything in Pro Plan"
    ],
    buttonText: "Get Enterprise",
    buttonVariant: 'default' as const,
  },
]

export const Pricing = () => {
  return (
    <section className="py-20 px-4" id="pricing">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Preços simples e transparentes
        </h2>
        <p className="text-gray-400">
          Escolha o plano certo para o seu negócio.
        </p>
      </div>

      {/* Cards de Preço */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8
              ${plan.popular ? 'ring-2 ring-teal-400' : ''}
            `}
          >
            {plan.popular && (
              <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <span className="bg-teal-400 text-black px-3 py-1 text-sm font-medium rounded-full">
                  Popular
                </span>
              </div>
            )}

            {/* Nome do Plano */}
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>

            {/* Preço */}
            <div className="mb-6 flex items-baseline">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-400 ml-1">{plan.period}</span>
            </div>

            {/* Lista de Features */}
            <ul className="mb-8 space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Botão */}
            <Button 
              variant={plan.buttonVariant}
              className="w-full py-6"
              size="lg"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing