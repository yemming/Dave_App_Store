import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              關於我們
            </div>
            <h1 className="text-5xl font-bold text-secondary mb-6">
              用專業服務，連接企業需求
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dave App Store 是一個專業的企業服務媒合平台，致力於為企業提供優質的服務媒合體驗，
              透過雙向評價、點數系統、會員等級等機制，建立信任與品質保證。
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary/5 rounded-lg p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">我們的使命</h3>
                <p className="text-gray-600">
                  建立一個透明、可信賴的企業服務媒合平台，讓優質服務提供者與企業需求完美對接，
                  提升服務品質與企業效率。
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">我們的願景</h3>
                <p className="text-gray-600">
                  成為台灣最專業、最受信賴的企業服務媒合平台，透過科技創新與優質服務，
                  推動企業服務產業的數位轉型。
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">我們的價值</h3>
                <p className="text-gray-600">
                  以客戶為中心，追求卓越品質，建立信任機制，促進產業發展，
                  讓每一筆服務交易都能創造最大價值。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary mb-4">平台特色</h2>
              <p className="text-gray-600 text-lg">
                我們提供完整的服務媒合解決方案
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-bold text-secondary mb-2">雙向評價</h3>
                <p className="text-gray-600 text-sm">
                  服務提供者與使用者互評，確保服務品質
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="font-bold text-secondary mb-2">點數系統</h3>
                <p className="text-gray-600 text-sm">
                  消費累點、評價獲點，點數可兌換服務
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">👑</div>
                <h3 className="font-bold text-secondary mb-2">會員等級</h3>
                <p className="text-gray-600 text-sm">
                  依消費與評價自動分級，VIP 專屬優惠
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="font-bold text-secondary mb-2">即時訊息</h3>
                <p className="text-gray-600 text-sm">
                  平台內建訊息系統，溝通更順暢
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">準備開始了嗎？</h2>
            <p className="text-xl mb-8 opacity-90">
              加入我們，體驗專業的企業服務媒合平台
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                探索服務
              </a>
              <a
                href="/dashboard"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                註冊會員
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

