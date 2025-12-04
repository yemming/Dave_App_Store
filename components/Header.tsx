'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, User, LogOut } from 'lucide-react';
import Image from 'next/image';
import { mockUsers } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { isLoggedIn, userRole, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold text-secondary">Dave App Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary hover:text-primary transition">
              首頁
            </Link>
            <Link href="/services" className="text-secondary hover:text-primary transition">
              服務市集
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary transition">
              關於我們
            </Link>
            {isLoggedIn ? (
              <Link href="/dashboard" className="text-secondary hover:text-primary transition">
                會員中心
              </Link>
            ) : (
              <Link href="/register" className="text-secondary hover:text-primary transition">
                會員中心
              </Link>
            )}
            {isLoggedIn && userRole === 'admin' && (
              <Link href="/admin" className="text-secondary hover:text-primary transition">
                後台管理
              </Link>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Phone Button */}
            <a
              href="tel:+1234567890"
              className="hidden md:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              <Phone size={18} />
              <span>+1234567890</span>
            </a>

            {/* User Menu */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden relative border-2 border-gray-200">
                    <Image
                      src={mockUsers[0].avatar}
                      alt={mockUsers[0].name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      會員中心
                    </Link>
                    {userRole === 'admin' && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        後台管理
                      </Link>
                    )}
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition flex items-center space-x-2"
                      onClick={() => {
                        setUserMenuOpen(false);
                        logout();
                      }}
                    >
                      <LogOut size={16} />
                      <span>登出</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-secondary hover:text-primary transition font-semibold"
                >
                  登入
                </Link>
                <Link
                  href="/register"
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
                >
                  註冊
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-secondary" />
              ) : (
                <Menu size={24} className="text-secondary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              首頁
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              服務市集
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              關於我們
            </Link>
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                會員中心
              </Link>
            ) : (
              <Link
                href="/register"
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                會員中心
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

