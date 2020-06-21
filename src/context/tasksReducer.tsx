export function tasksReducer(state: any[], action: any) {
  switch (action.type) {
    case "ADD_TASK":
      localStorage.setItem("localTasks", JSON.stringify([...state, action.task]))
      return [...state, action.task];
    case "EDIT_TASK":
      localStorage.setItem("localTasks", JSON.stringify(
        [
          ...state.filter((task) => task.id !== action.task.id),
          action.task,
        ].sort((a, b) => a.id - b.id)
      ))
      return [
        ...state.filter((task) => task.id !== action.task.id),
        action.task,
      ].sort((a, b) => a.id - b.id);
    case "DELETE_TASK":
      localStorage.setItem("localTasks", JSON.stringify(state.filter((task) => task.id !== action.task.id)))
      return state.filter((task) => task.id !== action.task.id);
    default:
      return state;
  }
}
