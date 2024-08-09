import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './Header';

const meta = {
    title: 'Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<HeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PCSize: Story = {};
