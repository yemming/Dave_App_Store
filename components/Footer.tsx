import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-secondary">Dave App Store</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              專業的企業服務媒合平台，提供企業服務上架、評價、點數管理等完整功能。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-secondary mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition text-sm">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition text-sm">
                  服務市集
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-primary transition text-sm">
                  會員中心
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition text-sm">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-secondary mb-4">服務類別</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services?category=finance" className="text-gray-600 hover:text-primary transition text-sm">
                  財務會計
                </Link>
              </li>
              <li>
                <Link href="/services?category=marketing" className="text-gray-600 hover:text-primary transition text-sm">
                  行銷推廣
                </Link>
              </li>
              <li>
                <Link href="/services?category=legal" className="text-gray-600 hover:text-primary transition text-sm">
                  法律諮詢
                </Link>
              </li>
              <li>
                <Link href="/services?category=it" className="text-gray-600 hover:text-primary transition text-sm">
                  資訊科技
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-secondary mb-4">訂閱電子報</h3>
            <p className="text-gray-600 text-sm mb-4">
              訂閱我們的電子報，獲取最新的服務資訊與優惠訊息。
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="輸入您的 Email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-primary-dark transition">
                訂閱
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2025 Dave App Store. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-600 hover:text-primary transition text-sm">
              服務條款
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition text-sm">
              隱私政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

