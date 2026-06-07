import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const mockItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const mockLogo = (
  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Brand</div>
);

export const Default: Story = {
  args: {
    items: mockItems,
  },
};

export const WithLogo: Story = {
  args: {
    items: mockItems,
    logo: mockLogo,
  },
};

export const WithoutLogo: Story = {
  args: {
    items: mockItems,
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home', href: '/' }],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const WithCustomAriaLabels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', ariaLabel: 'Navigate to home page' },
      { label: 'About', href: '/about', ariaLabel: 'Learn about our company' },
      { label: 'Contact', href: '/contact', ariaLabel: 'Get in touch with us' },
    ],
  },
};

export const WithCustomClassName: Story = {
  args: {
    items: mockItems,
    className: 'bg-gray-100',
  },
};
