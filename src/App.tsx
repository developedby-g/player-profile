import React, { useState } from 'react';
import { Trophy, Medal, Star, Phone } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { PhotoGallery } from './components/PhotoGallery';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactModal } from './components/ContactModal';
import { SocialLinks } from './components/SocialLinks';

function App() {

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[500px] bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
            <img
              src="https://images.unsplash.com/photo-1613918431703-aa2b56ffa7a7?auto=format&fit=crop&q=80&w=800"
              alt="Badminton Player"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-4">ABHINAV CHAUHAN</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-4">Junior Badminton Player (U-15)</p>
              
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center px-6 py-3  bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-colors gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Information
              </button>
              <div className="flex items-center justify-center bg-white  rounded-full shadow-lg max-w-[300px] mt-5 py-2">
              <SocialLinks/>
              </div>
          
              
              
            </div>
            
          </div>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 space-y-8 md:space-y-12">
        {/* Rankings Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Rankings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <span className="text-base md:text-base">All India Junior Boys Doubles U-15</span>
              <span className="text-lg md:text-xl font-bold text-blue-600">#23</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <span className="text-basse md:text-base">All India Junior Mixed Doubles U-15</span>
              <span className="text-lg md:text-xl font-bold text-blue-600">#29</span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={Trophy} title="Total Medals" value="6" />
          <StatCard icon={Medal} title="Gold Medals" value="3" />
          <StatCard icon={Medal} title="Bronze Medals" value="3" />
          <StatCard icon={Star} title="Categories" value="U(15-17)" />
        </div>

       

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Special Achievement */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">National Selection 2024</h3>
              <p className="text-sm md:text-base text-blue-100">Selected for National Badminton Championship 2024 (Chennai)</p>
            </div>
            <Trophy className="w-12 h-12 md:w-16 md:h-16 text-yellow-300" />
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
       {/* Photo Carousel */}
        <PhotoGallery  />
      
      
    </div>
  );
}

export default App;