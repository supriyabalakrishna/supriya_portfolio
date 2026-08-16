import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'system';
}

export const TerminalSection: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'Initializing SUPRIYA_TERMINAL.exe...', type: 'system' },
    { text: 'supriya@portfolio:~$ whoami', type: 'input' },
    { text: 'Computer Science undergraduate specializing in AI & ML.', type: 'output' },
    { text: 'supriya@portfolio:~$ skills', type: 'input' },
    { text: 'Python, Machine Learning, Computer Vision, JavaScript, React, SQL, MongoDB, DSA, OOP, OpenCV, Git, Docker, Gemini, Antigravity.', type: 'output' },
    { text: 'supriya@portfolio:~$ status', type: 'input' },
    { text: 'BUILDING THINGS ✦ LEARNING AI ✦ EXPLORING ✦', type: 'output' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory: TerminalLine[] = [...history, { text: `supriya@portfolio:~$ ${inputVal}`, type: 'input' }];
    
    switch (cleanCmd) {
      case 'whoami':
        newHistory.push({ text: 'Computer Science undergraduate specializing in AI & ML with experience building AI applications and full-stack solutions.', type: 'output' });
        break;
      case 'skills':
        newHistory.push({ text: 'Python, C++, C, HTML, CSS, JavaScript, SQL, MongoDB, DSA, OOP, Problem solving, Machine Learning, Deep Learning, CNN, Computer Vision, Prompt Engineering, OpenCV, Pandas, NumPy, Git, GitHub, Docker, ChatGPT, Claude, Gemini, Antigravity, Cursor, Qoder.', type: 'output' });
        break;
      case 'status':
        newHistory.push({ text: 'BUILDING THINGS ✦ LEARNING AI ✦ EXPLORING ✦', type: 'output' });
        break;
      case 'help':
        newHistory.push({ text: 'Available commands: whoami, skills, status, clear, help, date', type: 'system' });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'date':
        newHistory.push({ text: new Date().toString(), type: 'output' });
        break;
      default:
        newHistory.push({ text: `bash: command not found: ${inputVal}. Type 'help' for options.`, type: 'system' });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="terminal" className="relative py-20 border-t-4 border-retro-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 select-none">
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-cyan tracking-widest uppercase inline-block border-b-4 border-retro-cyan pb-2">
            INTERACTIVE SHELL 💻
          </h2>
          <p className="font-sans text-sm text-retro-muted mt-4">
            Type commands below to query Supriya's portfolio core index.
          </p>
        </div>

        {/* Console Box */}
        <div className="bg-[#0a0a12] border-4 border-retro-cyan shadow-pixel-cyan pixel-corners flex flex-col overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-retro-cyan text-retro-darker px-3 py-1.5 font-pixel text-[9px] flex justify-between items-center select-none">
            <span className="font-bold">SUPRIYA_TERMINAL.exe</span>
            <div className="flex space-x-1">
              <span className="w-2.5 h-2.5 bg-retro-secondary/40 border border-retro-darker inline-block text-center text-[7px]" />
              <span className="w-2.5 h-2.5 bg-retro-pink border border-retro-darker inline-block text-center text-[7px]" />
            </div>
          </div>

          {/* CRT Screen Display */}
          <div className="p-4 h-[280px] overflow-y-auto font-mono text-xs text-retro-cyan leading-relaxed flex flex-col space-y-2 crt-monitor">
            
            {/* Command History */}
            {history.map((line, idx) => (
              <div 
                key={idx} 
                className={`${
                  line.type === 'input' 
                    ? 'text-white' 
                    : line.type === 'system' 
                      ? 'text-retro-pink' 
                      : 'text-retro-cyan/90 pl-3 border-l-2 border-retro-cyan/20'
                }`}
              >
                {line.text}
              </div>
            ))}
            
            <div ref={terminalEndRef} />

            {/* Interactive Input Form */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 text-white pt-2 border-t border-retro-border/20">
              <span className="font-bold text-retro-pink shrink-0">supriya@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white flex-grow font-mono"
                autoFocus
                placeholder="type 'help'..."
                aria-label="Terminal input"
              />
              <span className="w-1.5 h-3 bg-white animate-blink" />
            </form>

          </div>

          {/* Bottom helper logs */}
          <div className="bg-retro-darker/60 border-t border-retro-border px-3 py-1 text-[8px] font-mono text-retro-muted flex justify-between select-none">
            <span>TERMINAL READY</span>
            <span>UTF-8</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TerminalSection;
