'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, ComposedChart } from 'recharts';
import { MapPin, TrendingUp, Package, Wrench, AlertTriangle, Calendar, Activity, BarChart3, Zap, ChartNoAxesCombined } from 'lucide-react';
import Header from '@/components/header';
import FilterSearch from '@/components/filter-search';
import MachineryDistribution from '@/components/ui/dashboard/machinery-distribution';

const AgricultureDashboard = () => {

 

  const machineryTypes = [
    { name: 'Tractors', value: 17950, color: '#2563eb', icon: '🚜' },
    { name: 'Harvesters', value: 6210, color: '#dc2626', icon: '🌾' },
    { name: 'Plows', value: 11030, color: '#16a34a', icon: '⚔️' },
    { name: 'Seeders', value: 4580, color: '#ca8a04', icon: '🌱' },
    { name: 'Sprayers', value: 3200, color: '#7c3aed', icon: '💨' },
    { name: 'Others', value: 2800, color: '#ea580c', icon: '⚙️' },
  ];

  const totalMachinery = machineryTypes.reduce((sum, item) => sum + item.value, 0);

  const utilizationData = [
    { month: 'Jan', utilization: 75 },
    { month: 'Feb', utilization: 68 },
    { month: 'Mar', utilization: 82 },
    { month: 'Apr', utilization: 90 },
    { month: 'May', utilization: 95 },
    { month: 'Jun', utilization: 88 },
  ];

  const maintenanceAlerts = [
    { id: 1, machine: 'Tractor T-2024-001', location: 'Nueva Ecija', issue: 'Scheduled Maintenance Due', priority: 'medium' },
    { id: 2, machine: 'Harvester H-2024-045', location: 'Isabela', issue: 'Engine Overhaul Required', priority: 'high' },
    { id: 3, machine: 'Plow P-2024-078', location: 'Pangasinan', issue: 'Minor Repair Needed', priority: 'low' },
  ];

  // Heat map data for machinery density across provinces
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

  // Age distribution data
  const ageDistributionData = [
    { ageGroup: '0-2 years', count: 12500, percentage: 28 },
    { ageGroup: '3-5 years', count: 15800, percentage: 35 },
    { ageGroup: '6-10 years', count: 11200, percentage: 25 },
    { ageGroup: '11-15 years', count: 4300, percentage: 10 },
    { ageGroup: '15+ years', count: 1970, percentage: 2 },
  ];

  // Seasonal usage patterns
  const seasonalData = [
    { month: 'Jan', tractors: 65, harvesters: 25, plows: 85, irrigation: 45 },
    { month: 'Feb', tractors: 70, harvesters: 30, plows: 90, irrigation: 50 },
    { month: 'Mar', tractors: 85, harvesters: 45, plows: 95, irrigation: 65 },
    { month: 'Apr', tractors: 95, harvesters: 60, plows: 88, irrigation: 80 },
    { month: 'May', tractors: 98, harvesters: 85, plows: 82, irrigation: 95 },
    { month: 'Jun', tractors: 92, harvesters: 95, plows: 75, irrigation: 88 },
    { month: 'Jul', tractors: 88, harvesters: 90, plows: 70, irrigation: 85 },
    { month: 'Aug', tractors: 85, harvesters: 88, plows: 68, irrigation: 82 },
    { month: 'Sep', tractors: 82, harvesters: 85, plows: 72, irrigation: 78 },
    { month: 'Oct', tractors: 78, harvesters: 92, plows: 78, irrigation: 70 },
    { month: 'Nov', tractors: 72, harvesters: 88, plows: 82, irrigation: 62 },
    { month: 'Dec', tractors: 68, harvesters: 45, plows: 88, irrigation: 55 },
  ];

  // Performance metrics over time
  const performanceData = [
    { quarter: 'Q1 2023', efficiency: 78, maintenance: 15, downtime: 7 },
    { quarter: 'Q2 2023', efficiency: 82, maintenance: 12, downtime: 6 },
    { quarter: 'Q3 2023', efficiency: 85, maintenance: 10, downtime: 5 },
    { quarter: 'Q4 2023', efficiency: 87, maintenance: 9, downtime: 4 },
    { quarter: 'Q1 2024', efficiency: 89, maintenance: 8, downtime: 3 },
    { quarter: 'Q2 2024', efficiency: 91, maintenance: 7, downtime: 2 },
  ];

  // Cost analysis data
  const costAnalysisData = [
    { category: 'Purchase', amount: 2850000, percentage: 65 },
    { category: 'Maintenance', amount: 780000, percentage: 18 },
    { category: 'Fuel', amount: 520000, percentage: 12 },
    { category: 'Insurance', amount: 156000, percentage: 4 },
    { category: 'Training', amount: 44000, percentage: 1 },
  ];

  const getHeatMapColor = (density: number) => {
    if (density >= 80) return '#dc2626';
    if (density >= 60) return '#f59e0b';
    if (density >= 40) return '#eab308';
    if (density >= 20) return '#22c55e';
    return '#3b82f6';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Fixed Header */}
      <Header />
      {/* Content with top padding to account for fixed header */}
      <div className="pt-16 sm:pt-20">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 py-6 sm:py-8">

          {/* filter */}
          <FilterSearch />
          {/* Key Metrics */}
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

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Regional Distribution */}

            {/* <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Machinery Distribution by Region</h3> */}
            {/* <div className="w-full h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={machineryByRegion}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="region" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="tractors" fill="#2563eb" name="Tractors" />
                    <Bar dataKey="harvesters" fill="#dc2626" name="Harvesters" />
                    <Bar dataKey="plows" fill="#16a34a" name="Plows" />
                  </BarChart>
                </ResponsiveContainer>
              </div> */}
            <MachineryDistribution />


            {/* Machinery Types */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Machinery Types Distribution</h3>
              <div className="w-full h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={machineryTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {machineryTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {machineryTypes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs sm:text-sm text-gray-600 truncate">{item.name}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-900 flex-shrink-0">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heat Map and Age Distribution */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Heat Map */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
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

            {/* Age Distribution */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Fleet Age Distribution</h3>
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <div className="w-full h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageDistributionData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" tick={{ fontSize: 10 }} />
                    <YAxis dataKey="ageGroup" type="category" tick={{ fontSize: 9 }} width={60} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="count" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-xs sm:text-sm text-gray-600">
                Average fleet age: <span className="font-semibold text-gray-900">4.2 years</span>
              </div>
            </div>
          </div>

          {/* Seasonal Usage and Performance Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Seasonal Usage Patterns */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Seasonal Usage Patterns</h3>
                <Activity className="w-5 h-5 text-green-600" />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={seasonalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="tractors" stackId="1" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="harvesters" stackId="1" stroke="#dc2626" fill="#dc2626" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="plows" stackId="1" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="irrigation" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Performance Trends */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Performance Metrics Trend</h3>
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="efficiency" fill="#22c55e" name="Efficiency %" />
                  <Line type="monotone" dataKey="maintenance" stroke="#f59e0b" strokeWidth={3} name="Maintenance %" />
                  <Line type="monotone" dataKey="downtime" stroke="#dc2626" strokeWidth={3} name="Downtime %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cost Analysis and Utilization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cost Analysis */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Annual Cost Breakdown</h3>
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={costAnalysisData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                  >
                    {costAnalysisData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={machineryTypes[index]?.color || '#8884d8'} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`₱${value.toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-gray-900">₱4.35M</div>
                <div className="text-sm text-gray-600">Total Annual Cost</div>
              </div>
            </div>

            {/* Equipment Utilization Trend */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Equipment Utilization Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={utilizationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="utilization"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ fill: '#2563eb', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#2563eb', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Maintenance Alerts */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Maintenance Alerts</h3>
              <AlertTriangle className="w-5 h-5 text-orange-500" />
            </div>
            <div className="space-y-3">
              {maintenanceAlerts.map((alert) => (
                <div key={alert.id} className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{alert.machine}</p>
                      <p className="text-sm text-gray-600">{alert.location}</p>
                      <p className="text-sm text-orange-700 mt-1">{alert.issue}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.priority === 'high' ? 'bg-red-100 text-red-800' :
                      alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                      {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All Alerts →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureDashboard;