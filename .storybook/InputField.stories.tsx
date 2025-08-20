import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../src/components/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This is a helper text",
  },
};

export const Filled: Story = {
  args: {
    label: "Name",
    placeholder: "John Doe",
    variant: "filled",
  },
};

export const Outlined: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    variant: "outlined",
  },
};

export const Ghost: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    variant: "ghost",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

