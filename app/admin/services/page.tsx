import { mockServices } from '@/data/mockData';
import Link from 'next/link';
import { Eye, Check, X, Search } from 'lucide-react';
import RatingStars from '@/components/RatingStars';

export default function AdminServicesPage() {
  const services = mockServices;
  const pendingServices = services.filter((s) => s.status === 'pending');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">服務審核</h1>
        <p className="text-gray-600">審核和管理平台上的所有服務</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-secondary mb-1">{services.length}</div>
          <div className="text-gray-600 text-sm">總服務數</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {pendingServices.length}
          </div>
          <div className="text-gray-600 text-sm">待審核</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {services.filter((s) => s.status === 'active').length}
          </div>
          <div className="text-gray-600 text-sm">已通過</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-red-600 mb-1">
            {services.filter((s) => s.status === 'inactive').length}
          </div>
          <div className="text-gray-600 text-sm">已拒絕</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜尋服務名稱、提供者..."
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="all">全部狀態</option>
            <option value="pending">待審核</option>
            <option value="active">已通過</option>
            <option value="inactive">已拒絕</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="all">全部類別</option>
            <option value="finance">財務會計</option>
            <option value="marketing">行銷推廣</option>
            <option value="legal">法律諮詢</option>
            <option value="it">資訊科技</option>
          </select>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-secondary">服務名稱</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">提供者</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">類別</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">價格</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">評分</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">狀態</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">操作</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-secondary">{service.title}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{service.providerName}</td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{service.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-primary">
                      NT$ {service.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <RatingStars rating={service.rating} size={16} />
                      <span className="text-sm text-gray-600">({service.reviewCount})</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        service.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : service.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {service.status === 'active'
                        ? '已通過'
                        : service.status === 'pending'
                        ? '待審核'
                        : '已拒絕'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/services/${service.id}`}
                        className="p-2 text-gray-600 hover:text-primary transition"
                        title="查看"
                      >
                        <Eye size={18} />
                      </Link>
                      {service.status === 'pending' && (
                        <>
                          <button
                            className="p-2 text-green-600 hover:text-green-700 transition"
                            title="通過"
                          >
                            <Check size={18} />
                          </button>
                          <button
                            className="p-2 text-red-600 hover:text-red-700 transition"
                            title="拒絕"
                          >
                            <X size={18} />
                          </button>
                        </>
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

