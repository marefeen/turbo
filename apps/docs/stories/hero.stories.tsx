import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@acme/ui/hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const DefaultHero: Story = {
  args: {
    title: "Welcome to Our Website",
    subtitle: "Discover amazing things here",
  },
};

export const HeroWithContent: Story = {
  args: {
    title: "A Hero with Content",
    subtitle: "Explore more",
    children: (
      <p>
        This is a paragraph of content within the hero.
      </p>
    ),
  },
};