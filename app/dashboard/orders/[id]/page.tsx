import { mockOrders, mockServices, mockUsers, mockReviews } from '@/data/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  XCircle, 
  MessageSquare, 
  Star,
  FileText,
  Calendar,
  DollarSign,
  User,
  Building
} from 'lucide-react';
import RatingStars from '@/components/RatingStars';

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = mockOrders.find((o) => o.id === params.id) || mockOrders[0];
  const service = mockServices.find((s) => s.id === order.serviceId);
  const consumer = mockUsers.find((u) => u.id === order.consumerId);
  const provider = mockUsers.find((u) => u.id === order.providerId);
  const reviews = mockReviews.filter((r) => r.orderId === order.id);

  const getStatusInfo = (status: string) => {
    const statusMap = {
      pending: {
        label: '待處理',
        color: 'bg-yellow-100 text-yellow-700 border-yellow-300',
        icon: Clock,
        description: '訂單已建立，等待服務提供者確認',
      },
      confirmed: {
        label: '已確認',
        color: 'bg-blue-100 text-blue-700 border-blue-300',
        icon: CheckCircle,
        description: '服務提供者已確認訂單，準備開始服務',
      },
      in_progress: {
        label: '進行中',
        color: 'bg-purple-100 text-purple-700 border-purple-300',
        icon: Clock,
        description: '服務正在執行中',
      },
      completed: {
        label: '已完成',
        color: 'bg-green-100 text-green-700 border-green-300',
        icon: CheckCircle,
        description: '服務已完成，可以進行評價',
      },
      cancelled: {
        label: '已取消',
        color: 'bg-red-100 text-red-700 border-red-300',
        icon: XCircle,
        description: '訂單已取消',
      },
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.pending;
  };

  const statusInfo = getStatusInfo(order.status);
  const StatusIcon = statusInfo.icon;

  const timelineSteps = [
    { status: 'pending', label: '訂單建立', date: order.createdAt },
    { status: 'confirmed', label: '訂單確認', date: order.status !== 'pending' ? order.updatedAt : null },
    { status: 'in_progress', label: '服務進行中', date: order.status === 'in_progress' || order.status === 'completed' ? order.updatedAt : null },
    { status: 'completed', label: '服務完成', date: order.status === 'completed' ? order.updatedAt : null },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/orders"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition mb-4"
        >
          <ArrowLeft size={20} />
          <span>返回訂單列表</span>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-secondary mb-2">訂單詳情</h1>
            <p className="text-gray-600">訂單編號: #{order.id}</p>
          </div>
          <div className={`px-4 py-2 rounded-lg border-2 flex items-center space-x-2 ${statusInfo.color}`}>
            <StatusIcon size={20} />
            <span className="font-semibold">{statusInfo.label}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Status Timeline */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-secondary mb-6">訂單狀態時間線</h2>
            <div className="space-y-4">
              {timelineSteps.map((step, index) => {
                const isCompleted = step.date !== null;
                const isCurrent = 
                  (order.status === 'pending' && step.status === 'pending') ||
                  (order.status === 'confirmed' && step.status === 'confirmed') ||
                  (order.status === 'in_progress' && step.status === 'in_progress') ||
                  (order.status === 'completed' && step.status === 'completed');
                
                return (
                  <div key={step.status} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      isCompleted 
                        ? 'bg-green-100 text-green-700' 
                        : isCurrent
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Clock size={20} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${
                        isCompleted || isCurrent ? 'text-secondary' : 'text-gray-400'
                      }`}>
                        {step.label}
                      </div>
                      {step.date && (
                        <div className="text-sm text-gray-600 mt-1">{step.date}</div>
                      )}
                      {!step.date && !isCurrent && (
                        <div className="text-sm text-gray-400 mt-1">等待中</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Information */}
          {service && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6">服務資訊</h2>
              <div className="flex items-start space-x-6">
                {service.images[0] && (
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <FileText size={16} />
                          <span>{service.category}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <RatingStars rating={service.rating} size={16} />
                          <span>({service.reviewCount})</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary mb-1">
                        NT$ {service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">服務價格</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Section */}
          {reviews.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6">訂單評價</h2>
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
                            <div className="font-semibold text-secondary">{review.reviewerName}</div>
                            <div className="text-sm text-gray-500">
                              {review.reviewType === 'consumer_to_provider' ? '客戶評價提供者' : '提供者評價客戶'} · {review.createdAt}
                            </div>
                          </div>
                          <RatingStars rating={review.rating} />
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {order.status === 'completed' && reviews.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-4">評價服務</h2>
              <p className="text-gray-600 mb-6">
                服務已完成，請為此次服務體驗進行評價，幫助其他用戶做出更好的選擇。
              </p>
              <Link
                href={`/dashboard/reviews?orderId=${order.id}`}
                className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
              >
                <Star size={20} />
                <span>立即評價</span>
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-secondary mb-6">訂單摘要</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">訂單編號</span>
                <span className="font-mono text-sm font-semibold text-secondary">#{order.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">建立日期</span>
                <span className="font-semibold text-secondary">{order.createdAt}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">最後更新</span>
                <span className="font-semibold text-secondary">{order.updatedAt}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">服務金額</span>
                  <span className="font-semibold text-secondary">
                    NT$ {order.totalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold text-primary">
                  <span>總計</span>
                  <span>NT$ {order.totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Information */}
          {provider && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6 flex items-center space-x-2">
                <Building size={20} />
                <span>服務提供者</span>
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src={provider.avatar}
                    alt={provider.companyName}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-secondary">{provider.companyName}</div>
                  <div className="text-sm text-gray-600">{provider.name}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <User size={16} />
                  <span>{provider.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Building size={16} />
                  <span>{provider.address}</span>
                </div>
              </div>
              <Link
                href={`/dashboard/messages?userId=${provider.id}`}
                className="mt-4 block w-full text-center bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center space-x-2"
              >
                <MessageSquare size={18} />
                <span>聯絡提供者</span>
              </Link>
            </div>
          )}

          {/* Consumer Information (if user is provider) */}
          {consumer && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6 flex items-center space-x-2">
                <User size={20} />
                <span>客戶資訊</span>
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src={consumer.avatar}
                    alt={consumer.companyName}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-secondary">{consumer.companyName}</div>
                  <div className="text-sm text-gray-600">{consumer.name}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <User size={16} />
                  <span>{consumer.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Building size={16} />
                  <span>{consumer.address}</span>
                </div>
              </div>
              <Link
                href={`/dashboard/messages?userId=${consumer.id}`}
                className="mt-4 block w-full text-center bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center space-x-2"
              >
                <MessageSquare size={18} />
                <span>聯絡客戶</span>
              </Link>
            </div>
          )}

          {/* Status Description */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <StatusIcon className={`${statusInfo.color.split(' ')[1]} flex-shrink-0 mt-1`} size={20} />
              <div>
                <div className="font-semibold text-secondary mb-1">{statusInfo.label}</div>
                <div className="text-sm text-gray-600">{statusInfo.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

