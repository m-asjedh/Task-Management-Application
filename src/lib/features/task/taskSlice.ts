import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  name: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "Progress" | "Completed";
  dueDate: string;
  assignee: string;
  description?: string;
}

const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const initialState: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
      saveTasksToLocalStorage(state);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
