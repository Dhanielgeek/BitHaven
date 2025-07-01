import React from "react";
import { Target, Users, Award, Lightbulb, Heart, Zap } from "lucide-react";
import Mainlayouts from "./layouts/Mainlayouts";

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that directly impact your business growth and success.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description:
        "We stay at the forefront of technology, bringing cutting-edge solutions to every project.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships based on trust and transparency.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description:
        "We understand the importance of time-to-market and deliver quality work within deadlines.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Creative Director & Founder",
      specialty: "Brand Strategy & Visual Design",
      avatar: "bg-gradient-to-br from-blue-500 to-purple-600",
      experience: "8+ years",
    },
    {
      name: "Sarah Kim",
      role: "Lead Developer",
      specialty: "Full-Stack Development & Web3",
      avatar: "bg-gradient-to-br from-green-500 to-blue-500",
      experience: "6+ years",
    },
    {
      name: "Michael Rodriguez",
      role: "Blockchain Specialist",
      specialty: "Smart Contracts & DeFi",
      avatar: "bg-gradient-to-br from-purple-500 to-pink-500",
      experience: "5+ years",
    },
    {
      name: "Emily Chen",
      role: "Marketing Strategist",
      specialty: "SEO & Content Strategy",
      avatar: "bg-gradient-to-br from-orange-500 to-red-500",
      experience: "7+ years",
    },
  ];

  return (
    <Mainlayouts>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We&lsquo;re Digital Innovators
              <span className="block text-blue-600">
                Passionate About Your Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to bridge the gap between creativity and
              technology, DigitalCraft has grown into a full-service digital
              agency that transforms businesses through innovative digital
              solutions. From startups to enterprises, we&apos;ve helped over
              150 companies achieve their digital goals.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    What started as a small team of passionate designers and
                    developers has evolved into a comprehensive digital agency.
                    We recognized early on that the future of business lies in
                    the seamless integration of design, technology, and
                    strategy.
                  </p>
                  <p>
                    Today, we&lsquo;re at the forefront of emerging technologies
                    like blockchain and Web3, while maintaining our core
                    expertise in traditional digital services. Our diverse skill
                    set allows us to serve clients across various industries and
                    help them navigate the ever-changing digital landscape.
                  </p>
                  <p>
                    We believe that great digital experiences are born from the
                    perfect blend of creativity, technical excellence, and deep
                    understanding of user behavior. This philosophy drives
                    everything we do.
                  </p>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Our Mission
                  </h4>
                  <p className="text-gray-600">
                    To empower businesses with cutting-edge digital solutions
                    that drive growth, enhance user experiences, and create
                    lasting value.
                  </p>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Our Vision
                  </h4>
                  <p className="text-gray-600">
                    To be the leading digital agency that bridges the gap
                    between traditional business and the decentralized future of
                    Web3.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        150+
                      </div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">Projects Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        8+
                      </div>
                      <div className="text-sm text-gray-600">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl opacity-20"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-80 animate-bounce"></div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide our work and define how we interact with
                our clients and each other.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The creative minds and technical experts behind our success.
                Each team member brings unique skills and passion to every
                project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:scale-105"
                >
                  {/* Avatar */}
                  <div
                    className={`w-24 h-24 ${member.avatar} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Info */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.specialty}
                  </p>

                  {/* Experience Badge */}
                  <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <Award className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">
                      {member.experience}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Mainlayouts>
  );
};

export default AboutSection;
