import { mockUsers, mockOrders, mockServices, mockPointsTransactions } from '@/data/mockData';
import { TrendingUp, Package, ShoppingCart, Coins, Star, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const currentUser = mockUsers[0];
  const recentOrders = mockOrders.slice(0, 5);
  const recentTransactions = mockPointsTransactions.slice(0, 5);

  const stats = [
    {
      label: '我的服務',
      value: '3',
      change: '+1',
      icon: Package,
      color: 'bg-blue-500',
      href: '/dashboard/services',
    },
    {
      label: '進行中訂單',
      value: '2',
      change: '+1',
      icon: ShoppingCart,
      color: 'bg-green-500',
      href: '/dashboard/orders',
    },
    {
      label: '總點數',
      value: currentUser.totalPoints.toLocaleString(),
      change: '+200',
      icon: Coins,
      color: 'bg-yellow-500',
      href: '/dashboard/points',
    },
    {
      label: '平均評分',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: 'bg-purple-500',
      href: '/dashboard/reviews',
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">
          歡迎回來，{currentUser.name}！
        </h1>
        <p className="text-gray-600">
          這是您的會員儀表板，可以查看服務、訂單、評價等資訊
        </p>
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
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-secondary">最近訂單</h2>
            <Link
              href="/dashboard/orders"
              className="text-primary hover:text-primary-dark text-sm font-semibold"
            >
              查看全部
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-semibold text-secondary mb-1">
                    {order.serviceTitle}
                  </div>
                  <div className="text-sm text-gray-600">
                    {order.providerName} · {order.createdAt}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-secondary mb-1">
                    NT$ {order.totalAmount.toLocaleString()}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      order.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'in_progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {order.status === 'completed'
                      ? '已完成'
                      : order.status === 'in_progress'
                      ? '進行中'
                      : order.status === 'confirmed'
                      ? '已確認'
                      : '待處理'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Points Transactions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-secondary">最近點數交易</h2>
            <Link
              href="/dashboard/points"
              className="text-primary hover:text-primary-dark text-sm font-semibold"
            >
              查看全部
            </Link>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-semibold text-secondary mb-1">
                    {transaction.description}
                  </div>
                  <div className="text-sm text-gray-600">{transaction.createdAt}</div>
                </div>
                <div
                  className={`text-lg font-bold ${
                    transaction.transactionType === 'earned'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {transaction.transactionType === 'earned' ? '+' : '-'}
                  {Math.abs(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

