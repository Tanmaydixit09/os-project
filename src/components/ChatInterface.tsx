import React, { useState, useEffect, useRef } from 'react';
import { Send, LogOut, Moon, Sun, PanelLeftClose, PanelLeftOpen, MessageSquare, List, AlignLeft } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useChatStore } from '../store/chatStore';
import { useUIStore } from '../store/uiStore';

export function ChatInterface() {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const user = useAuthStore(state => state.user);
  const logout = useAuthStore(state => state.logout);
  const { messages, sendMessage } = useChatStore();
  const { isDarkMode, isSidebarOpen, messageFormat, toggleDarkMode, toggleSidebar, setMessageFormat } = useUIStore();

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { 
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    await sendMessage(message);
    setMessage('');
  };

  const getMessageContainerClass = () => {
    const base = 'flex-1 overflow-y-auto p-4 space-y-4';
    if (messageFormat === 'list') return `${base} space-y-2`;
    if (messageFormat === 'compact') return `${base} space-y-1`;
    return base;
  };

  const getMessageBubbleClass = (isOwn: boolean) => {
    const base = messageFormat === 'compact' ? 'px-3 py-1 text-sm' : 'px-4 py-2 rounded-lg';
    if (messageFormat === 'list') {
      return `max-w-full px-4 py-2 border-l-4 ${
        isOwn ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 bg-gray-50 dark:bg-gray-800'
      }`;
    }
    return `${base} ${
      isOwn
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
    }`;
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Toggle Sidebar"
            >
              {isSidebarOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
            </button>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Secure Chat</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Message Format Toggle */}
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setMessageFormat('bubble')}
                className={`p-1.5 rounded-md ${messageFormat === 'bubble' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                title="Bubble Format"
              >
                <MessageSquare className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setMessageFormat('list')}
                className={`p-1.5 rounded-md ${messageFormat === 'list' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                title="List Format"
              >
                <List className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setMessageFormat('compact')}
                className={`p-1.5 rounded-md ${messageFormat === 'compact' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}
                title="Compact Format"
              >
                <AlignLeft className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-300">Logged in as {user?.uid}</span>
            <button
              onClick={logout}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-300 block mb-2">Message Format</span>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setMessageFormat('bubble')}
                  className={`px-3 py-2 text-sm rounded-lg ${messageFormat === 'bubble' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  Bubble
                </button>
                <button
                  onClick={() => setMessageFormat('list')}
                  className={`px-3 py-2 text-sm rounded-lg ${messageFormat === 'list' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  List
                </button>
                <button
                  onClick={() => setMessageFormat('compact')}
                  className={`px-3 py-2 text-sm rounded-lg ${messageFormat === 'compact' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  Compact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`flex flex-1 ${isSidebarOpen ? '' : ''}`}>
        <div className={getMessageContainerClass()}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender_uid === user?.uid ? 'justify-end' : 'justify-start'}`}
            >
              <div className={getMessageBubbleClass(msg.sender_uid === user?.uid)}>
                <div className="text-xs mb-1 opacity-70">{msg.sender_uid}</div>
                <div>{msg.content}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 p-4">
        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto flex space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
