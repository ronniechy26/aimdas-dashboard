'use client';

import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, ComposedChart } from 'recharts';
import { AlertTriangle, Activity, BarChart3, Zap, } from 'lucide-react';
import Header from '@/components/header';
import FilterSearch from '@/components/filter-search';
import MachineryDistribution from '@/components/ui/dashboard/machinery-distribution';
import MachineryTypes from '@/components/ui/dashboard/machinery-types';
import StatsCard from '@/components/ui/dashboard/stats-card';
import HeatMap from '@/components/ui/dashboard/heat-map';
import MachineryProgram from '@/components/ui/dashboard/machinery-program';
import MachineryPerYear from '@/components/ui/dashboard/machinery-per-year';

const AgricultureDashboard = () => {

  const machineryTypes = [
    { name: 'Tractors', value: 17950, color: '#2563eb', icon: '🚜' },
    { name: 'Harvesters', value: 6210, color: '#dc2626', icon: '🌾' },
    { name: 'Plows', value: 11030, color: '#16a34a', icon: '⚔️' },
    { name: 'Seeders', value: 4580, color: '#ca8a04', icon: '🌱' },
    { name: 'Sprayers', value: 3200, color: '#7c3aed', icon: '💨' },
    { name: 'Others', value: 2800, color: '#ea580c', icon: '⚙️' },
  ];


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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="pt-16 sm:pt-20">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 py-6 sm:py-8">

          <FilterSearch />
          <StatsCard />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <MachineryDistribution />
            <MachineryTypes />
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-8">
            <HeatMap />
            <MachineryProgram />
            <MachineryPerYear />
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