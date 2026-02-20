import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const links = [
  { href: "tel:+2348002880395", icon: <Phone size={18} />, label: "+234 800 288 0395" },
  { href: "mailto:princessonyinyec12@gmail.com", icon: <Mail size={18} />, label: "princessonyinyec12@gmail.com" },
  { href: "https://github.com/reacher-tech", icon: <Github size={18} />, label: "reacher-tech" },
  { href: "https://www.linkedin.com/in/princess-aribodor-983b39291", icon: <Linkedin size={18} />, label: "Princess Aribodor" },
];

const Footer = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const slideIn = (direction, delay) => ({
    opacity: triggered ? 1 : 0,
    transform: triggered
      ? 'translate(0, 0)'
      : direction === 'left' ? 'translateX(-40px)' : 'translateX(40px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
  });

  const slideUp = (delay) => ({
    opacity: triggered ? 1 : 0,
    transform: triggered ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  });

  return (
    <div ref={ref} className="relative overflow-hidden m-4 p-2">

      <div className="absolute inset-2 rounded-2xl bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 opacity-60 blur-md pointer-events-none"></div>

      <div
        className="relative rounded-2xl overflow-hidden border border-[#c4a882]"
        style={{ background: 'linear-gradient(135deg, #fdf6ee 0%, #f5e6d3 50%, #eedac7 100%)' }}
      >
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">

          
          <div className="flex flex-col gap-4 md:w-[55%]" style={slideIn('left', 100)}>
            <h1 className="font-extrabold text-3xl md:text-4xl text-[#2C1332] tracking-tight leading-none">
              Ree<span className="text-[#393048]">`</span>
            </h1>

            <p className="text-sm md:text-base text-[#5c3a1e] max-w-xs leading-relaxed">
              Stay in the loop — get updates on my latest projects and work.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-1">
              <input
                 type="email"
                className="flex-1 min-w-0 px-4 py-2.5 text-sm md:text-base rounded-lg border border-[#c4a882] bg-white/70 text-[#2C1332] placeholder-[#9a7a5a] outline-none focus:ring-2 focus:ring-[#2C1332]/30 transition"
                placeholder="Enter your email"
              />
              <button className="shrink-0 bg-[#2C1332] text-white hover:bg-[#452406] active:scale-95 transition-all px-5 py-2.5 text-sm md:text-base rounded-lg font-semibold tracking-wide">
                Subscribe
              </button>
            </div>

            <p className="text-xs md:text-sm text-[#7a5030] mt-auto pt-2">
              © 2026 Ree`. All rights reserved.
            </p>
          </div>

          
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#c4a882] to-transparent self-stretch"></div>
          <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-[#c4a882] to-transparent"></div>

          
          <div className="flex flex-col gap-3 md:w-[40%] justify-center" style={slideIn('right', 150)}>
            {links.map(({ href, icon, label }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm md:text-base text-[#2C1332] hover:bg-[#2C1332]/8 hover:text-[#452406] transition-colors group"
                style={slideUp(250 + i * 80)}
              >
                <span className="shrink-0 text-[#362d46] group-hover:text-[#452406] transition-colors">{icon}</span>
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;