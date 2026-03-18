/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Star, 
  StarHalf,
  Mail,
  Menu, 
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  { id: 1, title: "YouTube Thumbnail Design", category: "Graphic Design", image: "https://ibb.co/n8144SH8" },
  { id: 2, title: "Creative Project 02", category: "UI/UX Design", image: "https://ibb.co/fzjd84yQ" },
  { id: 3, title: "Creative Project 03", category: "Branding", image: "https://ibb.co/ns6wv4DS" },
  { id: 4, title: "Creative Project 04", category: "Graphic Design", image: "https://ibb.co/9HMYSZYz" },
  { id: 5, title: "Creative Project 05", category: "Web Design", image: "https://ibb.co/0yVphzdw" },
  { id: 6, title: "Creative Project 06", category: "Branding", image: "https://ibb.co/YShBSW6" },
  { id: 7, title: "Creative Project 07", category: "UI/UX Design", image: "https://ibb.co/JWgVCwJG" },
  { id: 8, title: "Creative Project 08", category: "Graphic Design", image: "https://ibb.co/SwgJWFDb" },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Alex Rivera", role: "Founder, Bloom Creative", text: "Harshit's eye for detail is unmatched. He transformed our brand's visual language into something truly modern and engaging.", avatar: "https://i.pravatar.cc/150?u=alex" },
  { id: 2, name: "Jessica Wu", role: "Marketing Director, Pulse", text: "Working with Harshit was a breeze. He's incredibly responsive and delivered high-quality designs that exceeded our expectations.", avatar: "https://i.pravatar.cc/150?u=jessica" },
  { id: 3, name: "David Miller", role: "Product Designer, Slate", text: "The thumbnails Harshit designed for our channel significantly boosted our click-through rate. A true professional in every sense.", avatar: "https://i.pravatar.cc/150?u=david" },
  { id: 4, name: "Elena Rodriguez", role: "CEO, Vibe Studio", text: "Harshit has a unique ability to capture a brand's essence and translate it into compelling visuals. Highly recommended!", avatar: "https://i.pravatar.cc/150?u=elena" },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-beige/80 backdrop-blur-md z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tighter">HG.</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          {['Home', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-teal transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-beige border-b border-black/5 px-6 py-8 space-y-4"
          >
            {['Home', 'Work', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter">
            Hey There,<br />I’m Harshit
          </h1>
        </motion.div>

        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-teal rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white border border-black/5 px-6 py-3 rounded-full flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold uppercase tracking-widest">Available for Hire</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          {/* Brush Stroke Background */}
          <div className="absolute -top-10 -left-10 w-full h-full bg-teal/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[110%] bg-teal/10 -z-10 opacity-60" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', animation: 'morph 8s ease-in-out infinite' }}></div>
          
          <style>{`
            @keyframes morph {
              0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
              50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
              100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            }
          `}</style>
          
          <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="https://picsum.photos/seed/harshit/800/800" 
              alt="Harshit Gupta" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange rounded-full flex items-center justify-center border-4 border-white shadow-xl"
          >
            <div className="text-center p-2">
              <span className="text-[10px] font-black uppercase tracking-tighter leading-none block">Professional</span>
              <span className="text-xs font-black uppercase tracking-tighter leading-none block">Graphic</span>
              <span className="text-xs font-black uppercase tracking-tighter leading-none block">Designer</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 lg:absolute lg:-right-20 lg:top-1/2 lg:-translate-y-1/2 lg:w-64"
        >
          <p className="text-lg font-medium text-slate-600 leading-relaxed italic">
            "I design beautifully simple things, and I love what I do."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="work" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-extrabold tracking-tighter">Latest Work</h2>
            <p className="text-slate-400 max-w-md">A selection of my favorite projects across different design disciplines.</p>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center space-x-2 hover:bg-mustard transition-colors">
            <span>View All Projects</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.a
              key={project.id}
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="group cursor-pointer block p-10 rounded-[2.5rem] border border-white/10 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <p className="text-teal font-bold text-xs uppercase tracking-widest">{project.category}</p>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold leading-tight group-hover:text-teal transition-colors">{project.title}</h3>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-xs font-bold uppercase tracking-tighter text-slate-500 group-hover:text-slate-300 transition-colors">
                    View Project Details
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl font-extrabold tracking-tighter">Client Stories</h2>
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4].map((i) => <Star key={i} className="w-5 h-5 fill-mustard text-mustard" />)}
          <StarHalf className="w-5 h-5 fill-mustard text-mustard" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-10 rounded-[3rem] shadow-sm border border-black/5 space-y-8 relative">
            <div className="text-4xl font-serif text-teal opacity-20 absolute top-8 right-10">“</div>
            <p className="text-xl font-medium text-slate-700 leading-relaxed relative z-10">
              {t.text}
            </p>
            <div className="flex items-center space-x-4">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-teal rounded-[4rem] p-12 md:p-24 text-center text-white space-y-12 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

        <div className="space-y-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
            Let’s make something<br />amazing together
          </h2>
          <p className="text-teal-50 max-w-xl mx-auto text-lg">
            Ready to start your next project? I'm currently available for freelance work and new opportunities.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
          <a 
            href="mailto:anskhig@gmail.com"
            className="bg-white text-teal px-10 py-5 rounded-full font-black text-lg hover:bg-mustard hover:text-black transition-all shadow-xl flex items-center space-x-3"
          >
            <Mail className="w-6 h-6" />
            <span>anskhig@gmail.com</span>
          </a>
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-mustard" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-mustard" />
              <span>Quick Response</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-black/5 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
        <div className="text-2xl font-black tracking-tighter">HG.</div>
        <div className="flex justify-center space-x-8 text-sm font-bold uppercase tracking-widest text-slate-500">
          <a href="mailto:anskhig@gmail.com" className="hover:text-teal lowercase">anskhig@gmail.com</a>
          <a href="#" className="hover:text-teal">Twitter</a>
          <a href="#" className="hover:text-teal">Dribbble</a>
          <a href="#" className="hover:text-teal">LinkedIn</a>
        </div>
        <div className="md:text-right text-sm font-medium text-slate-400">
          © 2026 Harshit Gupta. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
