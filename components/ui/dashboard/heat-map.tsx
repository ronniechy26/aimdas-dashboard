import { MapPin } from "lucide-react";

const heatMapData = [
  { province: 'Nueva Ecija', density: 95, x: 0, y: 0 },
  { province: 'Isabela', density: 88, x: 1, y: 0 },
  { province: 'Pangasinan', density: 82, x: 2, y: 0 },
  { province: 'Tarlac', density: 76, x: 3, y: 0 },
  { province: 'Bulacan', density: 71, x: 4, y: 0 },
  { province: 'Pampanga', density: 68, x: 0, y: 1 },
  { province: 'Zambales', density: 45, x: 1, y: 1 },
  { province: 'Bataan', density: 52, x: 2, y: 1 },
  { province: 'Rizal', density: 38, x: 3, y: 1 },
  { province: 'Cavite', density: 42, x: 4, y: 1 },
  { province: 'Laguna', density: 58, x: 0, y: 2 },
  { province: 'Quezon', density: 64, x: 1, y: 2 },
  { province: 'Batangas', density: 47, x: 2, y: 2 },
  { province: 'Mindoro', density: 35, x: 3, y: 2 },
  { province: 'Marinduque', density: 28, x: 4, y: 2 },
];

const getHeatMapColor = (density: number) => {
  if (density >= 80) return '#dc2626';
  if (density >= 60) return '#f59e0b';
  if (density >= 40) return '#eab308';
  if (density >= 20) return '#22c55e';
  return '#3b82f6';
};

export default function HeatMap() {
  return (
    <div className="row-span-2 bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Machinery Density Heat Map</h3>
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 sm:gap-2 mb-4">
        {heatMapData.map((item, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg flex flex-col items-center justify-center text-white text-xs font-medium cursor-pointer hover:scale-105 transition-transform"
            style={{ backgroundColor: getHeatMapColor(item.density) }}
            title={`${item.province}: ${item.density} units/km²`}
          >
            <span className="text-center leading-tight text-xs">{item.province.split(' ')[0]}</span>
            <span className="text-xs opacity-90">{item.density}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>Low Density</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-blue-500"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-green-500"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-yellow-500"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-orange-500"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-red-500"></div>
        </div>
        <span>High Density</span>
      </div>
    </div>
  );
}