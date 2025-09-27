import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileDown, Terminal, Shield, Code, ExternalLink, ChevronDown } from 'lucide-react';

export default function CybersecPortfolio() {
  const [terminalText, setTerminalText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState("whoami");
  
  const terminalCommands = [
    'root@sevil:~$ whoami',
    'amen_allah_amari',
    'root@sevil:~$ cat skills.txt',
    'Web Development | Cybersecurity | Penetration Testing',
    'root@sevil:~$ sudo apt-get install portfolio',
    'Portfolio installed successfully ✓',
    'root@sevil:~$ ./run_portfolio.sh',
    'Loading portfolio...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < terminalCommands.length) {
        setTerminalText(prev => prev + terminalCommands[currentIndex] + '\n');
        setCurrentIndex(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, terminalCommands]);

  const skills = [
    { name: 'React & Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Cybersecurity', level: 82 },
    { name: 'Penetration Testing', level: 78 },
    { name: 'Linux', level: 92 }
  ];

  const projects = [
    {
      title: 'SecureAuth Portal',
      description: 'Multi-factor authentication system with biometric verification',
      tech: ['React', 'Node.js', 'MongoDB', 'WebAuthn'],
      github: '#',
      demo: '#'
    },
    {
      title: 'VulnScanner Pro',
      description: 'Automated vulnerability assessment tool for web applications',
      tech: ['Python', 'Flask', 'SQLite', 'Nmap'],
      github: '#',
      demo: '#'
    },
    {
      title: 'CryptoChat',
      description: 'End-to-end encrypted messaging application',
      tech: ['React Native', 'Socket.io', 'AES-256'],
      github: '#',
      demo: '#'
    }
  ];

  const cards = [
    {
      id: 'whoami',
      title: 'Who Am I?',
      icon: Shield,
      color: 'cyan',
      content: (
        <div className="text-center space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Hi! I'm just a guy who thinks passwords like "123456" are not cool<br/>
            I make websites that don't break (most of the time) and occasionally pretend to be a hacker 
            by typing random commands in terminal windows. 
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            When I'm not staring at code for 12 hours straight, you can find me wondering why 
            my code works on my machine but breaks in production
          </p>
          
          <div className="flex justify-center space-x-6 text-cyan-400 mt-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Security Enthusiast</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span className="text-sm">Bug Creator & Destroyer</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Wanna See My Projects?',
      icon: Code,
      color: 'purple',
      content: (
        <div className="text-center space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Oh, you're one of those people who actually checks if I can code? 
            Fair enough... 
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            All my digital masterpieces (and embarrassing early commits) live on GitHub. 
            Go ahead, judge my variable naming skills!
          </p>
          
          <div className="pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-semibold group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Check Out My GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="text-xs text-gray-400 pt-2">
            Warning: Contains traces of coffee-fueled coding sessions ☕
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Matrix-like background effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s infinite linear'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-cyan-400">
              <span className="text-red-400">&lt;</span>Sevil<span className="text-red-400">&gt;</span>
            </div>
            <div className="flex space-x-8">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        {/* Mobile Layout */}
        <div className="lg:hidden max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 font-mono">Hi There</p>
              <h1 className="text-5xl font-bold leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">Amen Allah Amari</span>
              </h1>
              <p className="text-xl text-gray-300">I am a Web Developer & Cybersecurity Enthusiast</p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all flex items-center space-x-2">
                <FileDown className="w-5 h-5" />
                <span>Resume</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Terminal Animation Mobile */}
          <div className="relative">
            <div className="bg-black/80 rounded-lg border border-gray-600 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400">terminal</div>
              </div>
              <div className="p-4 h-48 overflow-hidden">
                <pre className="text-green-400 font-mono text-sm whitespace-pre-line">
                  {terminalText}
                  <span className="animate-pulse">|</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid max-w-7xl mx-auto px-6 grid-cols-2 gap-12 items-start">
          {/* Left Side - Hero Content */}
          <div className="space-y-8 mt-16"> {/* Added margin-top for more gap */}
            <div className="space-y-4">
              <p className="text-cyan-400 font-mono">Hi There</p>
              <h1 className="text-6xl font-bold leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">Amen Allah Amari</span>
              </h1>
              <p className="text-xl text-gray-300">I am a Web Developer & Cybersecurity Enthusiast</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all flex items-center space-x-2">
                <FileDown className="w-5 h-5" />
                <span>Resume</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Terminal Animation Desktop */}
            <div className="relative mt-8">
              <div className="bg-black/80 rounded-lg border border-gray-600 shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">terminal</div>
                </div>
                <div className="p-4 h-48 overflow-hidden">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-line">
                    {terminalText}
                    <span className="animate-pulse">|</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Cards Desktop */}
          <div className="relative mt-16 space-y-6"> {/* Added margin-top and spacing */}
            {cards.map((card) => (
  <div
    key={card.id}
    className={`bg-gray-900/50 rounded-2xl border ${
      card.color === 'cyan' ? 'border-cyan-500/30' : 'border-purple-500/30'
    } p-6 backdrop-blur-lg transition-all duration-500 cursor-pointer ${
      expandedCard === card.id 
        ? 'h-auto opacity-100 scale-100' 
        : 'h-20 opacity-80 hover:opacity-90 hover:scale-105'
    }`}
    onMouseEnter={() => setExpandedCard(card.id)}
  >
              
                <div className="flex items-center justify-between mb-4">
                  <h2 className={`text-2xl font-bold ${
                    card.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`}>
                    {card.title}
                  </h2>
                  <div className={`p-2 rounded-full ${
                    card.color === 'cyan' ? 'bg-cyan-500/20' : 'bg-purple-500/20'
                  }`}>
                    <card.icon className={`w-5 h-5 ${
                      card.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                    }`} />
                  </div>
                </div>
                
                <div className={`transition-all duration-500 ${
                  expandedCard === card.id 
                    ? 'opacity-100 max-h-96' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {card.content}
                </div>
                
                
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section - Mobile Only */}
      <section id="about" className="lg:hidden py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900/50 rounded-2xl border border-cyan-500/30 p-8 backdrop-blur-lg">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">Who Am I?</h2>
            
            <div className="text-center space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi! I'm just a guy who thinks passwords like "123456" are not cool<br/>
                I make websites that don't break (most of the time) and occasionally pretend to be a hacker 
                by typing random commands in terminal windows. 
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not staring at code for 12 hours straight, you can find me wondering why 
                my code works on my machine but breaks in production 
              </p>
              
              <div className="flex justify-center space-x-8 text-cyan-400 mt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Security Enthusiast</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Bug Creator & Destroyer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-5 h-5" />
                  <span>Terminal Wizard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile Only */}
      <section id="projects" className="lg:hidden py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-gray-900/50 rounded-2xl border border-cyan-500/30 p-12 backdrop-blur-lg">
              <h2 className="text-4xl font-bold text-cyan-400 mb-8">Wanna See My Projects?</h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-xl leading-relaxed">
                  Oh, you're one of those people who actually checks if I can code? 
                  Fair enough...
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  All my digital masterpieces (and embarrassing early commits) live on GitHub. 
                  Go ahead, judge my variable naming skills!
                </p>
                
                <div className="pt-6">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all text-lg font-semibold group"
                  >
                    <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <span>Check Out My GitHub</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <p className="text-sm text-gray-400 pt-4">
                  Warning: Contains traces of coffee-fueled coding sessions and questionable design choices ☕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8">Let's Connect</h2>
          <p className="text-gray-300 text-lg mb-8">
            Ready to secure your next project? Let's discuss how we can build something amazing together.
          </p>
          
          <div className="flex justify-center space-x-8">
            <a href="mailto:aromal@example.com" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a href="#" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
              Download CV
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Sevil. Secured by design.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}