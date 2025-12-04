'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Lock, User, Building, Phone, MapPin, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    phone: '',
    address: '',
    role: 'consumer' as 'consumer' | 'provider',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Auto login after registration
    login(formData.role);
    
    // Redirect to dashboard
    router.push('/dashboard');
  };

  const handleOAuthLogin = (provider: 'google' | 'linkedin' | 'facebook') => {
    // Simulate OAuth redirect
    console.log(`Redirecting to ${provider} OAuth...`);
    // In production, this would redirect to OAuth provider
    // For demo, just login as consumer
    login('consumer');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>返回首頁</span>
          </Link>

          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-secondary mb-4">註冊會員</h1>
              <p className="text-gray-600">
                加入我們，開始使用企業服務媒合平台
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleOAuthLogin('google')}
                  className="flex items-center justify-center space-x-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold"
                >
                  <Image
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>使用 Google</span>
                </button>
                <button
                  onClick={() => handleOAuthLogin('linkedin')}
                  className="flex items-center justify-center space-x-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold bg-blue-50 border-blue-300 hover:bg-blue-100"
                >
                  <Image
                    src="https://www.linkedin.com/favicon.ico"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>使用 LinkedIn</span>
                </button>
                <button
                  onClick={() => handleOAuthLogin('facebook')}
                  className="flex items-center justify-center space-x-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold bg-blue-50 border-blue-300 hover:bg-blue-100"
                >
                  <Image
                    src="https://www.facebook.com/favicon.ico"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>使用 Facebook</span>
                </button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">或使用 Email 註冊</span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-4">
                  註冊類型
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, role: 'consumer' }))}
                    className={`p-6 border-2 rounded-lg transition text-left ${
                      formData.role === 'consumer'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-300 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold text-secondary mb-2">服務使用者</div>
                    <div className="text-sm text-gray-600">尋找企業服務的企業客戶</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, role: 'provider' }))}
                    className={`p-6 border-2 rounded-lg transition text-left ${
                      formData.role === 'provider'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-300 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold text-secondary mb-2">服務提供者</div>
                    <div className="text-sm text-gray-600">提供企業服務的專業公司</div>
                  </button>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    公司名稱 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="請輸入公司名稱"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  電子郵件 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    密碼 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      minLength={8}
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="至少 8 個字元"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    確認密碼 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="再次輸入密碼"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    電話 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0912-345-678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    地址
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="台北市信義區..."
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  我同意 <Link href="/terms" className="text-primary hover:underline">服務條款</Link> 及{' '}
                  <Link href="/privacy" className="text-primary hover:underline">隱私政策</Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.password !== formData.confirmPassword}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '註冊中...' : '註冊會員'}
              </button>

              {/* Login Link */}
              <div className="text-center text-sm text-gray-600">
                已經有帳號了？{' '}
                <Link href="/login" className="text-primary hover:underline font-semibold">
                  立即登入
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

