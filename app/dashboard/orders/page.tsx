import { mockOrders } from '@/data/mockData';
import Link from 'next/link';
import { Eye, MessageSquare, Star } from 'lucide-react';
import { format } from 'date-fns';

export default function OrdersPage() {
  const orders = mockOrders;

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700',
      confirmed: 'bg-blue-100 text-blue-700',
      in_progress: 'bg-purple-100 text-purple-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
    };
    const labels = {
      pending: '待處理',
      confirmed: '已確認',
      in_progress: '進行中',
      completed: '已完成',
      cancelled: '已取消',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">訂單管理</h1>
        <p className="text-gray-600">查看和管理您的所有訂單</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-secondary mb-1">{orders.length}</div>
          <div className="text-gray-600 text-sm">總訂單數</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {orders.filter((o) => o.status === 'pending').length}
          </div>
          <div className="text-gray-600 text-sm">待處理</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {orders.filter((o) => o.status === 'confirmed').length}
          </div>
          <div className="text-gray-600 text-sm">已確認</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {orders.filter((o) => o.status === 'in_progress').length}
          </div>
          <div className="text-gray-600 text-sm">進行中</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {orders.filter((o) => o.status === 'completed').length}
          </div>
          <div className="text-gray-600 text-sm">已完成</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="all">全部狀態</option>
            <option value="pending">待處理</option>
            <option value="confirmed">已確認</option>
            <option value="in_progress">進行中</option>
            <option value="completed">已完成</option>
            <option value="cancelled">已取消</option>
          </select>
          <input
            type="date"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="開始日期"
          />
          <input
            type="date"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="結束日期"
          />
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">
            篩選
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-secondary">訂單編號</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">服務名稱</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">提供者/客戶</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">金額</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">狀態</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">建立日期</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">操作</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="font-mono text-sm text-gray-600">#{order.id}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-semibold text-secondary">{order.serviceTitle}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <div className="font-semibold text-secondary">{order.providerName}</div>
                      <div className="text-gray-500">{order.consumerName}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-primary">
                      NT$ {order.totalAmount.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-6">{getStatusBadge(order.status)}</td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{order.createdAt}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/dashboard/orders/${order.id}`}
                        className="p-2 text-gray-600 hover:text-primary transition"
                        title="查看詳情"
                      >
                        <Eye size={18} />
                      </Link>
                      <button
                        className="p-2 text-gray-600 hover:text-primary transition"
                        title="聯絡"
                      >
                        <MessageSquare size={18} />
                      </button>
                      {order.status === 'completed' && (
                        <button
                          className="p-2 text-gray-600 hover:text-yellow-600 transition"
                          title="評價"
                        >
                          <Star size={18} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

