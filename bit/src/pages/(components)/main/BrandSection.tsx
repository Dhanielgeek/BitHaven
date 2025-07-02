import React from "react";
import { Star, Quote } from "lucide-react";

const BrandsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp",
      content:
        "DigitalCraft transformed our entire digital presence. Their expertise in both design and development is unmatched. Our conversion rates increased by 300% after the website redesign.",
      rating: 5,
      avatar: "bg-gradient-to-br from-blue-400 to-purple-500",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupX",
      company: "StartupX",
      content:
        "Working with DigitalCraft was a game-changer for our blockchain project. They delivered a sophisticated DeFi platform that exceeded all our expectations. Highly recommended!",
      rating: 5,
      avatar: "bg-gradient-to-br from-green-400 to-blue-500",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, InnovateLab",
      company: "InnovateLab",
      content:
        "The branding and social media strategy they created for us was phenomenal. Our brand recognition increased significantly, and our social engagement rates doubled within 3 months.",
      rating: 5,
      avatar: "bg-gradient-to-br from-pink-400 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brands We Work With */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-700 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">Trusted Partners</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Brands We Work With
          </h2>
        </div>

        {/* Client Testimonials */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Client Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
            <span className="block text-blue-600">About Our Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&lsquo;t just take our word for it. Here&apos;s what our clients
            have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center`}
                >
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Numbers That Speak For Themselves
            </h3>
            <p className="text-lg text-gray-600">
              Our track record of success with clients across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                150+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                98%
              </div>
              <div className="text-gray-600 font-medium">
                Client Satisfaction
              </div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
