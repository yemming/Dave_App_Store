import { mockServices } from '@/data/mockData';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { Plus, Edit, Eye, Trash2 } from 'lucide-react';

export default function MyServicesPage() {
  const myServices = mockServices.filter((s) => s.providerId === 'p1');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary mb-2">我的服務</h1>
          <p className="text-gray-600">管理您上架的企業服務</p>
        </div>
        <Link
          href="/dashboard/services/new"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>新增服務</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-secondary mb-1">
            {myServices.length}
          </div>
          <div className="text-gray-600 text-sm">總服務數</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {myServices.filter((s) => s.status === 'active').length}
          </div>
          <div className="text-gray-600 text-sm">服務中</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {myServices.filter((s) => s.status === 'pending').length}
          </div>
          <div className="text-gray-600 text-sm">審核中</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-primary mb-1">
            {myServices.reduce((sum, s) => sum + s.reviewCount, 0)}
          </div>
          <div className="text-gray-600 text-sm">總評價數</div>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary">服務列表</h2>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="all">全部狀態</option>
              <option value="active">服務中</option>
              <option value="pending">審核中</option>
              <option value="inactive">已下架</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-secondary">服務名稱</th>
                <th className="text-left py-4 px-4 font-semibold text-secondary">類別</th>
                <th className="text-left py-4 px-4 font-semibold text-secondary">價格</th>
                <th className="text-left py-4 px-4 font-semibold text-secondary">評分</th>
                <th className="text-left py-4 px-4 font-semibold text-secondary">狀態</th>
                <th className="text-left py-4 px-4 font-semibold text-secondary">操作</th>
              </tr>
            </thead>
            <tbody>
              {myServices.map((service) => (
                <tr key={service.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-secondary">{service.title}</div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{service.category}</td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-primary">
                      NT$ {service.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-gray-500 text-sm">({service.reviewCount})</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        service.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : service.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {service.status === 'active'
                        ? '服務中'
                        : service.status === 'pending'
                        ? '審核中'
                        : '已下架'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/services/${service.id}`}
                        className="p-2 text-gray-600 hover:text-primary transition"
                        title="查看"
                      >
                        <Eye size={18} />
                      </Link>
                      <Link
                        href={`/dashboard/services/${service.id}/edit`}
                        className="p-2 text-gray-600 hover:text-primary transition"
                        title="編輯"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        className="p-2 text-gray-600 hover:text-red-600 transition"
                        title="刪除"
                      >
                        <Trash2 size={18} />
                      </button>
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

