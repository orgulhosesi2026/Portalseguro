import { useState } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);

  const mostrarToast = (msg, type = 'success') => {
    setToast({ msg, type, id: Date.now() });
    setTimeout(() => setToast(null), 3200);
  };

  return { toast, mostrarToast };
}
