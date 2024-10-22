import React from 'react';
import { Zap, Cpu, Brain, Cog, Lightbulb, Database } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Electrical Engineering",
      description: "Circuit design, power systems, and electrical control systems."
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Mechanical Engineering",
      description: "Product design, thermal analysis, and mechanical simulations."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Artificial Intelligence",
      description: "Machine learning models, neural networks, and AI integrations."
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Deep Learning",
      description: "Advanced neural networks, computer vision, and natural language processing."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "IoT Solutions",
      description: "Smart device development, IoT architecture, and data analytics."
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Engineering",
      description: "Big data processing, data pipelines, and database optimizations."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;