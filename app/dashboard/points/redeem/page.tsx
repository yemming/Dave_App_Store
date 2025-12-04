'use client';

import { mockUsers, mockRedeemableItems } from '@/data/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Coins, Gift, Search, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

export default function RedeemPage() {
  const currentUser = mockUsers[0];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: '全部', icon: Gift },
    { id: 'service_coupon', name: '服務券', icon: Gift },
    { id: 'discount', name: '折扣券', icon: Gift },
    { id: 'partner', name: '合作夥伴', icon: Gift },
    { id: 'meeting_room', name: '會議室', icon: Gift },
  ];

  const filteredItems = mockRedeemableItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && item.isAvailable;
  });

  const canAfford = (pointsRequired: number) => currentUser.totalPoints >= pointsRequired;

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      service_coupon: '服務券',
      discount: '折扣券',
      partner: '合作夥伴',
      meeting_room: '會議室',
    };
    return labels[category] || category;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/points"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition mb-4"
        >
          <ArrowLeft size={20} />
          <span>返回點數中心</span>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-secondary mb-2">點數兌換</h1>
            <p className="text-gray-600">使用點數兌換優惠券與服務</p>
          </div>
          <div className="bg-primary/10 rounded-lg px-6 py-3 flex items-center space-x-3">
            <Coins className="text-primary" size={24} />
            <div>
              <div className="text-sm text-gray-600">可用點數</div>
              <div className="text-2xl font-bold text-primary">
                {currentUser.totalPoints.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜尋優惠項目..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="md:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition flex items-center space-x-2 ${
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-white border-2 border-gray-300 text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              <Icon size={20} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Redeemable Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const affordable = canAfford(item.pointsRequired);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition ${
                  affordable ? 'hover:shadow-xl' : 'opacity-75'
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-48 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                  {item.discount && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.discountType === 'percentage' ? `${item.discount}% OFF` : `-NT$ ${item.discount}`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {item.validUntil && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>有效期限至 {item.validUntil}</span>
                      </div>
                    )}
                    {item.stock !== undefined && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>剩餘數量: {item.stock}</span>
                      </div>
                    )}
                  </div>

                  {/* Points Required */}
                  <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Coins className="text-yellow-600" size={20} />
                      <span className="text-gray-600">需要點數</span>
                    </div>
                    <div className={`text-2xl font-bold ${
                      affordable ? 'text-primary' : 'text-gray-400'
                    }`}>
                      {item.pointsRequired.toLocaleString()}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    disabled={!affordable}
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      affordable
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {affordable ? '立即兌換' : '點數不足'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Gift className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-xl font-semibold text-secondary mb-2">沒有找到可兌換項目</h3>
          <p className="text-gray-600">請嘗試調整搜尋條件或篩選條件</p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-12 bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-secondary mb-6">兌換說明</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-secondary mb-1">服務券使用</div>
              <div className="text-sm text-gray-600">
                服務券可於下單時直接抵扣服務金額，無使用期限限制
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-secondary mb-1">折扣券使用</div>
              <div className="text-sm text-gray-600">
                折扣券限用一次，請在有效期限內使用
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-secondary mb-1">合作夥伴優惠</div>
              <div className="text-sm text-gray-600">
                請於合作夥伴店家消費時出示優惠券，詳情請見優惠說明
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-secondary mb-1">會議室使用</div>
              <div className="text-sm text-gray-600">
                請提前預約，使用時請出示使用券，詳情請聯絡客服
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

