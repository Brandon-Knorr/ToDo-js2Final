export default function Task (id, data) {
  id = id ?? '';
  data = data ?? {};


  return {
    id,
    title: data.title ?? '',
    status: data.status ?? '',
    done: data.done ?? false,
    due: data.due ?? '',
    difficulty: data.difficulty ?? '',
    subtasks: data.subtasks ?? [],
  }
}
