import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const phoneNumber = '254771035437';
  const formattedPhone = '+254 771 035 437';
  
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're here to help! Reach out to us through any of these channels.
          </p>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Phone Number */}
            <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <div>
                <span className="inline-flex p-3 bg-blue-50 text-blue-700 rounded-lg">
                  <FaPhone className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Call Us
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  <a href={`tel:+${phoneNumber}`} className="hover:text-blue-600">
                    {formattedPhone}
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <div>
                <span className="inline-flex p-3 bg-green-50 text-green-700 rounded-lg">
                  <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  WhatsApp
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  <a 
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600"
                  >
                    {formattedPhone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
