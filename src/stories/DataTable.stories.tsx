import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "../components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Amit Kumar", email: "amit@example.com" },
  { id: 2, name: "Riya Sharma", email: "riya@example.com" },
  { id: 3, name: "John Doe", email: "john@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: users,
    columns: [
      { key: "1", title: "ID", dataIndex: "id", sortable: true },
      { key: "2", title: "Name", dataIndex: "name", sortable: true },
      { key: "3", title: "Email", dataIndex: "email", sortable: true },
    ],
  },
};

export const Selectable: Story = {
  args: {
    ...Default.args,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: Default.args!.columns!,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: Default.args!.columns!,
  },
};
