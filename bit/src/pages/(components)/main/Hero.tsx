import React from "react";
import { ChevronRight, Star, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">
                Trusted by 100+ businesses
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Digital Solutions
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  That Drive Growth
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From stunning graphics to cutting-edge blockchain development
                and Web3 trading education. We transform your digital presence
                into a powerful business asset.
              </p>
            </div>

            {/* Services Preview */}
            <div className="flex flex-wrap gap-3">
              {[
                "Graphics Design",
                "Web Development",
                "Blockchain",
                "SEO",
                "Web3 Trading",
              ].map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <span>View Our Work</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
              {/* Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-t-2xl"></div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-80 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
