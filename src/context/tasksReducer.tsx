export function tasksReducer(state: any[], action: any) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task];
    case "EDIT_TASK":
      return [
        ...state.filter((task) => task.id !== action.task.id),
        action.task,
      ].sort((a, b) => a.id - b.id);
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.task.id);
    default:
      return state;
  }
}
