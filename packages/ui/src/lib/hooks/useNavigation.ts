import * as React from 'react';

export interface UseNavigationProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function useNavigation({ isOpen: controlledOpen, onOpenChange }: UseNavigationProps = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const setIsOpen = onOpenChange || setUncontrolledOpen;

  const toggleOpen = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const open = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return {
    isOpen,
    toggleOpen,
    open,
    close,
  };
}
