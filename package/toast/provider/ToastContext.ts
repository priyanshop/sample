import React from 'react';

export type ToastSeverity = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
  message: string;
  severity?: ToastSeverity;
  duration?: number;
}

export interface ToastContextType {
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}

const ToastContext = React.createContext<ToastContextType>({
  showToast: () => {},
  hideToast: () => {},
});

export default ToastContext;
