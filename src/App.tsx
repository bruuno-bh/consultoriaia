import React, { useState } from 'react';
import { Menu, X, Brain, Users, BarChart, MessageSquare, ChevronDown, ChevronUp, Send } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Como a IA pode beneficiar minha empresa?",
      answer: "A IA pode otimizar processos, reduzir custos operacionais, melhorar a tomada de decisões e proporcionar insights valiosos através da análise de dados."
    },
    {
      question: "Quanto tempo leva para implementar soluções de IA?",
      answer: "O tempo de implementação varia de acordo com a complexidade do projeto, geralmente entre 2 a 6 meses, incluindo análise, desenvolvimento e treinamento."
    },
    {
      question: "Que tipos de dados são necessários?",
      answer: "Os dados necessários dependem do projeto específico, mas geralmente incluem dados históricos relevantes ao problema que queremos resolver."
    }
  ];

  const services = [
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      title: "Machine Learning",
      description: "Soluções personalizadas de aprendizado de máquina para otimizar seus processos"
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Consultoria Estratégica",
      description: "Orientação especializada para implementação de IA em seu negócio"
    },
    {
      icon: <BarChart className="w-12 h-12 text-green-500" />,
      title: "Análise de Dados",
      description: "Transforme dados em insights acionáveis para seu negócio"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">AI Consult</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-green-500 transition-colors">Serviços</a>
              <a href="#about" className="hover:text-green-500 transition-colors">Sobre</a>
              <a href="#faq" className="hover:text-green-500 transition-colors">FAQ</a>
              <a href="#contact" className="bg-green-500 text-gray-900 px-4 py-2 rounded-md hover:bg-green-400 transition-colors">
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="hover:text-green-500 transition-colors">Serviços</a>
              <a href="#about" className="hover:text-green-500 transition-colors">Sobre</a>
              <a href="#faq" className="hover:text-green-500 transition-colors">FAQ</a>
              <a href="#contact" className="bg-green-500 text-gray-900 px-4 py-2 rounded-md hover:bg-green-400 transition-colors text-center">
                Contato
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with H1 */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Consultoria de ia e consultoria de ia: o consultor ideal e consultor especialista
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Bem-vindo a este conteúdo especializado em inteligência artificial e consultoria focada em soluções tecnológicas para diversos negócios. Aqui, abordaremos como empresas podem usufruir de consultoria de ia para criar projetos de ia, utilizando algoritmos avançados e machine learning de forma estratégica.
          </p>
          <a 
            href="#contact"
            className="bg-green-500 text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-400 transition-colors inline-block"
          >
            Comece Agora
          </a>
        </div>
      </section>

      {/* Services Section with H2 */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como a ia impulsiona o seu consultor de sucesso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with H2 */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Consultoria inovadora para estratégias e agência inteligência</h2>
              <p className="text-gray-400 mb-4">
                A consultoria em inteligência artificial se fundamenta em compreender a realidade de cada empresa, oferecendo serviços adaptados para atender às necessidades específicas. Em muitos casos, a empresa pode precisar de um consultor altamente especializado para conduzir análise de mercado, definindo estratégias de marketing e seo que aumentem o roi e reduzam custos operacionais.
              </p>
              <p className="text-gray-400">
                A inteligência por trás de tais soluções está fortemente relacionada ao uso de artificial e ao processamento de dados, garantindo resultados consistentes.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team working"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with H3s */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Consultorias de ia: como o consultor aplica machine learning</h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-green-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-900">
                    <p className="text-gray-400">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h3 className="text-3xl font-bold text-center mt-16 mb-8">Técnicas de ia da bowie e lenovo em foco</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400">
              Quando falamos em ia, não podemos esquecer que a inteligência artificial abrange inúmeras vertentes: machine learning, deep learning, redes neurais e muito mais. A adoção de ia permite uso de técnicas altamente avançadas que otimizam processos e trazem resultados expressivos para o consultor que trabalha com marketing e estratégias.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <form className="max-w-xl mx-auto">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-green-400 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">AI Consult</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 AI Consult. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;