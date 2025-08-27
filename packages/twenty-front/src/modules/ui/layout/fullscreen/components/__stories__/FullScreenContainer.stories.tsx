import { FullScreenContainer } from '@/ui/layout/fullscreen/components/FullScreenContainer';
import { styled } from '@linaria/react';
import { type Meta, type StoryObj } from '@storybook/react';
import {
  ComponentDecorator,
  ComponentWithRouterDecorator,
} from 'twenty-ui/testing';
import { I18nFrontDecorator } from '~/testing/decorators/I18nFrontDecorator';

const meta: Meta<typeof FullScreenContainer> = {
  title: 'UI/Layout/FullScreenContainer',
  component: FullScreenContainer,
  decorators: [
    ComponentDecorator,
    I18nFrontDecorator,
    ComponentWithRouterDecorator,
  ],
};
export default meta;

type Story = StoryObj<typeof FullScreenContainer>;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Default: Story = {
  args: {
    children: <StyledContainer>This is full-screen content</StyledContainer>,
    links: [
      {
        children: 'Layout',
        href: '/',
      },
      {
        children: 'FullScreen',
        href: '/',
      },
    ],
    exitFullScreen: () => {},
  },
  decorators: [ComponentDecorator],
};
