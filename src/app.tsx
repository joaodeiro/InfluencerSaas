import React from 'react';
import {
  TrendingUp,
  DollarSign,
  Users,
  BarChart2,
  Clock,
  Target,
  Award,
  Share2,
  Zap,
  ChevronUp,
  Bell,
  Search,
  Menu,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">InfluencerPro</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-6">
          {/* Financial Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-bold">$24,892</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-green-600">
                <ChevronUp className="h-4 w-4" />
                <span>32% vs last month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Engagement Rate</p>
                  <p className="text-2xl font-bold">8.74%</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-green-600">
                <ChevronUp className="h-4 w-4" />
                <span>12% vs last month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Campaigns</p>
                  <p className="text-2xl font-bold">14</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-green-600">
                <ChevronUp className="h-4 w-4" />
                <span>4 new this week</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Audience Growth</p>
                  <p className="text-2xl font-bold">+2,847</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm text-green-600">
                <ChevronUp className="h-4 w-4" />
                <span>18% vs last month</span>
              </div>
            </div>
          </div>

          {/* Content Performance & Campaigns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Top Performing Content</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-${item}?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80`}
                      alt="Content thumbnail"
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">Summer Fashion Haul #trending</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <BarChart2 className="h-4 w-4 mr-1" />
                        <span>245k views</span>
                        <Clock className="h-4 w-4 ml-4 mr-1" />
                        <span>Posted 2 days ago</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$1,284</p>
                      <p className="text-sm text-green-600">32% conversion</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Active Campaigns</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-8 w-8 text-indigo-600" />
                        <div className="ml-3">
                          <h3 className="font-medium">Summer Collection Launch</h3>
                          <p className="text-sm text-gray-500">Fashion Brand Partnership</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Audience Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Audience Demographics</h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800">Export Data</button>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Demographics Chart Placeholder</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-6">Monetization Opportunities</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Share2 className="h-8 w-8 text-indigo-600" />
                    <div className="ml-4">
                      <h3 className="font-medium">New Brand Partnership</h3>
                      <p className="text-sm text-gray-500">Estimated value: $5,000</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
