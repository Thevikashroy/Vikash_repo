import  { useState } from 'react';
import { Github, Mail, ExternalLink, Briefcase, GraduationCap, Code, Menu, X, Linkedin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using stable diffusion",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "React", "OpenAI"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-100">Vikash kumar</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-gray-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-indigo-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-indigo-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-300 hover:text-indigo-600 transition-colors">About</a>
                <a href="#projects" className="text-gray-300 hover:text-indigo-600 transition-colors">Projects</a>
                <a href="#experience" className="text-gray-300 hover:text-indigo-600 transition-colors">Experience</a>
                <a href="#contact" className="text-gray-300 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://avatars.githubusercontent.com/u/114073200?v=4"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-6 ring-4 ring-indigo-50"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vikash kumar
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer & Backend Developer
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/vikash-kumar018382221/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-900 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Thevikashroy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:Vikashkrdss19@gmail.com"
                className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
            <div className="max-w-2xl text-center">
              <p className="text-gray-300 mb-6">
                I’m a passionate full-stack developer with a solid foundation in web development.
                I have hands-on experience with modern technologies like React, Node.js, and MongoDB. 
                As a recent graduate, I am eager to apply my knowledge to real-world projects and continue growing my skill set.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="font-bold text-indigo-600">1+</p>
                  <p className="text-gray-300">Projects</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="font-bold text-indigo-600">00</p>
                  <p className="text-gray-300">Clients</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="font-bold text-indigo-600">0.6</p>
                  <p className="text-gray-300">Years</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="font-bold text-indigo-600">00</p>
                  <p className="text-gray-300">Articles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-xl shadow-md overflow-hidden border border-gray-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    View Project <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
            <div className="bg-gray bg-sky-700 p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-black-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900"> Developer</h3>
                    <p className="text-black-600">Fresher</p>
                  </div>
                </div>
                <p className="text-black-600">
                  Led development of multiple high-impact projects, mentored junior developers,
                  and implemented best practices that improved team productivity by 40%.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-600">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                    <p className="text-gray-400">Fresher</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Developed and maintained multiple client projects, implemented new features,
                  and reduced loading times by 60% through optimization.
                </p>
              </div>

              <div className="bg-indigo-800 p-6 rounded-xl shadow-sm border border-gray-600">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Master of Computer Application, MCA</h3>
                    <p className="text-gray-200">Tech University • 2023 - 2025</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Completed my MCA (Master of Computer Applications), with a broad knowledge of software development and programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Feel free to reach out for any inquiries or opportunities.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:contact@example.com"
                className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </a>
              <a
                href="https://github.com/Thevikashroy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vikash-kumar018382221/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-indigo-900 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vikash kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

