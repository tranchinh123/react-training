import { createContext, ReactNode, useContext, useState } from 'react';
import { ToastContextType, Toast } from '../types';
import ToastMessage from '../components/Toast';
interface MyComponentProps {
  children: ReactNode;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Something went wrong');
  }
  return context;
};

export const ToastProvider = ({ children }: MyComponentProps) => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
      {toast && <ToastMessage toast={toast} />}
    </ToastContext.Provider>
  );
};
