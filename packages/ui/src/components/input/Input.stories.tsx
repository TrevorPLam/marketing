import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'tel', 'password', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    autoComplete: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    placeholder: 'Enter your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Invalid email format',
    value: 'invalid-email',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email',
    description: 'Enter your work email address',
    placeholder: 'john@company.com',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    value: 'disabled@example.com',
  },
};

export const EmailType: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'john@example.com',
    autoComplete: 'email',
  },
};

export const TelType: Story = {
  args: {
    type: 'tel',
    label: 'Phone',
    placeholder: '+1 (555) 000-0000',
    autoComplete: 'tel',
  },
};

export const PasswordType: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    autoComplete: 'current-password',
  },
};

export const NumberType: Story = {
  args: {
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Input label="Default" placeholder="Default state" />
      <Input label="Required" required placeholder="Required field" />
      <Input label="With Error" error="This field has an error" />
      <Input label="With Description" description="Helper text goes here" />
      <Input label="Disabled" disabled value="Cannot edit" />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input type="text" label="Text" placeholder="Text input" />
      <Input type="email" label="Email" placeholder="email@example.com" />
      <Input type="tel" label="Phone" placeholder="+1 (555) 000-0000" />
      <Input type="password" label="Password" placeholder="••••••••" />
      <Input type="number" label="Number" placeholder="123" />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    label: 'Email',
    placeholder: 'Type to see changes',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log('Input changed:', e.target.value),
  },
};

export const WithAutoComplete: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input
        type="text"
        label="Name"
        placeholder="Full name"
        autoComplete="name"
      />
      <Input
        type="email"
        label="Email"
        placeholder="email@example.com"
        autoComplete="email"
      />
      <Input
        type="tel"
        label="Phone"
        placeholder="+1 (555) 000-0000"
        autoComplete="tel"
      />
      <Input
        type="password"
        label="Password"
        placeholder="••••••••"
        autoComplete="current-password"
      />
    </div>
  ),
};
