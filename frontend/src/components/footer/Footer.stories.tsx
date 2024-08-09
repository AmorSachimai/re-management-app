import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
    title: 'Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PCSize: Story = {};
