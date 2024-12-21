import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MissionTimeline from '../components/MissionTimeline';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Stars Background */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '15px 15px',
          }}
        />

        {/* Main Building Visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto h-3/4">
            {/* Triangular Building Shape */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/90 to-[#002f5f]/90 transform skew-x-12">
              {/* Illuminated Lines */}
              <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-blue-400/50 glow" />
              <div className="absolute left-2/4 top-0 bottom-0 w-1 bg-blue-400/50 glow" />
              <div className="absolute left-3/4 top-0 bottom-0 w-1 bg-blue-400/50 glow" />
            </div>

            {/* Central Logo/Entry */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-white rounded-full glow-strong flex items-center justify-center">
                <span className="text-black text-2xl font-bold">StelTrek</span>
              </div>
            </div>
          </div>
        </div>

        {/* Foreground Elements */}
        <div className="absolute bottom-0 w-full">
          <div className="max-w-6xl mx-auto px-4">
            {/* Training Pods Visualization */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((pod) => (
                <div
                  key={pod}
                  className="h-24 bg-gradient-to-t from-blue-900/50 to-transparent rounded-t-lg border-t border-blue-400/30"
                >
                  <div className="h-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm">Training Pod {pod}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ground Level Details */}
          <div className="h-24 bg-gradient-to-t from-purple-900/30 to-transparent">
            <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
              <div className="text-sm text-purple-200">
                Space Training Center • Virtual Reality Labs • Mission Control
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="absolute top-1/4 left-0 right-0 text-center">
          <h1 className="text-5xl font-light mb-4">Welcome to the Future</h1>
          <p className="text-xl text-blue-200">Begin Your Journey to Space</p>
        </div>
      </div>

      {/* Add MissionTimeline here */}
      <MissionTimeline />

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-light">StelTrek</div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-blue-200 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .glow {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .glow-strong {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default HomePage;
