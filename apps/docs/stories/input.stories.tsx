import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@acme/ui/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "email", "password"],
    },
    placeholder: { control: { type: "text" } },
    defaultValue: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: (props) => (
    <Input
      {...props}
      onChange={(event) => {
        console.log("Input value changed:", event.target.value);
      }}
    />
  ),
  name: "Input",
  args: {
    type: "text",
    placeholder: "Enter your text here",
    defaultValue: "",
  },
};

export const Email: Story = {
  render: (props) => (
    <Input
      {...props}
      onChange={(event) => {
        console.log("Email value changed:", event.target.value);
      }}
    />
  ),
  name: "Email Input",
  args: {
    type: "email",
    placeholder: "Enter your email address",
  },
};

export const Password: Story = {
  render: (props) => (
    <Input
      {...props}
      onChange={(event) => {
        console.log("Password value changed:", event.target.value);
      }}
    />
  ),
  name: "Password Input",
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
};