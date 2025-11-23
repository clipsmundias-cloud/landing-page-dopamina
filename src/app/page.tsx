"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Zap, Users, Trophy, Rocket, Target, DollarSign, Lock, Unlock, ChevronRight, Sparkles, Crown, Star, ArrowRight, MessageCircle, Clock, Flame, Gift, AlertCircle } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeGame, setActiveGame] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Spots decreasing
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => {
        const newSpots = prev - 1;
        return newSpots < 3 ? 7 : newSpots;
      });
    }, 45000); // Decrease every 45 seconds
    return () => clearInterval(spotsTimer);
  }, []);

  const games = [
    { name: "🎰 Bacbo", color: "from-purple-500 to-pink-500" },
    { name: "🐔 Chicken Road", color: "from-yellow-500 to-orange-500" },
    { name: "🎡 Roleta", color: "from-red-500 to-rose-600" },
    { name: "✈️ Aviator", color: "from-blue-500 to-cyan-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGame((prev) => (prev + 1) % games.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { icon: Target, text: "Sinais em Tempo Real", color: "text-purple-400" },
    { icon: TrendingUp, text: "Estratégias Validadas", color: "text-green-400" },
    { icon: Users, text: "Comunidade VIP", color: "text-blue-400" },
    { icon: Trophy, text: "Suporte 24/7", color: "text-yellow-400" },
  ];

  const stats = [
    { value: "97%", label: "Taxa de Acerto", icon: Target },
    { value: "+5K", label: "Membros Ativos", icon: Users },
    { value: "€50K+", label: "Ganhos Mensais", icon: DollarSign },
    { value: "24/7", label: "Sinais Diários", icon: Zap },
  ];

  const feedbacks = [
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1a903d37-1988-4545-a6e9-236aa38c0286.jpg",
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/454df37a-3ddf-497e-8c50-3e3ebaf8ede0.jpg",
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/27611489-f350-411c-845a-04ec6d091212.jpg",
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3bec4ea1-c94c-4bac-aebb-6bace84a8977.jpg",
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/80fa0426-8e7f-48b0-80d5-5b417414552e.jpg",
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fca1b2c0-48a6-492e-8325-b9b46e33ade0.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* URGENCY BANNER - Fixed Top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 animate-gradient">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <span className="font-black text-sm sm:text-base">🔥 OFERTA EXPIRA EM:</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Clock className="w-5 h-5 animate-spin-slow" />
            <span className="font-mono font-black text-lg">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-yellow-300 animate-bounce" />
            <span className="font-black text-sm sm:text-base">APENAS {spotsLeft} VAGAS RESTANTES!</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 mt-16">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm animate-pulse">
            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-bounce" />
            <span className="text-xs sm:text-sm font-bold text-yellow-400">🎁 BÓNUS EXCLUSIVO PARA OS PRIMEIROS 10!</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
              💰 QUERES TRIPLICAR
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">A TUA BANCA?</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent animate-gradient drop-shadow-2xl text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              €100 → €10.000! 🚀
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            <span className="text-yellow-400 font-black text-2xl sm:text-3xl">⚡ ÚLTIMA OPORTUNIDADE!</span> Acede a grupos <span className="text-purple-400 font-bold underline decoration-wavy">ULTRA SECRETOS</span> com sinais de <span className="text-green-400 font-bold">97% de precisão</span> que estão a fazer pessoas comuns lucrarem <span className="text-yellow-400 font-black">MILHARES POR DIA!</span>
          </p>

          {/* URGENCY PULSE BOX */}
          <div className="mb-8 bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500 rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-md animate-pulse">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Gift className="w-8 h-8 text-yellow-400 animate-bounce" />
              <span className="text-2xl sm:text-3xl font-black text-yellow-400">BÓNUS LIMITADO!</span>
              <Gift className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
            <p className="text-white font-bold text-lg sm:text-xl">
              🎯 Entra AGORA e ganha <span className="text-green-400 text-2xl">3 ESTRATÉGIAS SECRETAS</span> que multiplicam os teus ganhos em <span className="text-yellow-400">10X!</span>
            </p>
          </div>

          {/* Rotating Games Display */}
          <div className="mb-8 sm:mb-12">
            <div className="inline-block bg-black/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-purple-500 shadow-2xl shadow-purple-500/50">
              <div className="text-sm sm:text-base text-yellow-400 mb-2 font-bold animate-pulse">🔥 SINAIS A BOMBAR AGORA:</div>
              <div className={`text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r ${games[activeGame].color} bg-clip-text text-transparent transition-all duration-500 drop-shadow-lg`}>
                {games[activeGame].name}
              </div>
              <div className="text-green-400 font-bold mt-2 text-sm sm:text-base animate-pulse">✅ +€2.847 LUCRADOS AGORA!</div>
            </div>
          </div>
        </div>

        {/* CTA Principal GIGANTE */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-2xl opacity-75 animate-pulse"></div>
            
            <a 
              href="https://t.me/alinecostaptbot" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:to-emerald-400 text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-10 sm:px-16 md:px-20 py-6 sm:py-8 md:py-10 rounded-3xl shadow-2xl hover:shadow-green-500/80 transition-all duration-300 hover:scale-110 animate-bounce border-4 border-yellow-400"
            >
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:rotate-12 transition-transform animate-pulse" />
              🚀 QUERO LUCRAR AGORA! 💰
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:scale-125 transition-transform animate-pulse" />
            </a>
          </div>
          
          <div className="mt-6 space-y-2">
            <p className="text-yellow-400 font-black text-xl sm:text-2xl animate-pulse">⚡ ACESSO INSTANTÂNEO APÓS DEPÓSITO!</p>
            <p className="text-red-400 font-bold text-lg sm:text-xl">⏰ Oferta expira em {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m!</p>
            <p className="text-white font-bold text-base sm:text-lg">🔥 Apenas {spotsLeft} vagas disponíveis AGORA!</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-purple-500/50 hover:border-yellow-400 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-purple-500/50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mb-2 sm:mb-3 mx-auto animate-pulse" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feedbacks Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
              💬 VÊ QUEM JÁ ESTÁ A LUCRAR!
            </span>
          </h2>
          <p className="text-center text-yellow-400 mb-8 sm:mb-12 text-lg sm:text-xl font-bold animate-pulse">
            <MessageCircle className="inline-block w-6 h-6 mr-2" />
            🔥 Resultados REAIS de HOJE!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-2 border-2 border-yellow-500/50 hover:border-green-500 transition-all duration-300 hover:scale-105 overflow-hidden shadow-xl hover:shadow-yellow-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={feedback} 
                  alt={`Feedback ${index + 1}`} 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-black px-3 py-1 rounded-full animate-pulse shadow-lg">
                  ✓ VERIFICADO
                </div>
                <div className="absolute bottom-4 left-4 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full">
                  💰 LUCRO REAL
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
              🎁 O QUE RECEBES HOJE:
            </span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-purple-500/50 hover:border-yellow-400 transition-all duration-300 hover:scale-110 group shadow-xl hover:shadow-purple-500/50"
              >
                <benefit.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${benefit.color} mb-4 group-hover:scale-125 transition-transform animate-pulse`} />
                <h3 className="text-lg sm:text-xl font-black text-white">{benefit.text}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Games Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              🎰 JOGOS COM SINAIS EXCLUSIVOS
            </span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${game.color} p-1 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer group shadow-2xl`}
              >
                <div className="bg-black/90 backdrop-blur-md rounded-xl p-6 sm:p-8 h-full flex flex-col items-center justify-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform">{game.name.split(" ")[0]}</div>
                  <div className="text-lg sm:text-xl font-black text-white">{game.name.split(" ").slice(1).join(" ")}</div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-green-400 font-bold animate-pulse">✅ 97% Acerto</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              ⚡ COMO COMEÇAR A LUCRAR:
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {[
              { step: "1", icon: Rocket, title: "Clica no Botão Verde", desc: "Entra no bot do Telegram AGORA" },
              { step: "2", icon: DollarSign, title: "Faz Depósito Mínimo", desc: "Valor acessível para começar" },
              { step: "3", icon: Unlock, title: "Acesso INSTANTÂNEO", desc: "Recebe link dos grupos VIP na hora" },
              { step: "4", icon: Trophy, title: "LUCRA TODOS OS DIAS", desc: "Segue os sinais e multiplica os teus ganhos" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 sm:gap-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-purple-500/50 hover:border-yellow-400 transition-all duration-300 hover:scale-105 group shadow-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black group-hover:scale-125 transition-transform shadow-lg">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 flex-shrink-0 animate-pulse" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-black text-white mb-1">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 font-bold">{item.desc}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-yellow-400 group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA MEGA */}
        <div className="text-center bg-gradient-to-r from-red-600/30 via-orange-600/30 to-yellow-600/30 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-4 border-yellow-400 shadow-2xl shadow-yellow-500/50 mb-12">
          <div className="animate-bounce mb-6">
            <Star className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 mx-auto animate-spin-slow" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              ⏰ ÚLTIMA OPORTUNIDADE!
            </span>
          </h2>
          
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 drop-shadow-lg">
            🔥 APENAS {spotsLeft} VAGAS RESTANTES! 🔥
          </p>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto font-bold">
            Não percas a oportunidade de <span className="text-green-400 font-black text-2xl">TRANSFORMAR A TUA VIDA</span> e começar a lucrar <span className="text-yellow-400 font-black text-2xl">MILHARES POR DIA</span> com os nossos sinais exclusivos!
          </p>
          
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-3xl opacity-75 animate-pulse"></div>
            
            <a 
              href="https://t.me/alinecostaptbot" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:to-emerald-400 text-white font-black text-2xl sm:text-3xl md:text-4xl px-10 sm:px-16 md:px-20 py-6 sm:py-8 md:py-10 rounded-3xl shadow-2xl hover:shadow-green-500/80 transition-all duration-300 hover:scale-110 border-4 border-yellow-400"
            >
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
              💰 SIM! QUERO LUCRAR AGORA! 🚀
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="text-red-400 font-black text-xl sm:text-2xl animate-pulse">⏰ Oferta expira em: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</p>
            <p className="text-green-400 font-bold text-lg sm:text-xl">🔒 Acesso 100% seguro e encriptado</p>
            <p className="text-yellow-400 font-bold text-base sm:text-lg">🎁 + BÓNUS EXCLUSIVO para os primeiros!</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-600 text-xs sm:text-sm">
          <p>© 2024 - Comunidade VIP de Sinais | Todos os direitos reservados</p>
          <p className="mt-2">⚠️ Joga com responsabilidade. Maiores de 18 anos.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
