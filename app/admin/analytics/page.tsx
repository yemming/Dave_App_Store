import { TrendingUp, Users, Package, DollarSign, Star, ArrowUpRight } from 'lucide-react';

export default function AdminAnalyticsPage() {
  const metrics = [
    {
      label: '本月新增會員',
      value: '128',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      label: '本月新增服務',
      value: '45',
      change: '+8%',
      icon: Package,
      color: 'bg-green-500',
    },
    {
      label: '本月總營收',
      value: 'NT$ 2.5M',
      change: '+15%',
      icon: DollarSign,
      color: 'bg-yellow-500',
    },
    {
      label: '平均評分',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: 'bg-purple-500',
    },
  ];

  const topServices = [
    { name: '企業財務報表編製服務', orders: 24, revenue: 360000 },
    { name: '數位行銷策略規劃', orders: 18, revenue: 450000 },
    { name: '企業法律顧問服務', orders: 32, revenue: 960000 },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">數據分析</h1>
        <p className="text-gray-600">平台營運數據與分析報表</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <ArrowUpRight size={16} />
                  <span className="text-sm font-semibold">{metric.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary mb-1">
                {metric.value}
              </div>
              <div className="text-gray-600 text-sm">{metric.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-secondary mb-6">熱門服務排行</h2>
          <div className="space-y-4">
            {topServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">#{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{service.name}</div>
                    <div className="text-sm text-gray-600">
                      {service.orders} 筆訂單
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">
                    NT$ {service.revenue.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Chart Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-secondary mb-6">成長趨勢</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <TrendingUp size={48} className="mx-auto mb-4 opacity-50" />
              <p>圖表區域</p>
              <p className="text-sm">（可整合 Chart.js 或 Recharts）</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-secondary mb-6">詳細統計</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">85%</div>
            <div className="text-gray-600">服務完成率</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">92%</div>
            <div className="text-gray-600">客戶滿意度</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">4.2天</div>
            <div className="text-gray-600">平均服務週期</div>
          </div>
        </div>
      </div>
    </div>
  );
}

