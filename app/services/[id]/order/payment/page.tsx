'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockServices, mockUsers } from '@/data/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Coins, Tag, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId') || '1';
  const orderId = searchParams.get('orderId') || 'temp-order-123';

  const service = mockServices.find((s) => s.id === serviceId) || mockServices[0];
  const currentUser = mockUsers[0];

  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'line_pay' | null>(null);
  const [usePoints, setUsePoints] = useState(false);
  const [pointsToUse, setPointsToUse] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const maxPointsToUse = Math.min(currentUser.totalPoints, Math.floor(service.price));
  const pointsDiscount = usePoints ? pointsToUse : 0;
  const finalAmount = Math.max(0, service.price - pointsDiscount - promoDiscount);

  const handleApplyPromoCode = () => {
    // Simulate promo code validation
    if (promoCode.toUpperCase() === 'YOUTUBE10') {
      setPromoDiscount(Math.floor(service.price * 0.1));
      setPromoCodeApplied(true);
    } else if (promoCode.toUpperCase() === 'WELCOME20') {
      setPromoDiscount(Math.floor(service.price * 0.2));
      setPromoCodeApplied(true);
    } else if (promoCode) {
      alert('折扣碼無效，請檢查後重試');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('請選擇付款方式');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to success page
    router.push(`/services/${service.id}/order/payment/success?orderId=${orderId}&serviceId=${serviceId}`);
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
            <span className="text-secondary">付款</span>
          </div>

          <Link
            href={`/services/${service.id}/order`}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>返回訂單確認</span>
          </Link>

          <h1 className="text-3xl font-bold text-secondary mb-8">付款</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6">訂單摘要</h2>
              <div className="flex items-start space-x-6 mb-6">
                {service.images[0] && (
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    NT$ {service.price.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Points Redemption */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6 flex items-center space-x-2">
                <Coins className="text-yellow-600" size={24} />
                <span>點數扣抵</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-secondary mb-1">可用點數</div>
                    <div className="text-sm text-gray-600">
                      每 100 點可折抵 NT$ 100
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {currentUser.totalPoints.toLocaleString()}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="usePoints"
                    checked={usePoints}
                    onChange={(e) => {
                      setUsePoints(e.target.checked);
                      if (e.target.checked) {
                        setPointsToUse(Math.min(maxPointsToUse, 1000)); // Default to 1000 points
                      } else {
                        setPointsToUse(0);
                      }
                    }}
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="usePoints" className="flex-1 font-semibold text-secondary cursor-pointer">
                    使用點數扣抵
                  </label>
                </div>

                {usePoints && (
                  <div className="p-4 bg-primary/5 rounded-lg space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        使用點數（最多 {maxPointsToUse.toLocaleString()} 點）
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="number"
                          min="0"
                          max={maxPointsToUse}
                          value={pointsToUse}
                          onChange={(e) => {
                            const value = Math.min(maxPointsToUse, Math.max(0, parseInt(e.target.value) || 0));
                            setPointsToUse(value);
                          }}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                          type="button"
                          onClick={() => setPointsToUse(maxPointsToUse)}
                          className="px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition"
                        >
                          全部使用
                        </button>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        可折抵 NT$ {pointsToUse.toLocaleString()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6 flex items-center space-x-2">
                <Tag className="text-primary" size={24} />
                <span>折扣碼 / 推廣代碼</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="輸入折扣碼或推廣代碼（例如：YOUTUBE10）"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                      setPromoCodeApplied(false);
                      setPromoDiscount(0);
                    }}
                    disabled={promoCodeApplied}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-100"
                  />
                  {!promoCodeApplied ? (
                    <button
                      type="button"
                      onClick={handleApplyPromoCode}
                      className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition"
                    >
                      套用
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setPromoCode('');
                        setPromoCodeApplied(false);
                        setPromoDiscount(0);
                      }}
                      className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition"
                    >
                      移除
                    </button>
                  )}
                </div>
                {promoCodeApplied && (
                  <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-sm text-green-700">
                      折扣碼已套用！已折扣 NT$ {promoDiscount.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="text-sm text-gray-600">
                  <p>• 推廣代碼可用於追蹤行銷來源（例如：YouTuber 推廣）</p>
                  <p>• 折扣碼範例：YOUTUBE10（9折）、WELCOME20（8折）</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6 flex items-center space-x-2">
                <CreditCard className="text-primary" size={24} />
                <span>選擇付款方式</span>
              </h2>
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit_card')}
                  className={`w-full p-6 border-2 rounded-lg transition text-left ${
                    paymentMethod === 'credit_card'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <CreditCard className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary">信用卡付款</div>
                        <div className="text-sm text-gray-600">Visa, Mastercard, JCB</div>
                      </div>
                    </div>
                    {paymentMethod === 'credit_card' && (
                      <CheckCircle className="text-primary" size={24} />
                    )}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('line_pay')}
                  className={`w-full p-6 border-2 rounded-lg transition text-left ${
                    paymentMethod === 'line_pay'
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold text-lg">LINE</span>
                      </div>
                      <div>
                        <div className="font-semibold text-secondary">LINE Pay</div>
                        <div className="text-sm text-gray-600">快速安全的行動支付</div>
                      </div>
                    </div>
                    {paymentMethod === 'line_pay' && (
                      <CheckCircle className="text-primary" size={24} />
                    )}
                  </div>
                </button>
              </div>

              {/* Credit Card Form */}
              {paymentMethod === 'credit_card' && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        卡片號碼
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        持卡人姓名
                      </label>
                      <input
                        type="text"
                        placeholder="卡片上的姓名"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        有效期限
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                       安全碼 (CVV)
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6">費用明細</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">服務費用</span>
                  <span className="font-semibold text-secondary">
                    NT$ {service.price.toLocaleString()}
                  </span>
                </div>
                {pointsDiscount > 0 && (
                  <div className="flex items-center justify-between text-green-600">
                    <span>點數折抵</span>
                    <span className="font-semibold">-NT$ {pointsDiscount.toLocaleString()}</span>
                  </div>
                )}
                {promoDiscount > 0 && (
                  <div className="flex items-center justify-between text-green-600">
                    <span>折扣碼折抵</span>
                    <span className="font-semibold">-NT$ {promoDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-secondary">應付金額</span>
                    <span className="text-3xl font-bold text-primary">
                      NT$ {finalAmount.toLocaleString()}
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
                  <h3 className="font-semibold text-blue-900 mb-2">付款提醒</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>付款完成後，訂單將自動建立並通知服務提供者</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>推廣代碼將用於追蹤行銷來源，不影響付款金額</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <span>使用點數扣抵後，剩餘點數將自動更新</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/services/${service.id}/order`}
                className="flex-1 sm:flex-none px-8 py-4 border-2 border-gray-300 text-secondary rounded-lg font-semibold hover:bg-gray-50 transition text-center"
              >
                返回修改
              </Link>
              <button
                type="submit"
                disabled={!paymentMethod || isProcessing || finalAmount < 0}
                className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>處理中...</span>
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    <span>確認付款</span>
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

