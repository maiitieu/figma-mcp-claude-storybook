import type { Meta, StoryObj } from '@storybook/react-vite';
import { DisclosureBanner } from './DisclosureBanner';

const meta = {
  title: 'Compliance/Disclosure banner',
  component: DisclosureBanner,
  tags: ['autodocs'],
  args: {
    title: 'Capital at risk',
    children: 'The value of your investments can go down as well as up, so you may get back less than you invest.',
    linkLabel: 'Read our risk summary',
    linkHref: '#',
  },
} satisfies Meta<typeof DisclosureBanner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = { args: { variant: 'info', title: 'Important information' } };
export const Warning: Story = { args: { variant: 'warning' } };
export const Risk: Story = {
  args: {
    variant: 'risk',
    title: "Don't invest unless you're prepared to lose all the money you invest",
    children: 'This is a high-risk investment and you are unlikely to be protected if something goes wrong. Take 2 mins to learn more.',
  },
};
export const BNPL: Story = {
  name: 'POS lending (BNPL)',
  args: {
    variant: 'warning',
    title: 'Borrowing more than you can afford',
    children: 'Missed payments may affect your credit score and your ability to borrow in future.',
  },
};
