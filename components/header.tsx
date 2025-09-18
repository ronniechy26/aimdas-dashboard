import { ChartNoAxesCombined, Download } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed top-0 w-full bg-white shadow-lg border-b border-gray-200 z-50">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-wrap w-full items-center justify-between gap-3">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 sm:p-3 rounded-xl shadow-lg flex-shrink-0">
              <ChartNoAxesCombined className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 whitespace-normal sm:truncate">
                Agriculture Infrastructure & Machinery Data Analytics System
              </h1>
              <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600 hidden sm:block whitespace-normal sm:truncate">
                Bureau of Agricultural and Fisheries Engineering
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <button className="flex items-center space-x-1 sm:space-x-2 bg-blue-600 text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Export Data</span>
              <span className="sm:hidden">Export</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}