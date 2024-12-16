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
    // Add a new task
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },

    updateTask: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Task> }>
    ) => {
      const { id, updates } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        // Merge the updates into the existing task
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updates };
        saveTasksToLocalStorage(state.tasks);
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      // Filter out the task to be deleted
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      saveTasksToLocalStorage(state.tasks); // Save updated tasks to localStorage
    },
    updateTaskStatusByDragAndDrop(
      state,
      action: PayloadAction<{
        id: string;
        newStatus: "Todo" | "In Progress" | "Completed";
      }>
    ) {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.newStatus;
      }
    },
  },
});

// Export actions and reducer
export const {
  addTask,
  updateTask,
  deleteTask,
  updateTaskStatusByDragAndDrop,
} = taskSlice.actions;
export default taskSlice.reducer;
