import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { mockServices, serviceCategories } from '@/data/mockData';
import { Search, Filter } from 'lucide-react';

export default function ServicesPage() {
  const services = mockServices;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              服務市集
            </div>
            <h1 className="text-4xl font-bold text-secondary mb-4">
              探索所有企業服務
            </h1>
            <p className="text-gray-600 text-lg">
              從財務會計到數位行銷，找到最適合您企業的專業服務
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="搜尋服務名稱、提供者或關鍵字..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Category Filter */}
              <div className="md:w-64">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">所有類別</option>
                  {serviceCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Sort */}
              <div className="md:w-48">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="newest">最新上架</option>
                  <option value="rating">最高評分</option>
                  <option value="price_low">價格：低到高</option>
                  <option value="price_high">價格：高到低</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold">
              全部
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                className="px-6 py-2 bg-white border border-gray-300 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              上一頁
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              下一頁
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

