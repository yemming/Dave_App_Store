'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: 'consumer' | 'provider' | 'admin';
  login: (role?: 'consumer' | 'provider' | 'admin') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'consumer' | 'provider' | 'admin'>('consumer');
  const router = useRouter();

  // Load auth state from localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      try {
        const auth = JSON.parse(storedAuth);
        setIsLoggedIn(auth.isLoggedIn || false);
        setUserRole(auth.userRole || 'consumer');
      } catch (e) {
        // If parsing fails, default to logged out
        setIsLoggedIn(false);
      }
    }
  }, []);

  const login = (role: 'consumer' | 'provider' | 'admin' = 'consumer') => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem('auth', JSON.stringify({ isLoggedIn: true, userRole: role }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole('consumer');
    localStorage.removeItem('auth');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

