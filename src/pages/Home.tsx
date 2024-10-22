import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Brain } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative Engineering Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">Electrical, Mechanical, AI, and Deep Learning Services</p>
        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Get Started</Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Electrical Engineering</h2>
          <p className="text-gray-600">Cutting-edge electrical solutions for modern challenges.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Cpu className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Mechanical Engineering</h2>
          <p className="text-gray-600">Innovative mechanical designs and optimizations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Brain className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">AI & Deep Learning</h2>
          <p className="text-gray-600">Advanced AI solutions for complex problems.</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-gray-600">Years of experience in multiple engineering disciplines.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">Cutting-edge solutions using the latest technologies.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Customization</h3>
            <p className="text-gray-600">Tailored services to meet your specific needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600">Dedicated assistance throughout your project.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;