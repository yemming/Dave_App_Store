import { mockServices, mockUsers, mockOrders } from '@/data/mockData';
import { TrendingUp, Users, Package, DollarSign, Star, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const stats = [
    {
      label: '總會員數',
      value: mockUsers.length.toLocaleString(),
      change: '+12',
      icon: Users,
      color: 'bg-blue-500',
      href: '/admin/users',
    },
    {
      label: '總服務數',
      value: mockServices.length.toLocaleString(),
      change: '+5',
      icon: Package,
      color: 'bg-green-500',
      href: '/admin/services',
    },
    {
      label: '總訂單數',
      value: mockOrders.length.toLocaleString(),
      change: '+8',
      icon: DollarSign,
      color: 'bg-yellow-500',
      href: '/admin/orders',
    },
    {
      label: '平均評分',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: 'bg-purple-500',
      href: '/admin/analytics',
    },
  ];

  const recentActivities = [
    { type: 'service', action: '新服務上架', name: '企業財務報表編製服務', time: '2 小時前' },
    { type: 'user', action: '新會員註冊', name: 'ABC 科技公司', time: '5 小時前' },
    { type: 'order', action: '新訂單', name: '訂單 #o3', time: '1 天前' },
    { type: 'review', action: '新評價', name: '5 星評價', time: '2 天前' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">後台管理儀表板</h1>
        <p className="text-gray-600">系統總覽與數據分析</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.label} href={stat.href}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <ArrowUpRight size={16} />
                    <span className="text-sm font-semibold">{stat.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-secondary">最近活動</h2>
            <Link
              href="/admin/activities"
              className="text-primary hover:text-primary-dark text-sm font-semibold"
            >
              查看全部
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-semibold text-secondary mb-1">
                    {activity.action}
                  </div>
                  <div className="text-sm text-gray-600">
                    {activity.name} · {activity.time}
                  </div>
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === 'service'
                      ? 'bg-green-500'
                      : activity.type === 'user'
                      ? 'bg-blue-500'
                      : activity.type === 'order'
                      ? 'bg-yellow-500'
                      : 'bg-purple-500'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-secondary mb-6">快速操作</h2>
          <div className="space-y-3">
            <Link
              href="/admin/services?status=pending"
              className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition text-center"
            >
              審核待處理服務
            </Link>
            <Link
              href="/admin/users?role=provider"
              className="block w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition text-center"
            >
              管理服務提供者
            </Link>
            <Link
              href="/admin/analytics"
              className="block w-full border-2 border-gray-300 text-secondary py-3 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
            >
              查看數據報表
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

