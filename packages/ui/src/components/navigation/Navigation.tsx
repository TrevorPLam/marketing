import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '../button';
import { cn } from '../../lib/utils';
import { useNavigation } from '../../lib/hooks';

export interface NavigationItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  logo?: React.ReactNode;
  className?: string;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ items, logo, className }, ref) => {
    const { isOpen, toggleOpen, close } = useNavigation();

    return (
      <nav
        ref={ref}
        aria-label="Main navigation"
        className={cn('w-full', className)}
      >
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          {logo && <div className="flex-shrink-0">{logo}</div>}
          <ul className="flex items-center gap-6">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between px-4 py-4">
          {logo && <div className="flex-shrink-0">{logo}</div>}
          <Dialog.Root open={isOpen} onOpenChange={toggleOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                onClick={close}
              />
              <Dialog.Content
                className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background z-50 shadow-lg p-6"
                onEscapeKeyDown={close}
                onPointerDownOutside={close}
              >
                <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Mobile navigation menu with links to site sections
                </Dialog.Description>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    {logo && <div className="flex-shrink-0">{logo}</div>}
                    <Dialog.Close asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label="Close navigation menu"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </Button>
                    </Dialog.Close>
                  </div>
                  <ul className="flex flex-col gap-2 mt-4">
                    {items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          aria-label={item.ariaLabel || item.label}
                          onClick={close}
                          className="block text-base font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-4 py-3"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation };
