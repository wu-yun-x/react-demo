import { useEffect, useRef } from "react";

type ModelDialogProps = {
  isOpen: boolean;
  children: React.ReactNode;
};
export default function ModalDialog({ isOpen, children }: ModelDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    if (dialog) {
      dialog.showModal();
    }
    return () => {
      if (dialog) {
        dialog.close();
      }
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}
