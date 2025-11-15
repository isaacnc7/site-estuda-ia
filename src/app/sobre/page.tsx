"use client";

import Link from "next/link";
import { Brain, Menu, X, Target, Users, Zap, CheckCircle, Award } from "lucide-react";
import { useState } from "react";

export default function Sobre() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link href="/sobre" className="text-[#3b82f6] font-medium">
                Sobre
              </Link>
              <Link href="/planos" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
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
                <Link href="/sobre" className="text-[#3b82f6] font-medium">
                  Sobre
                </Link>
                <Link href="/planos" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
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
          {/* Badge líder */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Líder em estudos com IA no Brasil
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Nossa Missão
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tornar o aprendizado mais rápido e acessível através da inteligência artificial
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Por que criamos o Estuda.AI?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sabemos que estudar pode ser desafiador. Muitas vezes, os estudantes se deparam com textos longos, 
              apostilas densas e materiais que parecem impossíveis de absorver em pouco tempo. Foi pensando nisso 
              que desenvolvemos o Estuda.AI - uma ferramenta que usa inteligência artificial para transformar 
              qualquer conteúdo em material de estudo otimizado.
            </p>
          </div>

          {/* Destaque de liderança */}
          <div className="bg-gradient-to-r from-[#3b82f6] to-blue-600 rounded-2xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">🏆 Somos os maiores em estudos com IA</h3>
            <p className="text-lg text-blue-100">
              Com mais de 100k resumos gerados e 13k estudantes ativos, somos a plataforma líder 
              em educação assistida por inteligência artificial no Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                O Problema que Resolvemos
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Textos longos e difíceis de resumir
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Falta de tempo para criar materiais de revisão
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Dificuldade em identificar pontos principais
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Necessidade de criar questões para praticar
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Solução
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Resumos inteligentes em segundos
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Questões simuladas personalizadas
                </li>
                <li className="flex items-start">
                  <Brain className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Flashcards para memorização ativa
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-[#3b82f6] mr-3 mt-0.5 flex-shrink-0" />
                  Interface simples e intuitiva
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como funciona em 3 passos
            </h2>
            <p className="text-xl text-gray-600">
              Simplicidade e eficiência em cada etapa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cole o conteúdo</h3>
              <p className="text-gray-600">
                Adicione qualquer texto, apostila, PDF ou anotação que você quer estudar. 
                Suportamos até 10.000 caracteres por vez.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Escolha o tipo de ajuda</h3>
              <p className="text-gray-600">
                Selecione entre resumo inteligente, perguntas simuladas ou flashcards de estudo. 
                Cada opção é otimizada para diferentes estilos de aprendizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Estude com eficiência</h3>
              <p className="text-gray-600">
                Receba conteúdo otimizado pela IA, copie, baixe ou compartilhe. 
                Estude de forma mais inteligente, não mais difícil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              O que nos guia no desenvolvimento do Estuda.AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#f3f4f6] rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">🎯 Simplicidade</h3>
              <p className="text-gray-600">
                Acreditamos que a tecnologia deve ser simples e acessível. Nossa interface é intuitiva 
                para que você foque no que realmente importa: aprender.
              </p>
            </div>

            <div className="p-6 bg-[#f3f4f6] rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">⚡ Velocidade</h3>
              <p className="text-gray-600">
                Tempo é precioso quando se trata de estudos. Nossa IA processa conteúdo em segundos, 
                permitindo que você otimize seu tempo de estudo.
              </p>
            </div>

            <div className="p-6 bg-[#f3f4f6] rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">🧠 Inteligência</h3>
              <p className="text-gray-600">
                Utilizamos as mais avançadas tecnologias de IA para garantir que o conteúdo gerado 
                seja relevante, preciso e pedagogicamente eficaz.
              </p>
            </div>

            <div className="p-6 bg-[#f3f4f6] rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">🌍 Acessibilidade</h3>
              <p className="text-gray-600">
                Educação de qualidade deve ser acessível a todos. Por isso, oferecemos uma versão 
                gratuita robusta e planos premium acessíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b82f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para revolucionar seus estudos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de estudantes que já descobriram uma forma mais inteligente de aprender
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-[#3b82f6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Experimentar agora
            </Link>
            <Link
              href="/planos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#3b82f6] transition-all duration-300"
            >
              Ver planos
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