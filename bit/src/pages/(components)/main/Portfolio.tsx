import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Design",
    "Mobile App",
    "Blockchain",
    "Branding",
    "E-commerce",
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Design",
      description:
        "Modern e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
      image: "bg-gradient-to-br from-blue-400 to-purple-600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      live: true,
      github: true,
    },
    {
      id: 2,
      title: "DeFi Trading App",
      category: "Blockchain",
      description:
        "Decentralized finance application for trading cryptocurrencies with real-time analytics.",
      image: "bg-gradient-to-br from-green-400 to-blue-500",
      tags: ["Web3", "Solidity", "React", "Ethereum"],
      live: true,
      github: false,
    },
    {
      id: 3,
      title: "Restaurant Mobile App",
      category: "Mobile App",
      description:
        "Full-featured restaurant app with online ordering, table booking, and loyalty program.",
      image: "bg-gradient-to-br from-orange-400 to-red-500",
      tags: ["React Native", "Firebase", "Payment Gateway"],
      live: true,
      github: true,
    },
    {
      id: 4,
      title: "Tech Startup Branding",
      category: "Branding",
      description:
        "Complete brand identity design including logo, color palette, and marketing materials.",
      image: "bg-gradient-to-br from-purple-400 to-pink-500",
      tags: ["Brand Design", "Logo", "Print Design", "Digital Assets"],
      live: false,
      github: false,
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Design",
      description:
        "Analytics dashboard for SaaS companies with real-time data visualization and reporting.",
      image: "bg-gradient-to-br from-cyan-400 to-blue-600",
      tags: ["Vue.js", "Chart.js", "API Integration", "UI/UX"],
      live: true,
      github: true,
    },
    {
      id: 6,
      title: "NFT Marketplace",
      category: "Blockchain",
      description:
        "Full-featured NFT marketplace with minting, trading, and auction functionality.",
      image: "bg-gradient-to-br from-indigo-400 to-purple-600",
      tags: ["Web3", "IPFS", "Smart Contracts", "React"],
      live: true,
      github: true,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
            <span className="block text-purple-600">That Drive Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful projects that showcase our
            expertise across different industries and technologies.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${
                    activeFilter === filter
                      ? "bg-purple-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200"
            >
              {/* Project Image/Preview */}
              <div
                className={`
                h-48 ${project.image} relative overflow-hidden
                group-hover:scale-105 transition-transform duration-500
              `}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    {project.live && (
                      <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </button>
                    )}
                    {project.github && (
                      <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Github className="w-5 h-5 text-gray-700" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button className="group/btn flex items-center space-x-2 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex space-x-2">
                    {project.live && (
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        title="Live"
                      ></div>
                    )}
                    {project.github && (
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        title="Open Source"
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <span className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
