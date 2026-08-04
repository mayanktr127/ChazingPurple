'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hello! 👋 Welcome to Chazing Purple. How can I assist you with your luxury retreat, wedding venue, or event planning today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    { label: '🏡 Farmhouse Venues', query: 'Tell me about your available farmhouse venues in Bangalore.' },
    { label: '💍 Destination Wedding', query: 'I want to plan a destination wedding with Chazing Purple.' },
    { label: '📅 Book Venue Tour', query: 'How can I schedule a personal venue walkthrough tour?' },
    { label: '📞 Request Call Back', query: 'Please arrange a callback with an event planner.' },
  ];

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate intelligent concierge response
    setTimeout(() => {
      let botResponse = 'Thank you for reaching out! Our dedicated luxury retreat manager will get in touch with you shortly. You can also reach us directly at +91 9606019315.';

      const lower = messageText.toLowerCase();
      if (lower.includes('farmhouse') || lower.includes('venue') || lower.includes('destination') || lower.includes('acre')) {
        botResponse = 'Chazing Purple offers premium luxury retreat farmhouses in Bangalore including Blue Valley (30 Acres), Mi Casa (3 Acres), Gruham (1 Acre), Blue Lagoon (5 Acres), Prana (4 Acres), Namma Mane (10k Sqft), Abhishta Farm (7 Acres), and Whispering Woods (1.5 Acres)! Which property would you like to explore?';
      } else if (lower.includes('wedding') || lower.includes('marry') || lower.includes('reception') || lower.includes('mandap')) {
        botResponse = 'Our destination wedding packages include exclusive estate access, custom floral & mandap styling, pre-wedding cocktail setups, chef-curated catering, and full family hospitality management. Would you like to schedule a consultation?';
      } else if (lower.includes('tour') || lower.includes('visit') || lower.includes('book') || lower.includes('schedule')) {
        botResponse = 'We would love to host you for a private walkthrough! Please leave your preferred date and phone number, or click "Request Call Back" and our manager will arrange your VIP tour.';
      } else if (lower.includes('call') || lower.includes('phone') || lower.includes('contact') || lower.includes('number')) {
        botResponse = 'You can reach our lead retreat advisor directly at +91 9606019315 or email us at info@chazingpurple.com. We look forward to creating magic for your event!';
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed right-4 bottom-6 sm:right-6 sm:bottom-8 z-50 flex flex-col items-end">
      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-purple-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header matching original website purple aesthetic */}
          <div className="bg-gradient-to-r from-purple-950 via-[#2D1B4E] to-purple-900 text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Bot className="w-5 h-5 text-purple-200" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-purple-950" />
              </div>
              <div>
                <h3 className="font-serif-display text-base font-bold text-white tracking-wide">
                  Chazing Purple AI
                </h3>
                <span className="text-[11px] text-purple-200/80 font-light">Online &amp; Ready to Help</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FAF8FC]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-[#C026D3] text-white'
                      : 'bg-purple-900 text-white'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-purple-900 text-white rounded-tr-none'
                        : 'bg-white text-purple-950 border border-purple-100 rounded-tl-none font-sans'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span
                    className={`block text-[10px] text-purple-900/50 mt-1 ${
                      msg.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-purple-900/60 font-medium">
                <Sparkles className="w-4 h-4 animate-spin text-[#C026D3]" />
                <span>Concierge is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3 py-2 bg-white border-t border-purple-100/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt.query)}
                className="px-3 py-1.5 rounded-full bg-[#FAF5FF] hover:bg-purple-100 text-purple-950 text-[11px] font-medium whitespace-nowrap border border-purple-200/70 transition-colors shrink-0"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Message Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-purple-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your inquiry here..."
              className="flex-1 bg-[#FAF8FC] border border-purple-100 rounded-full px-4 py-2.5 text-xs text-purple-950 placeholder-purple-900/40 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-10 h-10 rounded-full bg-purple-900 hover:bg-purple-800 disabled:opacity-50 text-white flex items-center justify-center shadow-md transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Chat Trigger Button without 'We Are Here!' badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Open Concierge Chatbot"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#7E22CE] via-[#9333EA] to-[#A855F7] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
      >
        {isOpen ? (
          <X className="w-7 h-7 stroke-[2.5]" />
        ) : (
          <MessageSquare className="w-7 h-7 fill-white stroke-none" />
        )}
      </button>
    </div>
  );
}
