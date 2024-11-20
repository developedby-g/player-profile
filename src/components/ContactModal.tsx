import React from 'react';
import { Mail, Phone, MapPin, Users, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">+91 9412505602</p>
                <p className="font-medium">+91 9411697727</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium break-all">santoshchauhan639@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Academy</p>
                <p className="font-medium">Ashwin Badminton Academy</p>
                <p className="text-sm text-gray-600">Ghaziabad, UP</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">Coach</p>
                <p className="font-medium">Mr. Ashwin Agrawal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}