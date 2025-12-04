import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';

export default function AdminContentPage() {
  const carouselItems = [
    { id: '1', title: '首頁輪播圖 1', image: 'banner1.jpg', status: 'active', order: 1 },
    { id: '2', title: '首頁輪播圖 2', image: 'banner2.jpg', status: 'active', order: 2 },
    { id: '3', title: '首頁輪播圖 3', image: 'banner3.jpg', status: 'inactive', order: 3 },
  ];

  const announcements = [
    { id: '1', title: '平台服務升級公告', category: '系統公告', status: 'published', date: '2024-02-20' },
    { id: '2', title: '新服務上線通知', category: '活動消息', status: 'published', date: '2024-02-18' },
    { id: '3', title: '會員點數規則更新', category: '系統公告', status: 'draft', date: '2024-02-15' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">內容管理</h1>
        <p className="text-gray-600">管理首頁輪播圖、公告消息等內容</p>
      </div>

      {/* Carousel Management */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary">首頁輪播圖管理</h2>
          <Link
            href="/admin/content/carousel/new"
            className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center space-x-2"
          >
            <Plus size={18} />
            <span>新增輪播圖</span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-secondary">標題</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">圖片</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">順序</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">狀態</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">操作</th>
              </tr>
            </thead>
            <tbody>
              {carouselItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-secondary">{item.title}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="w-20 h-12 bg-gray-200 rounded overflow-hidden flex items-center justify-center text-xs text-gray-500">
                      {item.image}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{item.order}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {item.status === 'active' ? '啟用' : '停用'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-primary transition" title="編輯">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 transition" title="刪除">
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

      {/* Announcements Management */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary">公告消息管理</h2>
          <Link
            href="/admin/content/announcements/new"
            className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center space-x-2"
          >
            <Plus size={18} />
            <span>新增公告</span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-secondary">標題</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">類別</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">狀態</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">發佈日期</th>
                <th className="text-left py-4 px-6 font-semibold text-secondary">操作</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement) => (
                <tr key={announcement.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-secondary">{announcement.title}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{announcement.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        announcement.status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {announcement.status === 'published' ? '已發佈' : '草稿'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{announcement.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-primary transition" title="查看">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-primary transition" title="編輯">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 transition" title="刪除">
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

