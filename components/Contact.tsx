
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, MapPin, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string) => {
    if (name === 'name') {
      if (!value.trim()) return 'Please enter your name';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email address is required';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Please provide a valid email';
    }
    if (name === 'message') {
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error on change if the new value is valid
    const currentError = validateField(id, value);
    if (!currentError) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Update or clear error on blur based on validity
    setErrors(prev => ({ ...prev, [id]: validateField(id, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.keys(formData).forEach(key => {
      const err = validateField(key, formData[key as keyof typeof formData]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            <div className="lg:col-span-2 bg-royal-900 p-12 lg:p-20 text-white flex flex-col justify-between relative">
              {/* Decorative Circle */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-10 h-[1px] bg-gold-500"></div>
                  <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px]">Contact</span>
                </div>
                <h2 className="text-5xl font-heading font-black mb-10 leading-tight">Bring your ideas <span className="text-gold-500">to life.</span></h2>
                
                <div className="space-y-10 mt-12">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="shrink-0 p-5 bg-white/5 rounded-2xl group-hover:bg-gold-500 group-hover:text-royal-900 transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Direct Line</p>
                      <p className="text-lg font-bold">hello@ehtesham.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="shrink-0 p-5 bg-white/5 rounded-2xl group-hover:bg-gold-500 group-hover:text-royal-900 transition-all duration-300">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Timezone</p>
                      <p className="text-lg font-bold">GMT +5 (Available Globally)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex gap-4 relative z-10">
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-gold-500 hover:text-royal-900 transition-all duration-300"><Github size={20} /></a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-gold-500 hover:text-royal-900 transition-all duration-300"><Linkedin size={20} /></a>
              </div>
            </div>

            <div className="lg:col-span-3 p-12 lg:p-20 bg-white">
              {submitStatus === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-4xl font-black text-royal-900 mb-4">Transmission Successful.</h3>
                  <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">Thank you for reaching out. I'll review your brief and contact you shortly.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="px-10 py-4 border border-royal-900/10 rounded-full font-bold text-royal-900 hover:bg-royal-900 hover:text-white transition-all">Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-royal-900/40 mb-2 block">Identity</label>
                      <input 
                        type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur}
                        className={`w-full bg-slate-50 rounded-2xl px-6 py-5 outline-none transition-all border ${errors.name ? 'border-red-400 bg-red-50/10' : 'border-transparent focus:border-gold-500 focus:bg-white focus:shadow-xl'}`}
                        placeholder="What should I call you?"
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-[0.2em]">{errors.name}</p>}
                    </div>
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-royal-900/40 mb-2 block">Contact Info</label>
                      <input 
                        type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
                        className={`w-full bg-slate-50 rounded-2xl px-6 py-5 outline-none transition-all border ${errors.email ? 'border-red-400 bg-red-50/10' : 'border-transparent focus:border-gold-500 focus:bg-white focus:shadow-xl'}`}
                        placeholder="Email Address"
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-[0.2em]">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-royal-900/40 mb-2 block">Project Scope</label>
                    <textarea 
                      id="message" rows={5} value={formData.message} onChange={handleChange} onBlur={handleBlur}
                      className={`w-full bg-slate-50 rounded-3xl px-6 py-5 outline-none transition-all resize-none border ${errors.message ? 'border-red-400 bg-red-50/10' : 'border-transparent focus:border-gold-500 focus:bg-white focus:shadow-xl'}`}
                      placeholder="Tell me about your goals..."
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-[0.2em]">{errors.message}</p>}
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="group relative w-full md:w-auto px-16 py-6 bg-royal-900 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-gold-500 hover:text-royal-900 transition-all duration-300 shadow-2xl flex items-center justify-center gap-4 overflow-hidden disabled:opacity-50"
                  >
                    <span className="relative z-10">{isSubmitting ? 'Transmitting Data...' : 'Initialize Request'}</span>
                    <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
