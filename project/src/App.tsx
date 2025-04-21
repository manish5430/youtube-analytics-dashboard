import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { format } from 'date-fns';
import { 
  Users, 
  Eye, 
  ThumbsUp, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  Share2,
  Bell,
  Youtube,
  ChevronRight
} from 'lucide-react';

const viewsData = [
  { date: '2024-03-01', views: 1200, subscribers: 100 },
  { date: '2024-03-02', views: 1800, subscribers: 120 },
  { date: '2024-03-03', views: 2400, subscribers: 150 },
  { date: '2024-03-04', views: 2100, subscribers: 180 },
  { date: '2024-03-05', views: 2800, subscribers: 200 },
  { date: '2024-03-06', views: 3200, subscribers: 220 },
  { date: '2024-03-07', views: 4000, subscribers: 250 },
];

const engagementData = [
  { type: 'Likes', percentage: 65 },
  { type: 'Comments', percentage: 20 },
  { type: 'Shares', percentage: 15 },
];

const StatCard = ({ icon: Icon, title, value, change, color = 'blue' }: { 
  icon: React.ElementType; 
  title: string; 
  value: string; 
  change: string;
  color?: string;
}) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center gap-4">
      <div className={`p-3 bg-${color}-50 rounded-lg`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
      </div>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">{value}</p>
          <span className="text-sm text-green-600">{change}</span>
        </div>
      </div>
    </div>
  </div>
);

const TopVideo = ({ thumbnail, title, views, likes, comments, duration }: {
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  duration: string;
}) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex items-center gap-4">
      <div className="relative w-48 h-28 rounded-lg overflow-hidden">
        <img src={thumbnail} alt={title} className="object-cover w-full h-full" />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" /> {views}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" /> {likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" /> {comments}
          </span>
        </div>
      </div>
    </div>
    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
      View Details
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Youtube className="w-8 h-8 text-red-600" />
            <h1 className="text-2xl font-bold">YouTube Analytics</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Share2 className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={Eye} 
            title="Total Views" 
            value="124.4K" 
            change="+15.3%" 
            color="blue"
          />
          <StatCard 
            icon={Users} 
            title="Subscribers" 
            value="12.5K" 
            change="+25%" 
            color="purple"
          />
          <StatCard 
            icon={Clock} 
            title="Watch Time (hrs)" 
            value="2.5K" 
            change="+10%" 
            color="green"
          />
          <StatCard 
            icon={Bell} 
            title="Engagement" 
            value="89%" 
            change="+5%" 
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Views & Subscriber Growth</h2>
              <select className="px-3 py-2 border rounded-lg text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(date) => format(new Date(date), 'MMM d')}
                  />
                  <YAxis />
                  <Tooltip 
                    labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#2563eb" 
                    fill="#3b82f6" 
                    fillOpacity={0.1}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="subscribers" 
                    stroke="#7c3aed" 
                    fill="#8b5cf6" 
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Engagement Breakdown</h2>
            <div className="space-y-6">
              {engagementData.map((item) => (
                <div key={item.type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.type}</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Top Performing Videos</h2>
            <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-6">
            <TopVideo 
              thumbnail="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60"
              title="Complete JavaScript Course 2024"
              views="12.5K"
              likes="1.2K"
              comments="145"
              duration="15:24"
            />
            <TopVideo 
              thumbnail="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60"
              title="React vs Vue - Which to Choose?"
              views="8.2K"
              likes="945"
              comments="89"
              duration="12:18"
            />
            <TopVideo 
              thumbnail="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60"
              title="Build a Full Stack App"
              views="15.1K"
              likes="2.3K"
              comments="234"
              duration="28:45"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;