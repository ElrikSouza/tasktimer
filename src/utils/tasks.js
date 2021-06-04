export const loadTasks = () => {
  try {
    const rawField = localStorage.getItem("tasks");

    if (rawField == null || rawField.trim() === "") {
      return [];
    }

    const tasks = JSON.parse(rawField);
    return tasks;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
