import React, { useState } from 'react';
import usePortfolio from '../hooks/usePortfolio';
import { Mail, GitBranch, Link2, PhoneCall } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contact } = usePortfolio();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitState.type !== 'idle') {
      setSubmitState({ type: 'idle', message: '' });
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setSubmitState({
        type: 'error',
        message: 'Please fill in your name, email, and message before sending.',
      });
      return;
    }

    const subject = `Portfolio Contact from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const directEmail = `mailto:${contact.email}`;

    try {
      const fallbackLink = document.createElement('a');
      fallbackLink.href = mailtoLink;
      fallbackLink.style.display = 'none';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);

      setSubmitState({
        type: 'success',
        message: `Your email app should open with the message ready to send. If it doesn't, email me directly at ${contact.email}.`,
      });
    } catch {
      setSubmitState({
        type: 'error',
        message: `Email client could not be opened. Please email me directly at ${contact.email}.`,
      });
    }

    if (typeof window !== 'undefined') {
      window.location.href = directEmail;
    }
  };

  return (
    <section id="contact" className="relative py-20 border-t-4 border-retro-border bg-retro-darker/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-pink tracking-widest uppercase inline-block border-b-4 border-retro-pink pb-2">
            LET'S BUILD SOMETHING ✦
          </h2>
          <p className="font-sans text-sm text-retro-muted max-w-md mx-auto mt-4">
            Have an idea, project, hackathon, internship opportunity, or something interesting to build?
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="border-4 border-retro-yellow bg-retro-secondary/80 px-5 py-3 text-center shadow-pixel-yellow">
            <div className="font-pixel text-[9px] uppercase text-retro-yellow">BUILD SOMETHING WITH ME?</div>
            <a href={`mailto:${contact.email}`} className="mt-3 inline-block border-2 border-retro-yellow bg-retro-dark px-4 py-2 font-pixel text-[8px] uppercase text-retro-yellow hover:-translate-y-0.5 transition-transform">[ EMAIL ME ✦ ]</a>
          </div>
        </div>

        {/* Contact Layout: Mailbox Form & Social Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Mail Terminal Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-retro-secondary border-4 border-retro-pink p-6 pixel-corners shadow-pixel-pink">
            
            <div className="border-b-2 border-retro-border pb-3 mb-6 font-pixel text-[9px] text-retro-pink flex justify-between select-none">
              <span>MAIL_CLIENT.EXE</span>
              <span>OUTBOX: 0</span>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4 font-pixel text-[8px] tracking-wide">
              {/* Name field */}
              <div className="flex flex-col space-y-2">
                <label className="text-white uppercase">SENDER NAME:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="type your name..."
                  className="bg-retro-dark border-2 border-retro-border p-2.5 text-white font-sans text-xs focus:outline-none focus:border-retro-pink pixel-corners-sm"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col space-y-2">
                <label className="text-white uppercase">SENDER EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="type your email..."
                  className="bg-retro-dark border-2 border-retro-border p-2.5 text-white font-sans text-xs focus:outline-none focus:border-retro-pink pixel-corners-sm"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col space-y-2">
                <label className="text-white uppercase">TRANSMIT MESSAGE:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="write your message description..."
                  className="bg-retro-dark border-2 border-retro-border p-2.5 text-white font-sans text-xs focus:outline-none focus:border-retro-pink pixel-corners-sm resize-none"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full font-pixel text-[9px] py-3 bg-retro-pink border-4 border-black text-black font-bold pixel-corners transition-all duration-75 shadow-pixel active:translate-x-1 active:translate-y-1 active:shadow-none uppercase"
                >
                  SEND MESSAGE →
                </button>
              </div>

              {submitState.message && (
                <div
                  className={`font-sans text-xs ${submitState.type === 'error' ? 'text-red-300' : 'text-retro-cyan'}`}
                >
                  {submitState.message}
                </div>
              )}
            </form>

          </div>

          {/* Column 2: Inventory Social Badges (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-retro-secondary border-4 border-retro-border p-5 pixel-corners shadow-pixel select-none">
              <span className="font-pixel text-[8px] text-retro-muted uppercase block border-b-2 border-retro-border pb-2.5 mb-4">
                COMMUNICATIONS INVENTORY
              </span>
              
              {/* List of social icons */}
              <div className="space-y-3 font-pixel text-[9px]">
                
                {/* Email Badge */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-3 border-2 border-retro-lavender bg-retro-darker/60 hover:bg-retro-lavender/10 text-white transition-colors pixel-corners-sm"
                >
                  <span className="p-1.5 bg-retro-lavender text-retro-darker pixel-corners-sm shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[7px] text-retro-muted uppercase">EMAIL ADDR</span>
                    <span className="font-mono text-xs font-semibold select-all mt-0.5 truncate">{contact.email}</span>
                  </div>
                </a>

                {/* LinkedIn Badge */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 border-2 border-retro-cyan bg-retro-darker/60 hover:bg-retro-cyan/10 text-white transition-colors pixel-corners-sm"
                >
                  <span className="p-1.5 bg-retro-cyan text-retro-darker pixel-corners-sm shrink-0">
                    <Link2 className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[7px] text-retro-muted uppercase">LINKEDIN LINK</span>
                    <span className="font-sans text-xs font-semibold mt-0.5 truncate">/in/supriya-balakrishna</span>
                  </div>
                </a>

                {/* GitHub Badge */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 border-2 border-retro-pink bg-retro-darker/60 hover:bg-retro-pink/10 text-white transition-colors pixel-corners-sm"
                >
                  <span className="p-1.5 bg-retro-pink text-retro-darker pixel-corners-sm shrink-0">
                    <GitBranch className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[7px] text-retro-muted uppercase">GITHUB LOG</span>
                    <span className="font-sans text-xs font-semibold mt-0.5 truncate">/supriyabalakrishna</span>
                  </div>
                </a>

                {/* Phone Call Badge */}
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 p-3 border-2 border-retro-yellow bg-retro-darker/60 hover:bg-retro-yellow/10 text-white transition-colors pixel-corners-sm"
                >
                  <span className="p-1.5 bg-retro-yellow text-retro-darker pixel-corners-sm shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[7px] text-retro-muted uppercase">TELEPHONE CALL</span>
                    <span className="font-mono text-xs font-semibold mt-0.5 select-all">{contact.phone}</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Custom visual decoration: Mailbox SVG */}
            <div className="border-4 border-retro-border bg-retro-dark/40 p-4 pixel-corners flex items-center justify-center gap-4 select-none">
              <span className="text-3xl animate-pulse">📮</span>
              <div className="font-pixel text-[7px] text-retro-muted leading-relaxed uppercase">
                MAILBOX CAPACITY: MAX <br />
                ENCRYPTED TRANSFERS ACTIVE
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
