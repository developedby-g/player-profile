import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export function StatCard({ icon: Icon, title, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600 text-base">{title}</p>
          <p className="font-bold text-xl">{value}</p>
        </div>
      </div>
    </div>
  );
}