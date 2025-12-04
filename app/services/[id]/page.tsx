import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RatingStars from '@/components/RatingStars';
import { mockServices, mockReviews, mockUsers } from '@/data/mockData';
import Image from 'next/image';
import { Star, MapPin, Phone, Mail, Calendar, CheckCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = mockServices.find((s) => s.id === params.id) || mockServices[0];
  const provider = mockUsers.find((u) => u.id === service.providerId) || mockUsers[1];
  const reviews = mockReviews.filter((r) => r.revieweeId === service.providerId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">首頁</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary">服務市集</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Service Images */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="relative w-full h-96 bg-gray-200">
                  <Image
                    src={service.images[0] || 'https://via.placeholder.com/800x600'}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {service.category}
                    </div>
                    <h1 className="text-3xl font-bold text-secondary mb-4">
                      {service.title}
                    </h1>
                    <div className="flex items-center space-x-4">
                      <RatingStars rating={service.rating} showNumber />
                      <span className="text-gray-600">
                        ({service.reviewCount} 則評價)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-primary mb-2">
                      NT$ {service.price.toLocaleString()}
                    </div>
                    <div className="text-gray-600">起</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-bold text-secondary mb-4">服務描述</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <h3 className="text-lg font-bold text-secondary mb-3">服務內容包含</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle size={20} className="text-primary" />
                      <span>專業諮詢服務</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle size={20} className="text-primary" />
                      <span>完整文件交付</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle size={20} className="text-primary" />
                      <span>後續支援服務</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-bold text-secondary mb-3">服務標籤</h3>
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

              {/* Reviews Section */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  客戶評價 ({reviews.length})
                </h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
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
                              <h4 className="font-semibold text-secondary">
                                {review.reviewerName}
                              </h4>
                              <p className="text-sm text-gray-500">{review.createdAt}</p>
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Provider Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center space-x-4 mb-6">
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
                    <h3 className="font-bold text-secondary">{provider.companyName}</h3>
                    <div className="flex items-center space-x-1 mt-1">
                      <RatingStars rating={4.8} size={16} />
                      <span className="text-sm text-gray-600">(24)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone size={18} />
                    <span className="text-sm">{provider.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail size={18} />
                    <span className="text-sm">{provider.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={18} />
                    <span className="text-sm">{provider.address}</span>
                  </div>
                </div>
                <Link
                  href={`/providers/${provider.id}`}
                  className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                >
                  查看提供者資料
                </Link>
              </div>

              {/* Order Card */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    NT$ {service.price.toLocaleString()}
                  </div>
                  <div className="text-gray-600">起</div>
                </div>
                <Link
                  href={`/services/${service.id}/order`}
                  className="block w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition mb-4 text-center"
                >
                  立即下單
                </Link>
                <Link
                  href={`/dashboard/messages?userId=${provider.id}`}
                  className="block w-full border-2 border-primary text-primary py-4 rounded-lg font-semibold hover:bg-primary/5 transition flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={20} />
                  <span>聯絡提供者</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

