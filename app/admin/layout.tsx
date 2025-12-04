'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  BarChart3, 
  FileText,
  Settings
} from 'lucide-react';
import Header from '@/components/Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: '儀表板', icon: LayoutDashboard },
    { href: '/admin/services', label: '服務審核', icon: Package },
    { href: '/admin/users', label: '會員管理', icon: Users },
    { href: '/admin/analytics', label: '數據分析', icon: BarChart3 },
    { href: '/admin/content', label: '內容管理', icon: FileText },
    { href: '/admin/settings', label: '系統設定', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-secondary text-white min-h-[calc(100vh-80px)]">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || 
                (item.href !== '/admin' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-white/80 hover:bg-white/10'
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

