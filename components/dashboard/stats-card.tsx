import { MapPin, Package, TrendingUp, Wrench } from "lucide-react";

const machineryTypes = [
  { name: 'Tractors', value: 17950, color: '#2563eb', icon: '🚜' },
  { name: 'Harvesters', value: 6210, color: '#dc2626', icon: '🌾' },
  { name: 'Plows', value: 11030, color: '#16a34a', icon: '⚔️' },
  { name: 'Seeders', value: 4580, color: '#ca8a04', icon: '🌱' },
  { name: 'Sprayers', value: 3200, color: '#7c3aed', icon: '💨' },
  { name: 'Others', value: 2800, color: '#ea580c', icon: '⚙️' },
];

const totalMachinery = machineryTypes.reduce((sum, item) => sum + item.value, 0);

export default function StatsCard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-blue-100 text-xs sm:text-sm font-medium">Total Machinery</p>
            <p className="text-xl sm:text-3xl font-bold truncate">{totalMachinery.toLocaleString()}</p>
            <p className="text-blue-100 text-xs mt-1">+5.2% from last quarter</p>
          </div>
          <Package className="w-8 sm:w-12 h-8 sm:h-12 text-blue-200 flex-shrink-0" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-green-100 text-xs sm:text-sm font-medium">Active Units</p>
            <p className="text-xl sm:text-3xl font-bold truncate">{Math.round(totalMachinery * 0.87).toLocaleString()}</p>
            <p className="text-green-100 text-xs mt-1">87% operational rate</p>
          </div>
          <TrendingUp className="w-8 sm:w-12 h-8 sm:h-12 text-green-200 flex-shrink-0" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-orange-100 text-xs sm:text-sm font-medium">Under Maintenance</p>
            <p className="text-xl sm:text-3xl font-bold truncate">{Math.round(totalMachinery * 0.08).toLocaleString()}</p>
            <p className="text-orange-100 text-xs mt-1">8% of total fleet</p>
          </div>
          <Wrench className="w-8 sm:w-12 h-8 sm:h-12 text-orange-200 flex-shrink-0" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-purple-100 text-xs sm:text-sm font-medium">Coverage Areas</p>
            <p className="text-xl sm:text-3xl font-bold">17</p>
            <p className="text-purple-100 text-xs mt-1">Regions monitored</p>
          </div>
          <MapPin className="w-8 sm:w-12 h-8 sm:h-12 text-purple-200 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}