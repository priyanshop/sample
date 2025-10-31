import { useCallback, useState } from 'react';
import { Toast, ToastSeverity } from '../provider/ToastContext';

export const useToast = () => {
  const [toast, setToast] = useState<Toast | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((toast: Toast) => {
    setToast(toast);
    setVisible(true);
  }, []);

  const hideToast = useCallback(() => {
    setVisible(false);
  }, []);

  const show = useCallback(
    (message: string, severity: ToastSeverity = 'info', duration = 3000) => {
      showToast({ message, severity, duration });
    },
    [showToast]
  );

  return {
    toast,
    visible,
    showToast,
    hideToast,
    show,
  };
};
