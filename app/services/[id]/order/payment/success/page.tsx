'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Mail, FileText, MessageSquare, ArrowRight, Home } from 'lucide-react';
import { mockServices, mockUsers } from '@/data/mockData';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const orderIdParam = searchParams.get('orderId');
  const serviceIdParam = searchParams.get('serviceId');
  
  // In a real app, this would come from URL params or session
  const orderId = orderIdParam || 'ORD-' + Date.now().toString().slice(-8);
  const service = mockServices.find((s) => s.id === serviceIdParam) || mockServices[0];
  const currentUser = mockUsers[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-secondary mb-4">付款成功！</h1>
            <p className="text-xl text-gray-600">
              感謝您的訂購，訂單已成功建立
            </p>
          </div>

          {/* Order Info Card */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                訂單編號：{orderId}
              </div>
              <p className="text-gray-600">
                我們已將訂單確認信與發票發送至您的電子郵件信箱
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">服務名稱</span>
                <span className="font-semibold text-secondary">{service.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">服務提供者</span>
                <span className="font-semibold text-secondary">{service.providerName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">付款金額</span>
                <span className="text-2xl font-bold text-primary">
                  NT$ {service.price.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">付款時間</span>
                <span className="font-semibold text-secondary">
                  {new Date().toLocaleString('zh-TW')}
                </span>
              </div>
            </div>
          </div>

          {/* Email Notification */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">確認信與發票已發送</h3>
                <p className="text-sm text-blue-800 mb-3">
                  我們已將以下資訊發送至 <strong>{currentUser.email}</strong>：
                </p>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center space-x-2">
                    <FileText size={16} />
                    <span>訂單確認信</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText size={16} />
                    <span>電子發票</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText size={16} />
                    <span>服務詳情與聯絡資訊</span>
                  </li>
                </ul>
                <p className="text-sm text-blue-800 mt-4">
                  請檢查您的收件匣（包含垃圾郵件資料夾），如有任何問題請聯絡我們的客服人員。
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-bold text-secondary mb-6">接下來會發生什麼？</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">服務提供者確認訂單</div>
                  <div className="text-sm text-gray-600">
                    服務提供者將在 24 小時內確認您的訂單
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">開始執行服務</div>
                  <div className="text-sm text-gray-600">
                    確認後，服務提供者將開始為您執行服務
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <div className="font-semibold text-secondary mb-1">服務完成與評價</div>
                  <div className="text-sm text-gray-600">
                    服務完成後，您可以進行評價並獲得點數獎勵
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-start space-x-4">
              <MessageSquare className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-secondary mb-2">需要協助？</h3>
                <p className="text-sm text-gray-600 mb-4">
                  如果您對訂單有任何疑問，我們的客服團隊隨時為您服務
                </p>
                <div className="space-y-2">
                  <Link
                    href="/dashboard/messages"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition font-semibold"
                  >
                    <span>聯絡客服</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard/orders"
              className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center space-x-2"
            >
              <span>查看訂單</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="flex-1 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition flex items-center justify-center space-x-2"
            >
              <Home size={20} />
              <span>繼續瀏覽服務</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

