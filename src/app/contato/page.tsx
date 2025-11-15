"use client";

import Link from "next/link";
import { Brain, Menu, X, Mail, MessageCircle, Send, MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";

export default function Contato() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Responderemos em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <Link href="/planos" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                Planos
              </Link>
              <Link href="/contato" className="text-[#3b82f6] font-medium">
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
                <Link href="/planos" className="text-gray-700 hover:text-[#3b82f6] transition-colors">
                  Planos
                </Link>
                <Link href="/contato" className="text-[#3b82f6] font-medium">
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
            Entre em contato
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a estudar melhor. Fale conosco!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie sua mensagem
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe responderá o mais rápido possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="duvidas">Dúvidas sobre planos</option>
                    <option value="sugestoes">Sugestões</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Descreva sua dúvida, sugestão ou problema..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3b82f6] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Outras formas de contato
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-600 mb-2">
                      Para dúvidas gerais e suporte
                    </p>
                    <a 
                      href="mailto:contato@estuda.ai" 
                      className="text-[#3b82f6] hover:underline"
                    >
                      contato@estuda.ai
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">
                      Suporte rápido e direto
                    </p>
                    <a 
                      href="https://wa.me/5561995751019" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      (61) 99575-1019
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tempo de resposta</h3>
                    <p className="text-gray-600">
                      Respondemos em até 24 horas nos dias úteis
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-12 p-6 bg-[#f3f4f6] rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Dúvidas frequentes
                </h3>
                <p className="text-gray-600 mb-4">
                  Antes de entrar em contato, que tal dar uma olhada nas perguntas mais comuns?
                </p>
                <Link 
                  href="/planos#faq" 
                  className="text-[#3b82f6] hover:underline font-medium"
                >
                  Ver perguntas frequentes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Horários de atendimento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-4">Suporte por E-mail</h3>
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-4">WhatsApp</h3>
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 9h às 17h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-[#3b82f6]">
              <strong>Nota:</strong> Usuários Premium têm suporte prioritário com tempo de resposta reduzido.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b82f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ainda não testou o Estuda.AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experimente gratuitamente e veja como podemos ajudar nos seus estudos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-[#3b82f6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Testar gratuitamente
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