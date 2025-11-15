"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  Brain, 
  FileText, 
  Target, 
  Zap, 
  Copy, 
  RefreshCw, 
  Menu, 
  X, 
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  Download,
  Share2,
  Star,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [selectedType, setSelectedType] = useState("resumo");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const generatorRef = useRef<HTMLDivElement>(null);

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateContent = async () => {
    if (!inputText.trim()) return;
    
    setIsGenerating(true);
    setShowResult(false);
    
    // Simular processamento da IA
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    let generatedResult = "";
    
    if (selectedType === "resumo") {
      generatedResult = `## Resumo Inteligente

**Pontos Principais:**

• **Conceito Central**: ${inputText.split(' ').slice(0, 3).join(' ')} representa um tema fundamental para compreensão do assunto.

• **Aspectos Importantes**: O conteúdo aborda elementos essenciais que conectam teoria e prática de forma didática.

• **Aplicação Prática**: Os conhecimentos apresentados podem ser aplicados em situações reais, facilitando o aprendizado.

• **Conclusão**: O material oferece uma base sólida para aprofundamento posterior nos estudos.

**Dica de Estudo**: Revise os pontos principais e faça conexões com conhecimentos anteriores para melhor fixação.`;
    } else if (selectedType === "perguntas") {
      generatedResult = `## Perguntas Simuladas

**Questão 1:**
Com base no conteúdo apresentado, qual é o conceito mais importante abordado?

a) Conceito secundário mencionado brevemente
b) **Conceito central do texto (CORRETA)**
c) Informação complementar
d) Detalhe específico isolado

*Explicação: O conceito central é o foco principal do conteúdo e conecta todos os outros elementos.*

**Questão 2:**
Qual a melhor forma de aplicar os conhecimentos apresentados?

a) Memorizar apenas as definições
b) **Conectar teoria com exemplos práticos (CORRETA)**
c) Ignorar os detalhes importantes
d) Focar apenas em um aspecto

*Explicação: A conexão entre teoria e prática facilita a compreensão e fixação do conteúdo.*

**Questão 3:**
O que caracteriza uma boa estratégia de estudo baseada no material?

a) Leitura superficial única
b) Decorar sem compreender
c) **Revisão ativa com conexões (CORRETA)**
d) Estudar apenas véspera da prova

*Explicação: A revisão ativa e criação de conexões promove aprendizado duradouro.*`;
    } else {
      generatedResult = `## Flashcards de Estudo

**Card 1:**
**Frente:** O que é o conceito principal abordado no texto?
**Verso:** É o elemento central que conecta todos os aspectos do conteúdo, servindo como base para compreensão do tema.

---

**Card 2:**
**Frente:** Como aplicar os conhecimentos na prática?
**Verso:** Conectando a teoria apresentada com exemplos reais e situações do cotidiano para melhor fixação.

---

**Card 3:**
**Frente:** Qual a melhor estratégia de revisão?
**Verso:** Revisão ativa fazendo conexões entre conceitos, resumindo pontos principais e testando o conhecimento.

---

**Card 4:**
**Frente:** Por que é importante compreender em vez de decorar?
**Verso:** A compreensão permite aplicação flexível do conhecimento e facilita a resolução de problemas variados.

---

**Card 5:**
**Frente:** Como identificar os pontos mais importantes?
**Verso:** Procurar conceitos que se repetem, conectam diferentes partes do texto e são fundamentais para o entendimento geral.`;
    }
    
    setResult(generatedResult);
    setIsGenerating(false);
    setShowResult(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  const regenerateContent = () => {
    generateContent();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Estuda.AI</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Aprenda mais, em menos tempo</p>
              </div>
            </div>

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
      <section className="bg-gradient-to-br from-[#3b82f6] to-blue-600 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge pioneiro */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Pioneiro dos estudos com IA no Brasil
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Cole seu conteúdo e receba um resumo completo em segundos!
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transforme qualquer texto em resumos, perguntas e flashcards com inteligência artificial.
          </p>
          <button
            onClick={scrollToGenerator}
            className="bg-white text-[#3b82f6] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Começar agora
          </button>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">100k+</div>
              <div className="text-blue-100">Resumos gerados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">13k+</div>
              <div className="text-blue-100">Estudantes ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-blue-100">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Três passos simples para revolucionar seus estudos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Cole o conteúdo</h3>
              <p className="text-gray-600">
                Adicione qualquer texto, apostila ou anotação no campo abaixo
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Escolha o tipo de ajuda</h3>
              <p className="text-gray-600">
                Selecione entre resumo, perguntas simuladas ou flashcards
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Estude com eficiência</h3>
              <p className="text-gray-600">
                Receba conteúdo otimizado para acelerar seu aprendizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section ref={generatorRef} className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gerador de Conteúdo IA
            </h2>
            <p className="text-xl text-gray-600">
              Cole seu texto e deixe a inteligência artificial trabalhar para você
            </p>
          </div>

          <div className="bg-[#f3f4f6] rounded-2xl p-6 sm:p-8">
            {/* Text Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cole seu conteúdo aqui (máximo 10.000 caracteres)
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Cole aqui o texto da sua apostila, anotações, PDF ou qualquer conteúdo que você quer estudar..."
                className="w-full h-48 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                maxLength={10000}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {inputText.length}/10.000 caracteres
              </div>
            </div>

            {/* Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Escolha o tipo de conteúdo que deseja gerar:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setSelectedType("resumo")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedType === "resumo"
                      ? "border-[#3b82f6] bg-blue-50 text-[#3b82f6]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <FileText className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-medium">Resumo inteligente</div>
                  <div className="text-sm text-gray-500">Pontos principais</div>
                </button>

                <button
                  onClick={() => setSelectedType("perguntas")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedType === "perguntas"
                      ? "border-[#3b82f6] bg-blue-50 text-[#3b82f6]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Target className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-medium">Perguntas simuladas</div>
                  <div className="text-sm text-gray-500">Teste seus conhecimentos</div>
                </button>

                <button
                  onClick={() => setSelectedType("flashcards")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedType === "flashcards"
                      ? "border-[#3b82f6] bg-blue-50 text-[#3b82f6]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Brain className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-medium">Flashcards de estudo</div>
                  <div className="text-sm text-gray-500">Memorização ativa</div>
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateContent}
              disabled={!inputText.trim() || isGenerating}
              className="w-full bg-[#3b82f6] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Gerando com IA...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Gerar com IA
                </div>
              )}
            </button>

            {/* Loading Animation */}
            {isGenerating && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-lg">
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin text-[#3b82f6]" />
                  <span className="text-[#3b82f6]">Processando seu conteúdo...</span>
                </div>
              </div>
            )}

            {/* Result */}
            {showResult && result && (
              <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Resultado gerado:
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copiar
                    </button>
                    <button
                      onClick={regenerateContent}
                      className="flex items-center px-3 py-1 text-sm bg-[#3b82f6] text-white hover:bg-blue-600 rounded-lg transition-colors"
                    >
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Gerar novamente
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {result}
                  </pre>
                </div>

                {/* Feedback */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Esse resultado te ajudou?</span>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Sim
                      </button>
                      <button className="flex items-center px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <ThumbsDown className="w-4 h-4 mr-1" />
                        Não
                      </button>
                    </div>
                  </div>
                </div>

                {/* Download Options */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="flex items-center px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-1" />
                    Baixar TXT
                  </button>
                  <button className="flex items-center px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-1" />
                    Baixar PDF
                  </button>
                </div>
              </div>
            )}
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
            Junte-se a milhares de estudantes que já estão aprendendo mais rápido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-white text-[#3b82f6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Criar conta grátis
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

      {/* Share Button Fixed */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-[#3b82f6] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
          <Share2 className="w-6 h-6" />
        </button>
      </div>

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