import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoaderContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useGlobalLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error('useGlobalLoader must be used within LoaderProvider');
  return context;
};

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const GlobalLoader = () => {
  const { loading } = useGlobalLoader();
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};
