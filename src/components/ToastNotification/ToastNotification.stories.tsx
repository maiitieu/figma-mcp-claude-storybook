import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastNotification } from './ToastNotification';

const meta = {
  title: 'Feedback/Toast notification',
  component: ToastNotification,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: 'https://www.figma.com/design/u3AgRYe4MxAIutmfGzHJGy/Figma-MCP-x-Claude-x-Storybook?node-id=1-838' },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['success', 'fail', 'warning', 'default'] } },
} satisfies Meta<typeof ToastNotification>;
export default meta;
type Story = StoryObj<typeof meta>;

// Copy matches Figma exactly.
export const Success: Story = { args: { variant: 'success', message: 'Congratulations! You’ve done something great!' } };
export const Fail: Story = { args: { variant: 'fail', message: 'Beware – you should be careful with this' } };
export const Warning: Story = { args: { variant: 'warning', message: 'Holy component library, Batman! It’s gone wrong' } };
export const Default: Story = { args: { variant: 'default', message: 'Oh, hey there, this is just a friendly reminder' } };

export const AllVariants: Story = {
  name: 'All variants (matches Figma frame)',
  args: { message: '' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
      <ToastNotification variant="success" message="Congratulations! You’ve done something great!" />
      <ToastNotification variant="fail" message="Beware – you should be careful with this" />
      <ToastNotification variant="warning" message="Holy component library, Batman! It’s gone wrong" />
      <ToastNotification variant="default" message="Oh, hey there, this is just a friendly reminder" />
    </div>
  ),
};
