'use client';

import { Filter, Search } from "lucide-react";
import { useState } from "react";

const regions = ['All Regions', 'NCR', 'CAR', 'Region I', 'Region II', 'Region III', 'Region IV-A'];
const categories = ['All Categories', 'Tractors', 'Harvesters', 'Plows', 'Seeders', 'Sprayers'];

export default function FilterSearch() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100" >
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
        <div className="flex items-center space-x-2 flex-1 min-w-0">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search machinery by ID or location..."
            className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 w-full min-w-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-w-0"
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-w-0"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}