"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hi there! I am Credozen. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { role: 'user', text: inputValue }]);
    setInputValue("");
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'Thanks for your message! Our team will get back to you shortly.' }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[100] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group"
          >
            <img src="/chat-icon.png" alt="Chat Icon" className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[110] w-[350px] bg-[#b3b3b3] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-300"
          >
            {/* Header */}
            <div className="bg-[#1f1427] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/chat-icon.png" alt="Chat Icon" className="w-6 h-6 object-contain drop-shadow-md" />
                <span className="font-bold">Credozen</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="h-[350px] p-4 overflow-y-auto flex flex-col gap-4 bg-[#b3b3b3]">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-blue text-white self-end rounded-tr-sm' 
                      : 'bg-white text-slate-800 self-start rounded-tl-sm border border-slate-100 shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#b3b3b3] border-t border-slate-400 flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-slate-200"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-[#1f1427] hover:bg-[#2e1f3e] rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
