import * as React from 'react';

import { cn } from '../../lib/utils';

export interface FooterLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
}

export interface FooterProps {
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyright?: string;
  className?: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ columns = [], socialLinks = [], copyright, className }, ref) => {
    const currentYear = new Date().getFullYear();
    const defaultCopyright = `© ${currentYear} Your Company. All rights reserved.`;

    return (
      <footer
        ref={ref}
        role="contentinfo"
        className={cn('w-full bg-muted border-t', className)}
      >
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Footer Columns */}
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        aria-label={link.ariaLabel || link.label}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.ariaLabel || `Visit our ${social.platform}`}
                      className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md p-2"
                    >
                      {social.icon || (
                        <span className="sr-only">{social.platform}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              {copyright || defaultCopyright}
            </p>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export { Footer };
