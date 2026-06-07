import * as React from 'react';

import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      id,
      label,
      error,
      description,
      required,
      disabled,
      autoComplete,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${React.useId()}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const descriptionId = description ? `${inputId}-description` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          ref={ref}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error
              ? errorId
              : description
                ? descriptionId
                : undefined
          }
          aria-required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-sm text-destructive">
            {error}
          </p>
        )}
        {description && !error && (
          <p id={descriptionId} className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
