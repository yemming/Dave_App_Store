'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockServices, mockUsers } from '@/data/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OrderPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const service = mockServices.find((s) => s.id === params.id) || mockServices[0];
  const provider = mockUsers.find((u) => u.id === service.providerId) || mockUsers[1];
  const currentUser = mockUsers[0]; // Hardcode current user

  const [orderNotes, setOrderNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to create order
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to payment page
    router.push(`/services/${service.id}/order/payment?serviceId=${service.id}&orderId=temp-${Date.now()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">首頁</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary">服務市集</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/${service.id}`} className="hover:text-primary">{service.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary">下單</span>
          </div>

          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>返回服務詳情</span>
          </Link>

          <h1 className="text-3xl font-bold text-secondary mb-8">建立訂單</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Summary */}
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
                  <h3 className="text-2xl font-bold text-secondary mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">服務提供者</div>
                      <div className="font-semibold text-secondary">{provider.companyName}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">服務價格</div>
                      <div className="text-3xl font-bold text-primary">
                        NT$ {service.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6">訂單詳情</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    訂單備註（選填）
                  </label>
                  <textarea
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    rows={4}
                    placeholder="請輸入您對此次服務的特殊需求或備註..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6">費用摘要</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">服務費用</span>
                  <span className="font-semibold text-secondary">
                    NT$ {service.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">手續費</span>
                  <span className="font-semibold text-secondary">NT$ 0</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-secondary">總計</span>
                    <span className="text-3xl font-bold text-primary">
                      NT$ {service.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">重要提醒</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>訂單建立後，服務提供者將在 24 小時內確認訂單</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>服務完成後，您將收到通知並可進行評價</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>如有任何問題，請透過訊息中心聯絡服務提供者</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/services/${service.id}`}
                className="flex-1 sm:flex-none px-8 py-4 border-2 border-gray-300 text-secondary rounded-lg font-semibold hover:bg-gray-50 transition text-center"
              >
                取消
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>處理中...</span>
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    <span>確認下單</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

