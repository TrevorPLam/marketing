import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input element by default', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  it('renders with label when provided', () => {
    render(<Input label="Email" />);
    const label = screen.getByText('Email');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
  });

  it('associates label with input via htmlFor', () => {
    render(<Input label="Email" />);
    const label = screen.getByText('Email');
    const input = screen.getByRole('textbox');
    expect(label).toHaveAttribute('for');
    expect(input).toHaveAttribute('id');
    expect(label.getAttribute('for')).toBe(input.getAttribute('id'));
  });

  it('renders with required field indicator', () => {
    render(<Input label="Email" required />);
    const requiredIndicator = screen.getByText('*');
    expect(requiredIndicator).toBeInTheDocument();
    expect(requiredIndicator).toHaveClass('text-destructive');
  });

  it('does not show required indicator when not required', () => {
    render(<Input label="Email" />);
    const requiredIndicator = screen.queryByText('*');
    expect(requiredIndicator).not.toBeInTheDocument();
  });

  it('renders with error state', () => {
    render(<Input label="Email" error="Invalid email format" />);
    const errorMessage = screen.getByText('Invalid email format');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-destructive');
  });

  it('sets aria-invalid when error is present', () => {
    render(<Input label="Email" error="Invalid email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not set aria-invalid when no error', () => {
    render(<Input label="Email" />);
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('aria-invalid');
  });

  it('associates error message with input via aria-describedby', () => {
    render(<Input label="Email" error="Invalid email" />);
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Invalid email');
    expect(input).toHaveAttribute('aria-describedby');
    expect(errorMessage).toHaveAttribute('id');
    expect(input.getAttribute('aria-describedby')).toBe(errorMessage.getAttribute('id'));
  });

  it('renders with description text', () => {
    render(<Input label="Email" description="Enter your work email" />);
    const description = screen.getByText('Enter your work email');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-muted-foreground');
  });

  it('associates description with input via aria-describedby when no error', () => {
    render(<Input label="Email" description="Enter your work email" />);
    const input = screen.getByRole('textbox');
    const description = screen.getByText('Enter your work email');
    expect(input).toHaveAttribute('aria-describedby');
    expect(description).toHaveAttribute('id');
    expect(input.getAttribute('aria-describedby')).toBe(description.getAttribute('id'));
  });

  it('prioritizes error description over description text', () => {
    render(
      <Input
        label="Email"
        error="Invalid email"
        description="Enter your work email"
      />
    );
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Invalid email');
    const description = screen.queryByText('Enter your work email');
    expect(input.getAttribute('aria-describedby')).toBe(errorMessage.getAttribute('id'));
    expect(description).not.toBeInTheDocument();
  });

  it('sets aria-required when required is true', () => {
    render(<Input label="Email" required />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('does not set aria-required when not required', () => {
    render(<Input label="Email" />);
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('aria-required');
  });

  it('renders with disabled state', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
  });

  it('renders with custom autoComplete attribute', () => {
    render(<Input autoComplete="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('autoComplete', 'email');
  });

  it('renders with different input types', () => {
    const { rerender } = render(<Input type="email" />);
    let input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');

    rerender(<Input type="tel" />);
    input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'tel');

    rerender(<Input type="password" />);
    input = screen.getByDisplayValue('');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    render(<Input />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'test@example.com');
    
    expect(input).toHaveValue('test@example.com');
  });

  it('handles change events', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'test');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not handle input when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input disabled onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'test');
    
    expect(input).toHaveValue('');
  });

  it('has visible focus indicator', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('focus-visible:ring-2', 'focus-visible:ring-ring');
  });

  it('applies error styles when error is present', () => {
    render(<Input error="Invalid input" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-destructive', 'focus-visible:ring-destructive');
  });

  it('renders with custom className', () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.tagName).toBe('INPUT');
  });

  it('uses provided id when given', () => {
    render(<Input id="custom-id" label="Email" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Email');
    
    expect(input).toHaveAttribute('id', 'custom-id');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('passes through additional input attributes', () => {
    render(<Input placeholder="Enter email" maxLength={100} />);
    const input = screen.getByRole('textbox');
    
    expect(input).toHaveAttribute('placeholder', 'Enter email');
    expect(input).toHaveAttribute('maxlength', '100');
  });
});
