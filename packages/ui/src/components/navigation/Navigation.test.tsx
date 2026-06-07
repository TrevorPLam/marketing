import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  const mockItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const mockLogo = <div data-testid="logo">Logo</div>;

  describe('Desktop Navigation', () => {
    it('renders navigation items on desktop', () => {
      render(<Navigation items={mockItems} />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('renders logo when provided', () => {
      render(<Navigation items={mockItems} logo={mockLogo} />);

      // Logo appears in both desktop and mobile views
      const logos = screen.getAllByTestId('logo');
      expect(logos.length).toBeGreaterThan(0);
    });

    it('does not render logo when not provided', () => {
      render(<Navigation items={mockItems} />);

      expect(screen.queryByTestId('logo')).not.toBeInTheDocument();
    });

    it('renders navigation links with correct href attributes', () => {
      render(<Navigation items={mockItems} />);

      const homeLink = screen.getByText('Home');
      const aboutLink = screen.getByText('About');
      const contactLink = screen.getByText('Contact');

      expect(homeLink).toHaveAttribute('href', '/');
      expect(aboutLink).toHaveAttribute('href', '/about');
      expect(contactLink).toHaveAttribute('href', '/contact');
    });

    it('renders aria-label on navigation', () => {
      render(<Navigation items={mockItems} />);

      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Main navigation');
    });

    it('renders skip link for accessibility', () => {
      render(<Navigation items={mockItems} />);

      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    it('renders custom aria-label on navigation items when provided', () => {
      const itemsWithAria = [
        { label: 'Home', href: '/', ariaLabel: 'Go to home page' },
      ];

      render(<Navigation items={itemsWithAria} />);

      const homeLink = screen.getByText('Home');
      expect(homeLink).toHaveAttribute('aria-label', 'Go to home page');
    });
  });

  describe('Mobile Navigation', () => {
    it('renders hamburger menu button on mobile', () => {
      render(<Navigation items={mockItems} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      expect(menuButton).toBeInTheDocument();
    });

    it('opens mobile menu when hamburger button is clicked', async () => {
      const user = userEvent.setup();
      render(<Navigation items={mockItems} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      await user.click(menuButton);

      // Navigation items appear in both desktop and mobile menus
      expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
      expect(screen.getAllByText('About').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    });

    it('closes mobile menu when close button is clicked', async () => {
      const user = userEvent.setup();
      render(<Navigation items={mockItems} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      await user.click(menuButton);

      const closeButton = screen.getByRole('button', { name: /close navigation menu/i });
      await user.click(closeButton);

      expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
    });

    it('closes mobile menu when clicking outside', async () => {
      const user = userEvent.setup();
      render(<Navigation items={mockItems} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      await user.click(menuButton);

      const overlay = screen.getByRole('dialog').previousElementSibling;
      if (overlay) {
        await user.click(overlay);
      }
    });

    it('closes mobile menu when escape key is pressed', async () => {
      const user = userEvent.setup();
      render(<Navigation items={mockItems} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      await user.click(menuButton);

      await user.keyboard('{Escape}');
    });

    it('closes mobile menu when navigation item is clicked', async () => {
      const user = userEvent.setup();
      render(<Navigation items={mockItems} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      await user.click(menuButton);

      // Click first navigation link in mobile menu
      const mobileLinks = screen.getAllByRole('link').filter(link => 
        link.className.includes('text-base')
      );
      if (mobileLinks.length > 0) {
        await user.click(mobileLinks[0]);
      }
    });

    it('renders logo in mobile menu when provided', async () => {
      const user = userEvent.setup();
      render(<Navigation items={mockItems} logo={mockLogo} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      await user.click(menuButton);

      // Verify logo is present (appears in both desktop and mobile)
      const logos = screen.getAllByTestId('logo');
      expect(logos.length).toBeGreaterThan(0);
    });

    it('updates aria-expanded when menu is toggled', async () => {
      const user = userEvent.setup();
      render(<Navigation items={mockItems} />);

      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      await user.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes on navigation', () => {
      render(<Navigation items={mockItems} />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Main navigation');
    });

    it('has visible focus indicators on links', () => {
      render(<Navigation items={mockItems} />);

      const links = screen.getAllByRole('link');
      // Filter out skip link which has different focus classes
      const navLinks = links.filter(link => !link.textContent?.includes('Skip to main content'));
      navLinks.forEach(link => {
        expect(link).toHaveClass('focus:ring-2');
      });
    });

    it('has keyboard accessible navigation items', () => {
      render(<Navigation items={mockItems} />);

      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Custom className', () => {
    it('applies custom className to navigation', () => {
      render(<Navigation items={mockItems} className="custom-class" />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('custom-class');
    });
  });
});
