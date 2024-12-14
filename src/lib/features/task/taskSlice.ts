import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  name: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "Progress" | "Completed";
  dueDate: string;
  assignee: string;
  description?: string;
}

const initialState: Task[] = [
  {
    id: "1",
    name: "Initial Task 1",
    priority: "High",
    status: "Todo",
    dueDate: "2024-12-15",
    assignee: "John Doe",
    description: "This is an initial task description",
  },
  {
    id: "2",
    name: "Initial Task 1",
    priority: "High",
    status: "Progress",
    dueDate: "2024-12-15",
    assignee: "John Doe",
    description: "This is an initial task description",
  },

  {
    id: "3",
    name: "Initial Task 1",
    priority: "High",
    status: "Completed",
    dueDate: "2024-12-15",
    assignee: "John Doe",
    description: "This is an initial task description",
  },

  {
    id: "4",
    name: "Initial Task 1",
    priority: "High",
    status: "Progress",
    dueDate: "2024-12-15",
    assignee: "John Doe",
    description: "This is an initial task description",
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
