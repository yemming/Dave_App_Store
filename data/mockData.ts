// Hardcode 數據檔案

export interface Service {
  id: string;
  providerId: string;
  providerName: string;
  providerAvatar: string;
  title: string;
  description: string;
  category: string;
  categoryId: string;
  price: number;
  images: string[];
  rating: number;
  reviewCount: number;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  tags: string[];
}

export interface Order {
  id: string;
  consumerId: string;
  consumerName: string;
  providerId: string;
  providerName: string;
  serviceId: string;
  serviceTitle: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  orderId: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar: string;
  revieweeId: string;
  revieweeName: string;
  rating: number;
  comment: string;
  reviewType: 'provider_to_consumer' | 'consumer_to_provider';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  companyName: string;
  avatar: string;
  role: 'provider' | 'consumer' | 'admin';
  tierLevel: 'bronze' | 'silver' | 'gold' | 'platinum' | 'vip';
  totalPoints: number;
  phone: string;
  address: string;
  tags: string[];
}

export interface PointsTransaction {
  id: string;
  userId: string;
  amount: number;
  transactionType: 'earned' | 'redeemed' | 'expired';
  source: 'order' | 'review' | 'referral' | 'upgrade';
  description: string;
  createdAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  readAt: string | null;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'order' | 'review' | 'points' | 'system';
  title: string;
  content: string;
  link: string;
  readAt: string | null;
  createdAt: string;
}

// Mock 數據
export const mockServices: Service[] = [
  {
    id: '1',
    providerId: 'p1',
    providerName: '專業會計服務公司',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    title: '企業財務報表編製服務',
    description: '提供專業的財務報表編製、稅務規劃、會計記帳等服務，協助企業建立完善的財務管理系統。',
    category: '財務會計',
    categoryId: 'finance',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.8,
    reviewCount: 24,
    status: 'active',
    createdAt: '2024-01-15',
    tags: ['會計', '財務', '稅務'],
  },
  {
    id: '2',
    providerId: 'p2',
    providerName: '數位行銷顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
    title: '數位行銷策略規劃',
    description: '協助企業建立完整的數位行銷策略，包含 SEO、社群媒體經營、內容行銷等全方位服務。',
    category: '行銷推廣',
    categoryId: 'marketing',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.9,
    reviewCount: 18,
    status: 'active',
    createdAt: '2024-02-01',
    tags: ['行銷', 'SEO', '社群媒體'],
  },
  {
    id: '3',
    providerId: 'p3',
    providerName: '法律事務所',
    providerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format',
    title: '企業法律顧問服務',
    description: '提供企業法律諮詢、合約審閱、勞資糾紛處理等專業法律服務。',
    category: '法律諮詢',
    categoryId: 'legal',
    price: 30000,
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.7,
    reviewCount: 32,
    status: 'active',
    createdAt: '2024-01-20',
    tags: ['法律', '合約', '諮詢'],
  },
  {
    id: '4',
    providerId: 'p4',
    providerName: 'IT 系統整合公司',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
    title: '企業資訊系統建置',
    description: '協助企業建置 ERP、CRM 等資訊系統，提供系統整合、維護、培訓等服務。',
    category: '資訊科技',
    categoryId: 'it',
    price: 50000,
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.6,
    reviewCount: 15,
    status: 'active',
    createdAt: '2024-02-10',
    tags: ['IT', '系統', 'ERP'],
  },
  {
    id: '5',
    providerId: 'p5',
    providerName: '人力資源顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
    title: '人力資源管理諮詢',
    description: '提供人才招募、薪資設計、績效管理、員工培訓等人力資源管理服務。',
    category: '人力資源',
    categoryId: 'hr',
    price: 20000,
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.5,
    reviewCount: 21,
    status: 'active',
    createdAt: '2024-01-25',
    tags: ['HR', '招募', '培訓'],
  },
  {
    id: '6',
    providerId: 'p6',
    providerName: '品牌設計工作室',
    providerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format',
    title: '品牌視覺設計服務',
    description: '提供企業品牌識別設計、LOGO 設計、包裝設計等專業視覺設計服務。',
    category: '設計創意',
    categoryId: 'design',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.9,
    reviewCount: 28,
    status: 'active',
    createdAt: '2024-02-05',
    tags: ['設計', '品牌', '視覺'],
  },
  {
    id: '7',
    providerId: 'p1',
    providerName: '專業會計服務公司',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    title: '稅務規劃與申報服務',
    description: '專業的稅務規劃、年度申報、節稅策略規劃等完整稅務服務，協助企業合法節稅。',
    category: '財務會計',
    categoryId: 'finance',
    price: 12000,
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.7,
    reviewCount: 19,
    status: 'active',
    createdAt: '2024-02-12',
    tags: ['稅務', '申報', '規劃'],
  },
  {
    id: '8',
    providerId: 'p2',
    providerName: '數位行銷顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
    title: '社群媒體經營管理',
    description: '協助企業經營 Facebook、Instagram、LinkedIn 等社群平台，提升品牌曝光與互動。',
    category: '行銷推廣',
    categoryId: 'marketing',
    price: 18000,
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.6,
    reviewCount: 15,
    status: 'active',
    createdAt: '2024-02-08',
    tags: ['社群', '經營', '管理'],
  },
  {
    id: '9',
    providerId: 'p3',
    providerName: '法律事務所',
    providerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format',
    title: '智慧財產權保護服務',
    description: '提供商標、專利、著作權申請與保護，協助企業建立完整的智慧財產權策略。',
    category: '法律諮詢',
    categoryId: 'legal',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.8,
    reviewCount: 22,
    status: 'active',
    createdAt: '2024-02-03',
    tags: ['智財', '商標', '專利'],
  },
  {
    id: '10',
    providerId: 'p4',
    providerName: 'IT 系統整合公司',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
    title: '雲端服務遷移與建置',
    description: '協助企業將系統遷移至雲端，提供 AWS、Azure、GCP 等雲端平台建置與優化服務。',
    category: '資訊科技',
    categoryId: 'it',
    price: 60000,
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.7,
    reviewCount: 12,
    status: 'active',
    createdAt: '2024-02-15',
    tags: ['雲端', '遷移', 'AWS'],
  },
  {
    id: '11',
    providerId: 'p5',
    providerName: '人力資源顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
    title: '人才招募與面試服務',
    description: '協助企業進行人才招募、履歷篩選、面試安排等完整招募流程服務。',
    category: '人力資源',
    categoryId: 'hr',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.5,
    reviewCount: 18,
    status: 'active',
    createdAt: '2024-02-11',
    tags: ['招募', '面試', '人才'],
  },
  {
    id: '12',
    providerId: 'p6',
    providerName: '品牌設計工作室',
    providerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format',
    title: '網站 UI/UX 設計服務',
    description: '提供企業網站、APP 介面設計，打造優質的使用者體驗與視覺設計。',
    category: '設計創意',
    categoryId: 'design',
    price: 40000,
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.8,
    reviewCount: 25,
    status: 'active',
    createdAt: '2024-02-07',
    tags: ['UI', 'UX', '網站'],
  },
  {
    id: '13',
    providerId: 'p1',
    providerName: '專業會計服務公司',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    title: '會計記帳與帳務處理',
    description: '提供每月會計記帳、帳務處理、發票管理、財務報表編製等完整會計服務。',
    category: '財務會計',
    categoryId: 'finance',
    price: 8000,
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.6,
    reviewCount: 31,
    status: 'active',
    createdAt: '2024-01-28',
    tags: ['記帳', '帳務', '發票'],
  },
  {
    id: '14',
    providerId: 'p2',
    providerName: '數位行銷顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
    title: 'Google 廣告投放優化',
    description: '協助企業進行 Google Ads 廣告投放、關鍵字優化、轉換率提升等服務。',
    category: '行銷推廣',
    categoryId: 'marketing',
    price: 22000,
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.7,
    reviewCount: 20,
    status: 'active',
    createdAt: '2024-02-14',
    tags: ['Google', '廣告', '投放'],
  },
  {
    id: '15',
    providerId: 'p3',
    providerName: '法律事務所',
    providerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format',
    title: '勞動法規諮詢服務',
    description: '提供勞基法、勞資糾紛、勞動契約等相關法律諮詢與處理服務。',
    category: '法律諮詢',
    categoryId: 'legal',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.6,
    reviewCount: 16,
    status: 'active',
    createdAt: '2024-02-09',
    tags: ['勞動', '勞基法', '諮詢'],
  },
  {
    id: '16',
    providerId: 'p4',
    providerName: 'IT 系統整合公司',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
    title: '資訊安全評估與防護',
    description: '提供企業資訊安全評估、弱點掃描、資安防護建置等完整資安服務。',
    category: '資訊科技',
    categoryId: 'it',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.8,
    reviewCount: 14,
    status: 'active',
    createdAt: '2024-02-13',
    tags: ['資安', '防護', '評估'],
  },
  {
    id: '17',
    providerId: 'p5',
    providerName: '人力資源顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
    title: '員工績效管理系統',
    description: '協助企業建立績效管理制度、KPI 設定、績效評估流程等完整績效管理服務。',
    category: '人力資源',
    categoryId: 'hr',
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.6,
    reviewCount: 17,
    status: 'active',
    createdAt: '2024-02-06',
    tags: ['績效', 'KPI', '管理'],
  },
  {
    id: '18',
    providerId: 'p6',
    providerName: '品牌設計工作室',
    providerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format',
    title: '產品包裝設計服務',
    description: '提供產品包裝設計、結構設計、印刷設計等完整包裝設計服務。',
    category: '設計創意',
    categoryId: 'design',
    price: 30000,
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.7,
    reviewCount: 23,
    status: 'active',
    createdAt: '2024-02-04',
    tags: ['包裝', '設計', '印刷'],
  },
  {
    id: '19',
    providerId: 'p1',
    providerName: '專業會計服務公司',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    title: '財務分析與預測服務',
    description: '提供財務數據分析、預算規劃、財務預測等專業財務分析服務。',
    category: '財務會計',
    categoryId: 'finance',
    price: 20000,
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.8,
    reviewCount: 26,
    status: 'active',
    createdAt: '2024-01-30',
    tags: ['分析', '預測', '預算'],
  },
  {
    id: '20',
    providerId: 'p2',
    providerName: '數位行銷顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
    title: '內容行銷策略規劃',
    description: '協助企業建立內容行銷策略、內容規劃、文章撰寫等內容行銷服務。',
    category: '行銷推廣',
    categoryId: 'marketing',
    price: 19000,
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.5,
    reviewCount: 13,
    status: 'active',
    createdAt: '2024-02-16',
    tags: ['內容', '行銷', '策略'],
  },
  {
    id: '21',
    providerId: 'p3',
    providerName: '法律事務所',
    providerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format',
    title: '公司設立與變更登記',
    description: '提供公司設立、變更登記、商業登記等完整公司登記服務。',
    category: '法律諮詢',
    categoryId: 'legal',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.7,
    reviewCount: 29,
    status: 'active',
    createdAt: '2024-01-22',
    tags: ['設立', '登記', '變更'],
  },
  {
    id: '22',
    providerId: 'p4',
    providerName: 'IT 系統整合公司',
    providerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
    title: '資料庫設計與優化',
    description: '提供資料庫設計、效能優化、資料備份等資料庫管理服務。',
    category: '資訊科技',
    categoryId: 'it',
    price: 38000,
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.6,
    reviewCount: 11,
    status: 'active',
    createdAt: '2024-02-17',
    tags: ['資料庫', '優化', '設計'],
  },
  {
    id: '23',
    providerId: 'p5',
    providerName: '人力資源顧問',
    providerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
    title: '員工教育訓練規劃',
    description: '提供員工教育訓練規劃、課程設計、培訓執行等完整教育訓練服務。',
    category: '人力資源',
    categoryId: 'hr',
    price: 22000,
    images: [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.5,
    reviewCount: 19,
    status: 'active',
    createdAt: '2024-02-02',
    tags: ['訓練', '教育', '培訓'],
  },
  {
    id: '24',
    providerId: 'p6',
    providerName: '品牌設計工作室',
    providerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format',
    title: '平面設計與印刷服務',
    description: '提供海報、DM、名片等平面設計與印刷服務，打造專業的視覺形象。',
    category: '設計創意',
    categoryId: 'design',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format',
    ],
    rating: 4.6,
    reviewCount: 27,
    status: 'active',
    createdAt: '2024-01-18',
    tags: ['平面', '設計', '印刷'],
  },
];

export const mockOrders: Order[] = [
  {
    id: 'o1',
    consumerId: 'c1',
    consumerName: 'ABC 科技公司',
    providerId: 'p1',
    providerName: '專業會計服務公司',
    serviceId: '1',
    serviceTitle: '企業財務報表編製服務',
    status: 'completed',
    totalAmount: 15000,
    createdAt: '2024-01-20',
    updatedAt: '2024-02-15',
  },
  {
    id: 'o2',
    consumerId: 'c1',
    consumerName: 'ABC 科技公司',
    providerId: 'p2',
    providerName: '數位行銷顧問',
    serviceId: '2',
    serviceTitle: '數位行銷策略規劃',
    status: 'in_progress',
    totalAmount: 25000,
    createdAt: '2024-02-10',
    updatedAt: '2024-02-20',
  },
  {
    id: 'o3',
    consumerId: 'c2',
    consumerName: 'XYZ 貿易公司',
    providerId: 'p3',
    providerName: '法律事務所',
    serviceId: '3',
    serviceTitle: '企業法律顧問服務',
    status: 'confirmed',
    totalAmount: 30000,
    createdAt: '2024-02-18',
    updatedAt: '2024-02-19',
  },
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    orderId: 'o1',
    reviewerId: 'c1',
    reviewerName: 'ABC 科技公司',
    reviewerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    revieweeId: 'p1',
    revieweeName: '專業會計服務公司',
    rating: 5,
    comment: '服務非常專業，會計師很細心，報表編製得很清楚，非常推薦！',
    reviewType: 'consumer_to_provider',
    createdAt: '2024-02-16',
  },
  {
    id: 'r2',
    orderId: 'o1',
    reviewerId: 'p1',
    reviewerName: '專業會計服務公司',
    reviewerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    revieweeId: 'c1',
    revieweeName: 'ABC 科技公司',
    rating: 5,
    comment: '客戶配合度很高，資料提供完整，溝通順暢，是很棒的合作經驗。',
    reviewType: 'provider_to_consumer',
    createdAt: '2024-02-16',
  },
];

export const mockUsers: User[] = [
  {
    id: 'c1',
    email: 'abc@company.com',
    name: '張三',
    companyName: 'ABC 科技公司',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    role: 'consumer',
    tierLevel: 'gold',
    totalPoints: 8500,
    phone: '0912-345-678',
    address: '台北市信義區信義路五段7號',
    tags: ['科技業', '新創', '高消費'],
  },
  {
    id: 'p1',
    email: 'accounting@service.com',
    name: '李四',
    companyName: '專業會計服務公司',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    role: 'provider',
    tierLevel: 'platinum',
    totalPoints: 12000,
    phone: '0923-456-789',
    address: '台北市大安區復興南路一段',
    tags: ['會計', '財務', '專業服務'],
  },
  {
    id: 'p2',
    email: 'marketing@service.com',
    name: '王五',
    companyName: '數位行銷顧問',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
    role: 'provider',
    tierLevel: 'gold',
    totalPoints: 9500,
    phone: '0934-567-890',
    address: '台北市信義區松仁路',
    tags: ['行銷', '數位', '專業服務'],
  },
  {
    id: 'p3',
    email: 'legal@service.com',
    name: '趙六',
    companyName: '法律事務所',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format',
    role: 'provider',
    tierLevel: 'platinum',
    totalPoints: 15000,
    phone: '0945-678-901',
    address: '台北市大安區敦化南路',
    tags: ['法律', '諮詢', '專業服務'],
  },
];

export const mockPointsTransactions: PointsTransaction[] = [
  {
    id: 'pt1',
    userId: 'c1',
    amount: 150,
    transactionType: 'earned',
    source: 'order',
    description: '完成訂單 #o1 獲得點數',
    createdAt: '2024-02-15',
  },
  {
    id: 'pt2',
    userId: 'c1',
    amount: 50,
    transactionType: 'earned',
    source: 'review',
    description: '完成評價獲得點數',
    createdAt: '2024-02-16',
  },
  {
    id: 'pt3',
    userId: 'c1',
    amount: -100,
    transactionType: 'redeemed',
    source: 'order',
    description: '使用點數兌換服務券',
    createdAt: '2024-02-17',
  },
];

export const mockMessages: Message[] = [
  {
    id: 'm1',
    conversationId: 'conv1',
    senderId: 'p1',
    senderName: '專業會計服務公司',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    content: '您好，感謝您的訂單，我們將在三個工作天內完成財務報表編製。',
    readAt: '2024-02-15T10:30:00',
    createdAt: '2024-02-15T10:00:00',
  },
  {
    id: 'm2',
    conversationId: 'conv1',
    senderId: 'c1',
    senderName: 'ABC 科技公司',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    content: '好的，謝謝您！',
    readAt: null,
    createdAt: '2024-02-15T11:00:00',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    userId: 'c1',
    type: 'order',
    title: '訂單狀態更新',
    content: '您的訂單 #o2 狀態已更新為「進行中」',
    link: '/dashboard/orders/o2',
    readAt: null,
    createdAt: '2024-02-20T09:00:00',
  },
  {
    id: 'n2',
    userId: 'c1',
    type: 'points',
    title: '點數獲得通知',
    content: '您完成了評價，獲得 50 點數！',
    link: '/dashboard/points',
    readAt: '2024-02-16T15:00:00',
    createdAt: '2024-02-16T14:30:00',
  },
];

export const serviceCategories = [
  { id: 'finance', name: '財務會計', icon: '💰' },
  { id: 'marketing', name: '行銷推廣', icon: '📢' },
  { id: 'legal', name: '法律諮詢', icon: '⚖️' },
  { id: 'it', name: '資訊科技', icon: '💻' },
  { id: 'hr', name: '人力資源', icon: '👥' },
  { id: 'design', name: '設計創意', icon: '🎨' },
];

export interface RedeemableItem {
  id: string;
  title: string;
  description: string;
  category: 'service_coupon' | 'discount' | 'partner' | 'meeting_room';
  pointsRequired: number;
  image: string;
  discount?: number;
  discountType?: 'percentage' | 'fixed';
  validUntil?: string;
  stock?: number;
  isAvailable: boolean;
}

export const mockRedeemableItems: RedeemableItem[] = [
  {
    id: 'r1',
    title: '服務券 - NT$ 1,000',
    description: '可於任何服務使用，無使用期限限制',
    category: 'service_coupon',
    pointsRequired: 1000,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format',
    isAvailable: true,
  },
  {
    id: 'r2',
    title: '服務券 - NT$ 5,000',
    description: '可於任何服務使用，無使用期限限制',
    category: 'service_coupon',
    pointsRequired: 5000,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format',
    isAvailable: true,
  },
  {
    id: 'r3',
    title: '會議室使用券 - 2 小時',
    description: '可使用合作夥伴會議室 2 小時',
    category: 'meeting_room',
    pointsRequired: 500,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format',
    isAvailable: true,
    stock: 10,
  },
  {
    id: 'r4',
    title: '合作夥伴咖啡廳 - 9 折優惠',
    description: '指定合作咖啡廳消費享 9 折優惠',
    category: 'partner',
    pointsRequired: 200,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4c7c6f?w=400&h=300&fit=crop&auto=format',
    discount: 10,
    discountType: 'percentage',
    validUntil: '2024-12-31',
    isAvailable: true,
  },
  {
    id: 'r5',
    title: '服務折扣券 - 85 折',
    description: '任何服務消費享 85 折優惠，限用一次',
    category: 'discount',
    pointsRequired: 800,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format',
    discount: 15,
    discountType: 'percentage',
    validUntil: '2024-06-30',
    isAvailable: true,
  },
  {
    id: 'r6',
    title: '服務折扣券 - 9 折',
    description: '任何服務消費享 9 折優惠，限用一次',
    category: 'discount',
    pointsRequired: 500,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format',
    discount: 10,
    discountType: 'percentage',
    validUntil: '2024-06-30',
    isAvailable: true,
  },
  {
    id: 'r7',
    title: '合作夥伴餐廳 - 8 折優惠',
    description: '指定合作餐廳消費享 8 折優惠',
    category: 'partner',
    pointsRequired: 300,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&auto=format',
    discount: 20,
    discountType: 'percentage',
    validUntil: '2024-12-31',
    isAvailable: true,
  },
  {
    id: 'r8',
    title: '會議室使用券 - 4 小時',
    description: '可使用合作夥伴會議室 4 小時',
    category: 'meeting_room',
    pointsRequired: 1000,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format',
    isAvailable: true,
    stock: 5,
  },
];

