'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Star, 
  Coins, 
  MessageSquare, 
  Settings,
  Bell
} from 'lucide-react';
import Header from '@/components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: '儀表板', icon: LayoutDashboard },
    { href: '/dashboard/services', label: '我的服務', icon: Package },
    { href: '/dashboard/orders', label: '訂單管理', icon: ShoppingCart },
    { href: '/dashboard/reviews', label: '評價管理', icon: Star },
    { href: '/dashboard/points', label: '點數中心', icon: Coins },
    { href: '/dashboard/messages', label: '訊息中心', icon: MessageSquare },
    { href: '/dashboard/settings', label: '帳號設定', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-80px)]">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || 
                (item.href !== '/dashboard' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}

