import React from 'react';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800',
    caption: 'Tournament Action Shot'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583318-19ff99197f73?auto=format&fit=crop&q=80&w=800',
    caption: 'Practice Session'
  },
  {
    url: 'https://images.unsplash.com/photo-1608215707625-3888c9fd9f23?auto=format&fit=crop&q=80&w=800',
    caption: 'Medal Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583629-faa32b4ac56e?auto=format&fit=crop&q=80&w=800',
    caption: 'Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800',
    caption: 'Tournament Action Shot'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583318-19ff99197f73?auto=format&fit=crop&q=80&w=800',
    caption: 'Practice Session'
  },
  {
    url: 'https://images.unsplash.com/photo-1608215707625-3888c9fd9f23?auto=format&fit=crop&q=80&w=800',
    caption: 'Medal Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583629-faa32b4ac56e?auto=format&fit=crop&q=80&w=800',
    caption: 'Training'
  },
  
];

export function PhotoGallery() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-xl transition-all duration-300"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 text-sm">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}