"use client";

import Link from "next/link";
import { Brain, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de login/cadastro
    console.log('Formulário enviado:', formData);
    if (isLogin) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Conta criada com sucesso!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleLogin = () => {
    // Implementar login com Google
    alert('Login com Google em desenvolvimento');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b82f6] to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-blue-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Estuda.AI</h1>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Entre na sua conta para continuar estudando' 
                : 'Comece a estudar de forma mais inteligente'
              }
            </p>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors mb-6 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar com Google
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name (only for signup) */}
            {!isLogin && (
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
                  required={!isLogin}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  placeholder="seu@email.com"
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pl-12 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  placeholder="Sua senha"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password (only for signup) */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmar senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Confirme sua senha"
                  />
                  <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            )}

            {/* Forgot Password (only for login) */}
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-[#3b82f6] hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#3b82f6] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              {isLogin ? 'Entrar' : 'Criar conta'}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-[#3b82f6] hover:underline font-medium"
              >
                {isLogin ? 'Criar conta' : 'Fazer login'}
              </button>
            </p>
          </div>

          {/* Terms (only for signup) */}
          {!isLogin && (
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Ao criar uma conta, você concorda com nossos{' '}
                <a href="#" className="text-[#3b82f6] hover:underline">
                  Termos de uso
                </a>{' '}
                e{' '}
                <a href="#" className="text-[#3b82f6] hover:underline">
                  Política de privacidade
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div className="mt-8 text-center text-white">
          <h3 className="font-semibold mb-4">Por que usar o Estuda.AI?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-medium mb-1">⚡ Rápido</div>
              <div className="text-blue-100">Resumos em segundos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-medium mb-1">🧠 Inteligente</div>
              <div className="text-blue-100">IA avançada</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-medium mb-1">📚 Completo</div>
              <div className="text-blue-100">Resumos, questões e flashcards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}