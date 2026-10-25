import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export function App() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-500/15 rounded-full blur-[130px]" />
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:24px_24px]"
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;