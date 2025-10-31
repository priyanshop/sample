import React from 'react';
import Toast from '../components/Toast';
import { useToast } from '../hooks/useToast';
import ToastContext from './ToastContext';

interface ToastWrapperProps {
  children: React.ReactNode;
}

export const ToastWrapper: React.FC<ToastWrapperProps> = ({ children }) => {
  const { toast, visible, showToast, hideToast } = useToast();

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          visible={visible}
          onDismiss={hideToast}
          severity={toast.severity}
        />
      )}
    </ToastContext.Provider>
  );
};
