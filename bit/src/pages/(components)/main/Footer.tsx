"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BitHaven</h3>
            <p className="text-gray-400 text-sm">
              Your all-in-one digital agency delivering creative, tech, and
              growth solutions to help your brand thrive.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Graphics Design</li>
              <li>Web & App Development</li>
              <li>Social Media Content</li>
              <li>Blockchain Solutions</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Lagos, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> contact@bithaven.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +234 800 000 0000
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} BitHaven. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
