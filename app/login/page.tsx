'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Auto login after successful authentication
    // In production, this would get the user role from the API response
    login('consumer');
    
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
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>返回首頁</span>
          </Link>

          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-secondary mb-4">會員登入</h1>
              <p className="text-gray-600">
                歡迎回來！請登入您的帳號
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => handleOAuthLogin('google')}
                  className="flex items-center justify-center space-x-3 px-6 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold w-full"
                >
                  <Image
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>使用 Google 登入</span>
                </button>
                <button
                  onClick={() => handleOAuthLogin('linkedin')}
                  className="flex items-center justify-center space-x-3 px-6 py-4 border-2 border-blue-300 rounded-lg hover:bg-blue-50 transition font-semibold w-full bg-blue-50"
                >
                  <Image
                    src="https://www.linkedin.com/favicon.ico"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>使用 LinkedIn 登入</span>
                </button>
                <button
                  onClick={() => handleOAuthLogin('facebook')}
                  className="flex items-center justify-center space-x-3 px-6 py-4 border-2 border-blue-300 rounded-lg hover:bg-blue-50 transition font-semibold w-full bg-blue-50"
                >
                  <Image
                    src="https://www.facebook.com/favicon.ico"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span>使用 Facebook 登入</span>
                </button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">或使用 Email 登入</span>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  電子郵件
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

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  密碼
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="請輸入密碼"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    記住我
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  忘記密碼？
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '登入中...' : '登入'}
              </button>

              <div className="text-center text-sm text-gray-600">
                還沒有帳號？{' '}
                <Link href="/register" className="text-primary hover:underline font-semibold">
                  立即註冊
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

