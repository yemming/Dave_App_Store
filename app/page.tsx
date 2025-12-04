import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { mockServices } from '@/data/mockData';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featuredServices = mockServices.slice(0, 6);
  const stats = [
    { icon: Users, number: '2.5K+', label: '註冊企業' },
    { icon: TrendingUp, number: '84+', label: '服務提供者' },
    { icon: Star, number: '4.8', label: '平均評分' },
    { icon: Award, number: '12+', label: '服務類別' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  企業服務媒合平台
                </div>
                <h1 className="text-5xl font-bold text-secondary mb-6">
                  專業、可靠、值得信賴的
                  <span className="text-primary">企業服務平台</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  連接優質服務提供者與企業需求，提供完整的服務媒合、評價、點數管理等功能，
                  讓企業服務更簡單、更高效。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center space-x-2"
                  >
                    <span>探索服務</span>
                    <ArrowRight size={20} />
                  </Link>
              <Link
                href="/about"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                了解更多
              </Link>
              <Link
                href="/register"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                註冊會員
              </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {featuredServices.slice(0, 4).map((service) => (
                      <div key={service.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="w-full h-32 rounded mb-2 overflow-hidden relative">
                          <Image
                            src={service.images[0]}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-semibold text-sm text-secondary line-clamp-1">
                          {service.title}
                        </h3>
                        <p className="text-primary font-bold text-sm mt-1">
                          NT$ {service.price.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                我們的成就數據
              </h2>
              <p className="text-gray-600">
                持續成長，為企業提供最優質的服務媒合體驗
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <stat.icon className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                熱門服務
              </div>
              <h2 className="text-4xl font-bold text-secondary mb-4">
                探索優質企業服務
              </h2>
              <p className="text-gray-600 text-lg">
                從財務會計到數位行銷，我們提供全方位的企業服務選擇
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition"
              >
                <span>查看所有服務</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                平台特色
              </div>
              <h2 className="text-4xl font-bold text-secondary mb-4">
                為什麼選擇我們
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">雙向評價系統</h3>
                <p className="text-gray-600">
                  服務提供者與使用者互評，確保服務品質與合作體驗，建立信任機制
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">會員點數系統</h3>
                <p className="text-gray-600">
                  消費累點、評價獲點，點數可兌換服務券或合作夥伴折扣，提升會員黏著度
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">會員等級制度</h3>
                <p className="text-gray-600">
                  依消費金額、評價分數自動分級，VIP 會員享有專屬優惠與優先服務
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              立即開始您的企業服務之旅
            </h2>
            <p className="text-xl mb-8 opacity-90">
              加入我們，體驗專業的服務媒合平台
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                探索服務
              </Link>
              <Link
                href="/dashboard"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                註冊會員
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

