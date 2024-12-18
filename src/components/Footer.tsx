import { ChevronDown,  Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useState } from 'react';


export const Footer = () => {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle newsletter submission
      console.log('Newsletter signup:', email);
    };
  
    return (
      <footer className="bg-[#f8f5f2] pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">About</h3>
              <nav className="space-y-3">
                <a href="/about-us" className="block text-gray-600 hover:text-gray-900">About Us</a>
                <a href="/shipping" className="block text-gray-600 hover:text-gray-900">Shipping & Delivery</a>
                <a href="/returns" className="block text-gray-600 hover:text-gray-900">Returns Centre</a>
                <a href="/exchange" className="block text-gray-600 hover:text-gray-900">Return & Exchange Policy</a>
                <a href="/cancellation" className="block text-gray-600 hover:text-gray-900">Updating & Cancellation Policy</a>
                <a href="/gift-card" className="block text-gray-600 hover:text-gray-900">Gift Card</a>
              </nav>
            </div>
  
            {/* Help Links */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Help</h3>
              <nav className="space-y-3">
                <a href="/team" className="block text-gray-600 hover:text-gray-900">Join our team</a>
                <a href="/blog" className="block text-gray-600 hover:text-gray-900">Blog</a>
                <a href="/contact" className="block text-gray-600 hover:text-gray-900">Contact Us</a>
                <a href="/terms" className="block text-gray-600 hover:text-gray-900">Terms Of Service</a>
                <a href="/privacy" className="block text-gray-600 hover:text-gray-900">Privacy Policy</a>
              </nav>
            </div>
  
            {/* FAQ Section */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="font-medium text-lg mb-6">JOIN THE 1HS FAM</h3>
              <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email here"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
                >
                  →
                </button>
              </form>
              <p className="text-gray-600 text-sm mb-6">
                Be the first to know about our upcoming sales and product launches by
                subscribing to our newsletter!
              </p>
  
              {/* Social Media Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600">
                © 2024, 1 Hair Stop India. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <a href="/powered" className="hover:text-gray-900">Powered by Shopify</a>
                <span>•</span>
                <a href="/refund" className="hover:text-gray-900">Refund policy</a>
                <span>•</span>
                <a href="/privacy" className="hover:text-gray-900">Privacy policy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-gray-900">Terms of service</a>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded">
                  <img src="/api/placeholder/20/20" alt="India flag" className="w-5 h-5" />
                  <span>India</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  