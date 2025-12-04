import { mockReviews, mockOrders } from '@/data/mockData';
import RatingStars from '@/components/RatingStars';
import Image from 'next/image';
import { Star, MessageSquare } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = mockReviews;
  const pendingReviews = mockOrders.filter((o) => o.status === 'completed' && !reviews.some((r) => r.orderId === o.id));

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">評價管理</h1>
        <p className="text-gray-600">查看和管理您的服務評價</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-secondary mb-1">
            {reviews.length}
          </div>
          <div className="text-gray-600 text-sm">總評價數</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {pendingReviews.length}
          </div>
          <div className="text-gray-600 text-sm">待評價</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-primary mb-1">4.8</div>
          <div className="text-gray-600 text-sm">平均評分</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {reviews.filter((r) => r.rating >= 4).length}
          </div>
          <div className="text-gray-600 text-sm">好評數 (4+)</div>
        </div>
      </div>

      {/* Pending Reviews */}
      {pendingReviews.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-secondary mb-4">待評價訂單</h2>
          <div className="space-y-4">
            {pendingReviews.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-semibold text-secondary mb-1">
                    {order.serviceTitle}
                  </div>
                  <div className="text-sm text-gray-600">
                    {order.providerName} · 完成於 {order.updatedAt}
                  </div>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center space-x-2">
                  <Star size={18} />
                  <span>立即評價</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-secondary">所有評價</h2>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="all">全部類型</option>
              <option value="received">收到的評價</option>
              <option value="given">給出的評價</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="all">全部評分</option>
              <option value="5">5 星</option>
              <option value="4">4 星</option>
              <option value="3">3 星</option>
              <option value="2">2 星</option>
              <option value="1">1 星</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <Image
                    src={review.reviewerAvatar}
                    alt={review.reviewerName}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-secondary">
                          {review.reviewerName}
                        </h4>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                          {review.reviewType === 'consumer_to_provider'
                            ? '給提供者的評價'
                            : '給客戶的評價'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        訂單 #{review.orderId} · {review.createdAt}
                      </p>
                    </div>
                    <RatingStars rating={review.rating} />
                  </div>
                  <p className="text-gray-600 mb-3">{review.comment}</p>
                  <div className="flex items-center space-x-4">
                    <button className="text-sm text-primary hover:text-primary-dark flex items-center space-x-1">
                      <MessageSquare size={16} />
                      <span>回覆</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

