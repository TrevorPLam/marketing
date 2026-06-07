import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders a footer element with role="contentinfo"', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer.tagName).toBe('FOOTER');
  });

  it('renders with default copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(new RegExp(`© ${currentYear} Your Company. All rights reserved.`));
    expect(copyright).toBeInTheDocument();
  });

  it('renders with custom copyright text', () => {
    render(<Footer copyright="Custom copyright text" />);
    const copyright = screen.getByText('Custom copyright text');
    expect(copyright).toBeInTheDocument();
  });

  it('renders footer columns with titles and links', () => {
    const columns = [
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Careers', href: '/careers' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '/blog' },
          { label: 'Docs', href: '/docs' },
        ],
      },
    ];

    render(<Footer columns={columns} />);

    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Careers' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Docs' })).toBeInTheDocument();
  });

  it('renders social links section', () => {
    const socialLinks = [
      { platform: 'Twitter', href: 'https://twitter.com' },
      { platform: 'GitHub', href: 'https://github.com' },
    ];

    render(<Footer socialLinks={socialLinks} />);

    expect(screen.getByText('Follow Us')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Visit our Twitter' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Visit our GitHub' })).toBeInTheDocument();
  });

  it('renders social links with custom ariaLabel', () => {
    const socialLinks = [
      { platform: 'Twitter', href: 'https://twitter.com', ariaLabel: 'Follow us on Twitter' },
    ];

    render(<Footer socialLinks={socialLinks} />);

    const link = screen.getByRole('link', { name: 'Follow us on Twitter' });
    expect(link).toBeInTheDocument();
  });

  it('renders social links with custom icon', () => {
    const customIcon = <span data-testid="custom-icon">Icon</span>;
    const socialLinks = [
      { platform: 'Twitter', href: 'https://twitter.com', icon: customIcon },
    ];

    render(<Footer socialLinks={socialLinks} />);

    const icon = screen.getByTestId('custom-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders footer links with custom ariaLabel', () => {
    const columns = [
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about', ariaLabel: 'Learn about our company' },
        ],
      },
    ];

    render(<Footer columns={columns} />);

    const link = screen.getByRole('link', { name: 'Learn about our company' });
    expect(link).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Footer className="custom-class" />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('custom-class');
  });

  it('renders empty footer without columns or social links', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });

  it('renders footer links with proper focus styles', () => {
    const columns = [
      {
        title: 'Company',
        links: [{ label: 'About', href: '/about' }],
      },
    ];

    render(<Footer columns={columns} />);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toHaveClass('focus:outline-none', 'focus:ring-2');
  });

  it('renders social links with proper focus styles', () => {
    const socialLinks = [
      { platform: 'Twitter', href: 'https://twitter.com' },
    ];

    render(<Footer socialLinks={socialLinks} />);
    const link = screen.getByRole('link', { name: 'Visit our Twitter' });
    expect(link).toHaveClass('focus:outline-none', 'focus:ring-2');
  });

  it('renders column titles with proper heading hierarchy', () => {
    const columns = [
      {
        title: 'Company',
        links: [{ label: 'About', href: '/about' }],
      },
    ];

    render(<Footer columns={columns} />);
    const heading = screen.getByText('Company');
    expect(heading.tagName).toBe('H3');
  });

  it('forwards ref to footer element', () => {
    const ref = React.createRef<HTMLElement>();
    render(<Footer ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('FOOTER');
  });

  it('renders multiple columns in grid layout', () => {
    const columns = [
      { title: 'Column 1', links: [{ label: 'Link 1', href: '/1' }] },
      { title: 'Column 2', links: [{ label: 'Link 2', href: '/2' }] },
      { title: 'Column 3', links: [{ label: 'Link 3', href: '/3' }] },
      { title: 'Column 4', links: [{ label: 'Link 4', href: '/4' }] },
    ];

    render(<Footer columns={columns} />);

    expect(screen.getByText('Column 1')).toBeInTheDocument();
    expect(screen.getByText('Column 2')).toBeInTheDocument();
    expect(screen.getByText('Column 3')).toBeInTheDocument();
    expect(screen.getByText('Column 4')).toBeInTheDocument();
  });
});
