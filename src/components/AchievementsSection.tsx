import React, { useState } from 'react';
import { Medal } from 'lucide-react';
import { AchievementCard } from './AchievementCard';

interface Achievement {
  type: 'gold' | 'bronze';
  title: string;
  year: number;
}

const achievements: Achievement[] = [
  // 2024 Achievements
  { type: 'gold', title: 'First UP State Noida Championship (U-15 Boys Doubles)', year: 2024 },
  { type: 'gold', title: 'Second UP State Gorakhpur Championship (U-15 Mixed Doubles)', year: 2024 },
  { type: 'gold', title: 'Third State Kanpur Championship (U-15 Mixed Doubles)', year: 2024 },
  { type: 'bronze', title: 'Yonex-Sunrise All India Sub Junior Ranking Tournament (U-15 Boys Doubles)', year: 2024 },
  { type: 'bronze', title: 'UP State Championship (U-17 Boys Doubles)', year: 2024 },
  { type: 'bronze', title: 'Second UP State Gorakhpur Championship (U-17 Mixed Doubles)', year: 2024 },
  { type: 'bronze', title: 'Third State Kanpur Championship (U-17 Boys Doubles)', year: 2024 },
  
  // Sample 2023 Achievements (you can add real ones)
  // { type: 'gold', title: 'District Championship (U-15 Boys Singles)', year: 2023 },
  // { type: 'bronze', title: 'State Junior Championship (U-15 Mixed Doubles)', year: 2023 },
];

const years = [...new Set(achievements.map(a => a.year))].sort((a, b) => b - a);

export function AchievementsSection() {
  const [selectedYear, setSelectedYear] = useState<number>(years[0]);

  const filteredAchievements = achievements.filter(a => a.year === selectedYear);
  const goldMedals = filteredAchievements.filter(a => a.type === 'gold');
  const bronzeMedals = filteredAchievements.filter(a => a.type === 'bronze');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Tournament Achievements</h2>
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="appearance-none bg-blue-50 text-blue-600 font-semibold px-4 py-2 pr-8 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {goldMedals.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-yellow-600 mb-4">Gold Medals</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {goldMedals.map((achievement, index) => (
              <AchievementCard
                key={index}
                type={achievement.type}
                title={achievement.title}
              />
            ))}
          </div>
        </div>
      )}

      {bronzeMedals.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-orange-700 mb-4">Bronze Medals</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {bronzeMedals.map((achievement, index) => (
              <AchievementCard
                key={index}
                type={achievement.type}
                title={achievement.title}
              />
            ))}
          </div>
        </div>
      )}

      {filteredAchievements.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No achievements found for {selectedYear}
        </div>
      )}
    </div>
  );
}