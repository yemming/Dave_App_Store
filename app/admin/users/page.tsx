import { mockUsers } from '@/data/mockData';
import Link from 'next/link';
import { Eye, Search, Filter } from 'lucide-react';
import Image from 'next/image';

export default function AdminUsersPage() {
  const users = mockUsers;

  const getRoleBadge = (role: string) => {
    const styles = {
      provider: 'bg-blue-100 text-blue-700',
      consumer: 'bg-green-100 text-green-700',
      admin: 'bg-purple-100 text-purple-700',
    };
    const labels = {
      provider: '服務提供者',
      consumer: '服務使用者',
      admin: '管理員',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm ${styles[role as keyof typeof styles]}`}>
        {labels[role as keyof typeof labels]}
      </span>
    );
  };

  const getTierBadge = (tier: string) => {
    const styles = {
      bronze: 'bg-orange-100 text-orange-700',
      silver: 'bg-gray-100 text-gray-700',
      gold: 'bg-yellow-100 text-yellow-700',
      platinum: 'bg-blue-100 text-blue-700',
      vip: 'bg-purple-100 text-purple-700',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm ${styles[tier as keyof typeof styles]}`}>
        {tier.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">會員管理</h1>
        <p className="text-gray-600">管理平台上的所有會員</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-secondary mb-1">{users.length}</div>
          <div className="text-gray-600 text-sm">總會員數</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {users.filter((u) => u.role === 'provider').length}
          </div>
          <div className="text-gray-600 text-sm">服務提供者</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {users.filter((u) => u.role === 'consumer').length}
          </div>
          <div className="text-gray-600 text-sm">服務使用者</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {users.filter((u) => u.tierLevel === 'vip' || u.tierLevel === 'platinum').length}
          </div>
          <div className="text-gray-600 text-sm">VIP/白金會員</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜尋會員名稱、公司、Email..."
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="all">全部角色</option>
            <option value="provider">服務提供者</option>
            <option value="consumer">服務使用者</option>
            <option value="admin">管理員</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="all">全部等級</option>
            <option value="vip">VIP</option>
            <option value="platinum">白金</option>
            <option value="gold">黃金</option>
            <option value="silver">銀級</option>
            <option value="bronze">銅級</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-secondary">會員</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">公司/姓名</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">Email</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">角色</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">等級</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">點數</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">操作</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-600">{user.companyName}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-600">{user.email}</div>
                  </td>
                  <td className="py-4 px-6">{getRoleBadge(user.role)}</td>
                  <td className="py-4 px-6">{getTierBadge(user.tierLevel)}</td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-primary">
                      {user.totalPoints.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="p-2 text-gray-600 hover:text-primary transition"
                      title="查看詳情"
                    >
                      <Eye size={18} />
                    </Link>
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

