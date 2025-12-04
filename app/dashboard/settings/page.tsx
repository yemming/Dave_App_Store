import { mockUsers } from '@/data/mockData';
import { Save, User } from 'lucide-react';
import Image from 'next/image';

export default function SettingsPage() {
  const currentUser = mockUsers[0];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">帳號設定</h1>
        <p className="text-gray-600">管理您的個人資料和帳號設定</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-6">
              <User className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-secondary">基本資料</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  defaultValue={currentUser.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  公司名稱
                </label>
                <input
                  type="text"
                  defaultValue={currentUser.companyName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  電子郵件
                </label>
                <input
                  type="email"
                  defaultValue={currentUser.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  電話
                </label>
                <input
                  type="tel"
                  defaultValue={currentUser.phone}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  地址
                </label>
                <input
                  type="text"
                  defaultValue={currentUser.address}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-secondary mb-6">變更密碼</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  目前密碼
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  新密碼
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  確認新密碼
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center space-x-2">
              <Save size={20} />
              <span>儲存變更</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden relative">
                <Image
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-1">
                {currentUser.name}
              </h3>
              <p className="text-gray-600 mb-4">{currentUser.companyName}</p>
              <button className="text-primary hover:text-primary-dark text-sm font-semibold">
                更換頭像
              </button>
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-secondary mb-4">帳號資訊</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-600">會員等級：</span>
                <span className="font-semibold text-secondary capitalize">
                  {currentUser.tierLevel}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-600">總點數：</span>
                <span className="font-semibold text-primary">
                  {currentUser.totalPoints.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-600">角色：</span>
                <span className="font-semibold text-secondary">
                  {currentUser.role === 'consumer' ? '服務使用者' : '服務提供者'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

