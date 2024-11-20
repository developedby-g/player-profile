import React from 'react';
import { Mail, Phone, MapPin, Users } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <p className="text-sm md:text-base">+91 9412505602, +91 9411697727</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <p className="text-sm md:text-base break-all">santoshchauhan639@gmail.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <p className="text-sm md:text-base">Ashwin Badminton Academy, Ghaziabad, UP</p>
        </div>
        <div className="flex items-center space-x-3">
          <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <p className="text-sm md:text-base">Coach: Mr. Ashwin Agrawal</p>
        </div>
      </div>
    </div>
  );
}