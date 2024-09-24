import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@acme/ui/card"; // Assuming the Card component is in the "@acme/ui/card" module

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    image: { control: "text" },
    children: { control: "text" }, // For simple content, consider using a textarea for richer input
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    title: "My Card",
    subtitle: "A brief description",
    image: "https://example.com/card-image.jpg",
    children: "This is the card's main content.",
  },
};

export const CardWithButton: Story = {
  args: {
    title: "Card with Button",
    subtitle: "Click the button to learn more.",
    image: "https://example.com/card-image.jpg",
    children: (
      <div>
        <p>This is the card's content.</p>
        <button>Learn More</button>
      </div>
    ),
  },
};