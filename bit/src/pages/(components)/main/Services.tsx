import React, { useState } from "react";
import {
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Search,
  Blocks,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphics Design",
      description:
        "Creating stunning visual identities, logos, and brand materials that make your business stand out in the digital landscape.",
      features: [
        "Logo & Brand Identity",
        "Print Design",
        "Digital Graphics",
        "Marketing Materials",
      ],
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Design",
      description:
        "Modern, responsive websites that convert visitors into customers with exceptional user experience and performance.",
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Landing Pages",
        "E-commerce Sites",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description:
        "Full-stack web and mobile applications built with cutting-edge technologies for optimal performance.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Progressive Web Apps",
        "API Development",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Content",
      description:
        "Engaging content strategies that build communities and drive meaningful interactions with your audience.",
      features: [
        "Content Strategy",
        "Visual Content",
        "Community Management",
        "Analytics & Reporting",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Digital Design & Branding",
      description:
        "Comprehensive digital branding solutions that create memorable and impactful brand experiences.",
      features: [
        "Brand Strategy",
        "Digital Assets",
        "Brand Guidelines",
        "Visual Identity",
      ],
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies that improve your search rankings and drive organic traffic to your business.",
      features: [
        "Technical SEO",
        "Content Optimization",
        "Local SEO",
        "Performance Tracking",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Blockchain Development",
      description:
        "Cutting-edge blockchain solutions including smart contracts, DApps, and custom blockchain implementations.",
      features: [
        "Smart Contracts",
        "DApp Development",
        "Token Creation",
        "Blockchain Integration",
      ],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Web3 Trading Education",
      description:
        "Comprehensive Web3 trading education covering DeFi, NFTs, and cryptocurrency trading strategies.",
      features: [
        "Trading Fundamentals",
        "DeFi Protocols",
        "NFT Markets",
        "Risk Management",
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Solutions
            <span className="block text-blue-600">For Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From creative design to advanced blockchain development, we provide
            end-to-end digital services that transform your vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                activeService === index ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => setActiveService(index)}
            >
              <div
                className={`
                relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                ${
                  activeService === index
                    ? "ring-2 ring-blue-500 shadow-2xl"
                    : ""
                }
              `}
              >
                {/* Icon */}
                <div
                  className={`
                  w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} 
                  flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300
                `}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>

                {/* Active Indicator */}
                {activeService === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
