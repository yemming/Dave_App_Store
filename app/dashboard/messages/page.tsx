'use client';

import { mockMessages, mockUsers } from '@/data/mockData';
import Image from 'next/image';
import { Send, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function MessagesPage() {
  const searchParams = useSearchParams();
  const userIdParam = searchParams.get('userId');
  
  const [selectedConversation, setSelectedConversation] = useState<string | null>('conv1');
  
  // Create conversations for all users (for demo)
  const allConversations = mockUsers
    .filter((u) => u.id !== mockUsers[0].id) // Exclude current user
    .map((user, index) => ({
      id: `conv${index + 1}`,
      participant: user,
      lastMessage: mockMessages[mockMessages.length - 1] || {
        content: '開始對話',
        createdAt: new Date().toISOString(),
      },
      unreadCount: index === 0 ? 1 : 0,
    }));

  const conversations = allConversations.length > 0 ? allConversations : [
    {
      id: 'conv1',
      participant: mockUsers[1],
      lastMessage: mockMessages[mockMessages.length - 1] || {
        content: '開始對話',
        createdAt: new Date().toISOString(),
      },
      unreadCount: 1,
    },
  ];

  // Auto-select conversation if userId is provided
  useEffect(() => {
    if (userIdParam) {
      const conversation = conversations.find((c) => c.participant.id === userIdParam);
      if (conversation) {
        setSelectedConversation(conversation.id);
      } else {
        // Create new conversation if doesn't exist
        const user = mockUsers.find((u) => u.id === userIdParam);
        if (user) {
          setSelectedConversation(`new-${userIdParam}`);
        }
      }
    }
  }, [userIdParam, conversations]);

  const currentMessages = mockMessages.filter((m) => m.conversationId === selectedConversation);
  
  // Get current conversation participant
  const currentConversation = conversations.find((c) => c.id === selectedConversation);
  const currentParticipant = currentConversation?.participant || 
    (userIdParam ? mockUsers.find((u) => u.id === userIdParam) : null) ||
    mockUsers[1];

  return (
    <div className="p-8 h-[calc(100vh-80px)]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">訊息中心</h1>
        <p className="text-gray-600">與服務提供者和客戶溝通</p>
      </div>

      <div className="bg-white rounded-lg shadow-md h-[calc(100vh-200px)] flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="搜尋對話..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full p-4 border-b border-gray-100 hover:bg-gray-50 transition text-left ${
                  selectedConversation === conv.id ? 'bg-primary/5' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                    <Image
                      src={conv.participant.avatar}
                      alt={conv.participant.companyName}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold text-secondary truncate">
                        {conv.participant.companyName}
                      </div>
                      {conv.unreadCount > 0 && (
                        <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 truncate">
                      {conv.lastMessage.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {conv.lastMessage.createdAt}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <Image
                    src={currentParticipant.avatar}
                    alt={currentParticipant.companyName}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-secondary">
                    {currentParticipant.companyName}
                  </div>
                  <div className="text-sm text-gray-600">線上</div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.length > 0 ? (
                  currentMessages.map((message) => {
                    const isOwn = message.senderId === mockUsers[0].id;
                    return (
                      <div
                        key={message.id}
                        className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-md ${
                            isOwn
                              ? 'bg-primary text-white rounded-lg rounded-tr-none'
                              : 'bg-gray-100 text-secondary rounded-lg rounded-tl-none'
                          } p-3`}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="text-sm font-semibold">
                              {message.senderName}
                            </div>
                          </div>
                          <div className="text-sm">{message.content}</div>
                          <div
                            className={`text-xs mt-1 ${
                              isOwn ? 'text-white/70' : 'text-gray-500'
                            }`}
                          >
                            {message.createdAt}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <p className="mb-2">還沒有訊息</p>
                      <p className="text-sm">開始與 {currentParticipant.companyName} 對話吧！</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="輸入訊息..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              選擇一個對話開始聊天
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

