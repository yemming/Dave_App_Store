import { Save, Settings as SettingsIcon } from 'lucide-react';

export default function AdminSettingsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">系統設定</h1>
        <p className="text-gray-600">管理平台系統設定與參數</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Platform Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-6">
              <SettingsIcon className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-secondary">平台基本設定</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  平台名稱
                </label>
                <input
                  type="text"
                  defaultValue="Dave App Store"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  平台描述
                </label>
                <textarea
                  rows={4}
                  defaultValue="專業的企業服務媒合平台"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  聯絡電話
                </label>
                <input
                  type="tel"
                  defaultValue="+1234567890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  聯絡 Email
                </label>
                <input
                  type="email"
                  defaultValue="contact@daveappstore.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Points Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-secondary mb-6">點數系統設定</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  消費累點比例
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">每消費 NT$</span>
                  <input
                    type="number"
                    defaultValue="100"
                    className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-gray-600">獲得</span>
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-gray-600">點</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  評價獲點數
                </label>
                <input
                  type="number"
                  defaultValue="50"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  推薦獎勵點數
                </label>
                <input
                  type="number"
                  defaultValue="200"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition flex items-center space-x-2">
              <Save size={20} />
              <span>儲存設定</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-secondary mb-4">系統資訊</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">系統版本</span>
                <span className="font-semibold text-secondary">v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">最後更新</span>
                <span className="font-semibold text-secondary">2024-02-20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">資料庫狀態</span>
                <span className="font-semibold text-green-600">正常</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

