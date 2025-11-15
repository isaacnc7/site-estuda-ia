"use client";

import Link from "next/link";
import { Brain, Menu, X, Check, Star, Zap, Target, FileText } from "lucide-react";
import { useState } from "react";

export default function Planos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Estuda.AI</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Aprenda mais, em menos tempo</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                Sobre
              </Link>
              <Link href="/planos" className="text-[#3b82f6] font-medium">
                Planos
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                Contato
              </Link>
              <Link 
                href="/login" 
                className="bg-[#3b82f6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Entrar
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                  Início
                </Link>
                <Link href="/sobre" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                  Sobre
                </Link>
                <Link href="/planos" className="text-[#3b82f6] font-medium">
                  Planos
                </Link>
                <Link href="/contato" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                  Contato
                </Link>
                <Link 
                  href="/login" 
                  className="bg-[#3b82f6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
                >
                  Entrar
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3b82f6] to-blue-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Escolha seu plano
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comece grátis e evolua conforme suas necessidades de estudo
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-[#f3f4f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white p-1 rounded-lg shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#3b82f6] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-[#3b82f6] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Anual
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gratuito</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">R$ 0</div>
                <p className="text-gray-600">Para começar a estudar</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">3 resumos por dia</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Resumos inteligentes</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Até 5.000 caracteres</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Copiar texto</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Suporte por email</span>
                </li>
              </ul>

              <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Começar grátis
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#3b82f6] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#3b82f6] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  R$ {billingCycle === 'monthly' ? '39' : '31'}
                  <span className="text-lg text-gray-600">/{billingCycle === 'monthly' ? 'mês' : 'mês'}</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-green-600">Economize R$ 96 por ano</p>
                )}
                <p className="text-gray-600">Para estudantes sérios</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Resumos ilimitados</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Perguntas simuladas</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Flashcards de estudo</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Até 10.000 caracteres</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Download PDF/TXT</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Histórico de estudos</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Suporte prioritário</span>
                </li>
              </ul>

              <button className="w-full bg-[#3b82f6] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                Assinar Premium
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  R$ {billingCycle === 'monthly' ? '69' : '55'}
                  <span className="text-lg text-gray-600">/{billingCycle === 'monthly' ? 'mês' : 'mês'}</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-green-600">Economize R$ 168 por ano</p>
                )}
                <p className="text-gray-600">Para instituições</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Tudo do Premium</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Simulados avançados</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Chat com IA</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Até 50.000 caracteres</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">API para integração</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Relatórios de progresso</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Suporte 24/7</span>
                </li>
              </ul>

              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Assinar Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Formas de pagamento
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-[#f3f4f6] rounded-2xl">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Stripe</h3>
              <p className="text-sm text-gray-600">Cartão de crédito e débito</p>
            </div>
            
            <div className="p-6 bg-[#f3f4f6] rounded-2xl">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">PayPal</h3>
              <p className="text-sm text-gray-600">Pagamento internacional</p>
            </div>
            
            <div className="p-6 bg-[#f3f4f6] rounded-2xl">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">MercadoPago</h3>
              <p className="text-sm text-gray-600">PIX e cartões nacionais</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600">
                Sim! Você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento 
                e você continuará tendo acesso aos recursos premium até o final do período pago.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Como funciona o período gratuito?</h3>
              <p className="text-gray-600">
                O plano gratuito permite 3 resumos por dia, permanentemente. É uma ótima forma de 
                testar nossa plataforma antes de decidir por um plano pago.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Posso mudar de plano depois?</h3>
              <p className="text-gray-600">
                Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                As mudanças são aplicadas no próximo ciclo de cobrança.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Os dados são seguros?</h3>
              <p className="text-gray-600">
                Sim, levamos a segurança muito a sério. Todos os dados são criptografados e não 
                armazenamos o conteúdo dos seus textos após o processamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b82f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para acelerar seus estudos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Comece gratuitamente e veja a diferença que a IA pode fazer no seu aprendizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-white text-[#3b82f6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Começar gratuitamente
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#3b82f6] transition-all duration-300"
            >
              Testar agora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Estuda.AI</h3>
                  <p className="text-sm text-gray-400">Aprenda mais, em menos tempo</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                A IA que transforma textos em aprendizado. Cole seu conteúdo e estude com inteligência.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  TikTok
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <div className="space-y-2">
                <Link href="/sobre" className="block text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
                <Link href="/planos" className="block text-gray-400 hover:text-white transition-colors">
                  Planos
                </Link>
                <Link href="/contato" className="block text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Termos de uso
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Política de privacidade
                </a>
                <a href="mailto:contato@estuda.ai" className="block text-gray-400 hover:text-white transition-colors">
                  contato@estuda.ai
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Estuda.AI – Feito com ❤️ e inteligência artificial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}