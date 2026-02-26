import React from 'react';
import { MessageCircle, Shield, Zap, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">SecureChat</span>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Secure Messaging{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Experience end-to-end encrypted chat with a modern, intuitive interface. 
              Connect with your team securely and confidently.
            </p>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">End-to-End Encrypted</h3>
              <p className="text-gray-400">
                Your messages are protected with industry-leading encryption protocols, ensuring your conversations stay private.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-400">
                Built with modern technology for instant message delivery and a responsive, lag-free experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Simple & Intuitive</h3>
              <p className="text-gray-400">
                A clean, modern interface that makes messaging effortless. No learning curve, just start chatting.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 SecureChat. Built with security in mind.
          </p>
        </div>
      </footer>
    </div>
  );
}
