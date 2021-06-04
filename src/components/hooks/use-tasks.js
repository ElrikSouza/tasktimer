import { useState } from "react";
import { loadTasks, saveTasks } from "../../utils/tasks";

const maxId = (taskArray) => {
  if (taskArray.length === 0) {
    return 0;
  }

  return taskArray[taskArray.length - 1].id;
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(loadTasks());

  const addNewTask = (taskName) => {
    const newTaskArray = [...tasks, { name: taskName, id: maxId(tasks) + 1 }];

    setTasks(newTaskArray);
    saveTasks(newTaskArray);
  };

  const removeFirstTask = () => {
    const [, ...newTaskArray] = tasks;
    setTasks(newTaskArray);
    saveTasks(newTaskArray);
  };

  const removeTaskById = (taskId) => {
    const newTaskArray = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskArray);
    saveTasks(newTaskArray);
  };

  return { tasks, addNewTask, removeFirstTask, removeTaskById };
};
