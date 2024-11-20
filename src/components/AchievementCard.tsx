import React from 'react';
import { Medal } from 'lucide-react';

type AchievementCardProps = {
  title: string;
  type: 'gold' | 'bronze';
};

export function AchievementCard({ title, type }: AchievementCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 transform hover:scale-102 transition-all">
      <div className="flex-shrink-0">
        <Medal className={`w-6 h-6 md:w-8 md:h-8 ${type === 'gold' ? 'text-yellow-500' : 'text-orange-700'}`} />
      </div>
      <p className="text-gray-800 text-sm md:text-base flex-grow">{title}</p>
    </div>
  );
}
