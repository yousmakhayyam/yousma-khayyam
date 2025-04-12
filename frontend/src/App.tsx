import { Code2, PenTool as  ChevronDown, Github, Twitter, Linkedin, Rocket, Brain, Target, Zap, Database, Globe, Server, Code, Cpu, Layout } from 'lucide-react';
import { ThemeToggle } from './components/theme-toggle';
import { Button } from './components/ui/button';
import ContactUs from "./components/ContactUs"
function App() {

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
            Bitbuilders
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#work" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Work</a>
              <a href="#tech" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Tech Stack</a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
            </div>
            <ThemeToggle />
            <Button>Get in Touch</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')] opacity-5 bg-fixed" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block animate-bounce-slow mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Best Digital Solutions
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
              Transforming Ideas into Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              We craft cutting-edge web solutions that drive innovation and deliver exceptional user experiences.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Project
                <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg"  variant="outline">
                <a href="#work">
                  View Our Work
                </a>

                
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </header>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-4 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Stack Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-card p-8 rounded-lg border hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> React.js & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <Layout className="w-4 h-4" /> Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4" /> TypeScript
                  </li>
                </ul>
              </div>
            </div>
            <div className="group bg-card p-8 rounded-lg border hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Server className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4" /> Laravel & PHP
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4" /> Flask & Python
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4" /> Node.js & Express
                  </li>
                </ul>
              </div>
            </div>
            <div className="group bg-card p-8 rounded-lg border hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Database className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Database & DevOps</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Database className="w-4 h-4" /> MongoDB & PostgreSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> AWS & Docker
                  </li>
                  <li className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> CI/CD Pipelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering comprehensive digital solutions that drive growth and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group hover:-translate-y-2 transition-transform">
              <div className="bg-card p-6 rounded-lg border transition-all hover:shadow-lg">
                <Rocket className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground">Full-stack solutions that scale with your business.</p>
              </div>
            </div>
            <div className="group hover:-translate-y-2 transition-transform">
              <div className="bg-card p-6 rounded-lg border transition-all hover:shadow-lg">
                <Brain className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                <p className="text-muted-foreground">Smart solutions powered by cutting-edge AI.</p>
              </div>
            </div>
            <div className="group hover:-translate-y-2 transition-transform">
              <div className="bg-card p-6 rounded-lg border transition-all hover:shadow-lg">
                <Target className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Digital Strategy</h3>
                <p className="text-muted-foreground">Data-driven strategies for digital success.</p>
              </div>
            </div>
            <div className="group hover:-translate-y-2 transition-transform">
              <div className="bg-card p-6 rounded-lg border transition-all hover:shadow-lg">
                <Zap className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Performance</h3>
                <p className="text-muted-foreground">Optimized solutions for speed and scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions that drive real business results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                tech: "Laravel • Vue.js • PostgreSQL",
                image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
              },
              {
                title: "AI-Powered Analytics",
                tech: "Python • Flask • TensorFlow",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              },
              {
                title: "Real Estate Platform",
                tech: "Next.js • Node.js • MongoDB",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
              },
              {
                title: "FinTech Dashboard",
                tech: "React • Express • PostgreSQL",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300">{project.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')] opacity-10" />
        <div className="container relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-primary-foreground/80">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-primary-foreground/80">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-primary-foreground/80">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="bg-card border rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
              </p>
              <Button size="lg" className="group">
                Start Your Project
                <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact US */}
      <ContactUs/>


      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Bitbuilders
              </h2>
              <p className="text-muted-foreground mb-4">
                Transforming Ideas into Digital Excellence
              </p>
              <div className="flex gap-4">
                <a href="github.com/thezohaibkhalid" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="x.com/thezohaibkhalid" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/zohaib-khalid-34307331b/" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>AI Solutions</li>
                <li>Digital Strategy</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Technologies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>React & Next.js</li>
                <li>Laravel & PHP</li>
                <li>Flask & Python</li>
                <li>Node.js & Express</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>contact@bitbuilders.tech</li>
                <li>+92 (327) 6027271</li>
                <li>Faisalabad, PK</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t text-muted-foreground">
            <p>© 2024 Bitbuilders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;