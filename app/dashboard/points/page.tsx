import { mockUsers, mockPointsTransactions } from '@/data/mockData';
import { Coins, TrendingUp, Gift, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PointsPage() {
  const currentUser = mockUsers[0];
  const transactions = mockPointsTransactions;

  const stats = [
    {
      label: '總點數',
      value: currentUser.totalPoints.toLocaleString(),
      icon: Coins,
      color: 'bg-yellow-500',
    },
    {
      label: '本月獲得',
      value: '350',
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      label: '可兌換項目',
      value: '12',
      icon: Gift,
      color: 'bg-purple-500',
    },
    {
      label: '即將到期',
      value: '50',
      icon: Clock,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">點數中心</h1>
        <p className="text-gray-600">管理您的點數，兌換優惠與服務</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Points Rules */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-secondary mb-4">點數規則</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">消費累點</div>
                  <div className="text-sm text-gray-600">
                    每消費 NT$ 100 獲得 1 點
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">評價獲點</div>
                  <div className="text-sm text-gray-600">
                    完成評價獲得 50 點
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">推薦獎勵</div>
                  <div className="text-sm text-gray-600">
                    推薦新會員獲得 200 點
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-secondary mb-4">快速兌換</h2>
            <div className="space-y-3">
              <Link
                href="/dashboard/points/redeem"
                className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition text-center"
              >
                兌換服務券
              </Link>
              <Link
                href="/dashboard/points/redeem"
                className="block w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition text-center"
              >
                查看所有優惠
              </Link>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-secondary">點數交易記錄</h2>
              <div className="flex space-x-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                  <option value="all">全部類型</option>
                  <option value="earned">獲得</option>
                  <option value="redeemed">兌換</option>
                  <option value="expired">到期</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-secondary mb-1">
                      {transaction.description}
                    </div>
                    <div className="text-sm text-gray-600">
                      {transaction.createdAt} ·{' '}
                      <span className="capitalize">{transaction.source}</span>
                    </div>
                  </div>
                  <div
                    className={`text-lg font-bold ${
                      transaction.transactionType === 'earned'
                        ? 'text-green-600'
                        : transaction.transactionType === 'redeemed'
                        ? 'text-red-600'
                        : 'text-gray-600'
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
    </div>
  );
}

