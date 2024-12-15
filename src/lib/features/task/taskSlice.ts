import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Task interface
export interface Task {
  id: string;
  name: string;
  assignee: { id: string; name: string } | null;
  dueDate: string | null;
  priority: string | null;
  status: "Todo" | "In Progress" | "Completed";
  description?: string;
}

// Define the TaskState interface
export interface TaskState {
  tasks: Task[];
}

// Function to save tasks to localStorage
const saveTasksToLocalStorage = (tasks: Task[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

// Function to load tasks from localStorage
const loadTasksFromLocalStorage = (): Task[] => {
  if (typeof window !== "undefined") {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  return [];
};

// Set the initial state using tasks from localStorage
const initialState: TaskState = {
  tasks: loadTasksFromLocalStorage(),
};

// Create the task slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
  },
});

// Export actions and reducer
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
