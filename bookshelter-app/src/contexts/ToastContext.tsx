import { createContext, ReactNode, useContext, useState } from 'react';

interface MyComponentProps {
  children: ReactNode;
}

interface Toast {
  message: string;
  type: 'success' | 'error';
}

interface ToastContextType {
  toast: Toast | null;
  showToast: (message: string, type: 'success' | 'error') => void;
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
      {toast && <ToastComponent toast={toast} />}
    </ToastContext.Provider>
  );
};

const ToastComponent: React.FC<{ toast: Toast }> = ({ toast }) => {
  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor:
          toast.type === 'success'
            ? 'green'
            : toast.type === 'error'
              ? 'red'
              : 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: 1000,
      }}
    >
      {toast.message}
    </div>
  );
};
