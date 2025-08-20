import { InputField } from "./components/InputField";
import './App.css'
import { DataTable } from "./components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Amit Kumar", email: "amit@example.com" },
  { id: 2, name: "Riya Sharma", email: "riya@example.com" },
];

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <InputField label="Username" placeholder="Enter your name" helperText="Required field"  variant="filled" size="md" value="Clear me" errorMessage="hii"/>

      <DataTable<User>
        data={users}
        columns={[
          { key: "1", title: "Name", dataIndex: "name", sortable: true },
          { key: "2", title: "Email", dataIndex: "email", sortable: true },
        ]}
        selectable
        onRowSelect={(rows) => console.log("Selected:", rows)}
      />
    </div>
  );
}
