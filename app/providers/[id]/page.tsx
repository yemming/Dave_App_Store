import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RatingStars from '@/components/RatingStars';
import { mockUsers, mockServices, mockReviews } from '@/data/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Building, 
  Award,
  MessageSquare,
  Package,
  TrendingUp
} from 'lucide-react';

export default function ProviderDetailPage({ params }: { params: { id: string } }) {
  const provider = mockUsers.find((u) => u.id === params.id) || mockUsers[1];
  const providerServices = mockServices.filter((s) => s.providerId === provider.id);
  const providerReviews = mockReviews.filter((r) => r.revieweeId === provider.id);
  
  const stats = {
    totalServices: providerServices.length,
    totalOrders: 45,
    averageRating: providerReviews.length > 0 
      ? providerReviews.reduce((sum, r) => sum + r.rating, 0) / providerReviews.length 
      : 4.8,
    totalReviews: providerReviews.length,
  };

  const getTierBadge = (tier: string) => {
    const styles = {
      bronze: 'bg-orange-100 text-orange-700 border-orange-300',
      silver: 'bg-gray-100 text-gray-700 border-gray-300',
      gold: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      platinum: 'bg-blue-100 text-blue-700 border-blue-300',
      vip: 'bg-purple-100 text-purple-700 border-purple-300',
    };
    return styles[tier as keyof typeof styles] || styles.bronze;
  };

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
            <span className="text-secondary">提供者資料</span>
          </div>

          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition mb-6"
            >
              <ArrowLeft size={20} />
              <span>返回服務市集</span>
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                <Image
                  src={provider.avatar}
                  alt={provider.companyName}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <h1 className="text-3xl font-bold text-secondary">{provider.companyName}</h1>
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold border-2 ${getTierBadge(provider.tierLevel)}`}>
                    {provider.tierLevel.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{provider.name} · {provider.role === 'provider' ? '服務提供者' : '服務使用者'}</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <RatingStars rating={stats.averageRating} showNumber />
                    <span className="text-gray-600">({stats.totalReviews} 則評價)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Package size={18} />
                    <span>{stats.totalServices} 個服務</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <TrendingUp size={18} />
                    <span>{stats.totalOrders} 筆訂單</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 w-full md:w-auto">
                <Link
                  href={`/dashboard/messages?userId=${provider.id}`}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={20} />
                  <span>聯絡提供者</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <Package className="text-primary" size={24} />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{stats.totalServices}</div>
              <div className="text-gray-600 text-sm">上架服務</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="text-green-500" size={24} />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{stats.totalOrders}</div>
              <div className="text-gray-600 text-sm">完成訂單</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <Star className="text-yellow-500" size={24} />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{stats.averageRating.toFixed(1)}</div>
              <div className="text-gray-600 text-sm">平均評分</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="text-purple-500" size={24} />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{provider.totalPoints.toLocaleString()}</div>
              <div className="text-gray-600 text-sm">總點數</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">關於提供者</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">公司簡介</h3>
                    <p className="text-gray-600">
                      {provider.companyName} 是一家專業的服務提供公司，致力於為企業客戶提供優質的服務體驗。
                      我們擁有豐富的經驗和專業團隊，確保每一項服務都能達到客戶的期望。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">服務標籤</h3>
                    <div className="flex flex-wrap gap-2">
                      {provider.tags.map((tag) => (
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

              {/* Services Section */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">提供的服務 ({providerServices.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {providerServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative w-full h-40 bg-gray-200">
                        <Image
                          src={service.images[0]}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-secondary mb-2 line-clamp-1">{service.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <RatingStars rating={service.rating} size={16} />
                            <span className="text-sm text-gray-600">({service.reviewCount})</span>
                          </div>
                          <div className="text-lg font-bold text-primary">
                            NT$ {service.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              {providerReviews.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-6">客戶評價 ({providerReviews.length})</h2>
                  <div className="space-y-6">
                    {providerReviews.map((review) => (
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
                                <h4 className="font-semibold text-secondary">{review.reviewerName}</h4>
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
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-secondary mb-6">聯絡資訊</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary flex-shrink-0" size={20} />
                    <span className="text-gray-600">{provider.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary flex-shrink-0" size={20} />
                    <span className="text-gray-600">{provider.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{provider.address}</span>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-secondary mb-6">會員資訊</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">會員等級</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTierBadge(provider.tierLevel).split(' ')[0]} ${getTierBadge(provider.tierLevel).split(' ')[1]}`}>
                      {provider.tierLevel.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">總點數</span>
                    <span className="font-semibold text-primary">{provider.totalPoints.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">註冊時間</span>
                    <span className="text-gray-600 text-sm">2024-01-01</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

