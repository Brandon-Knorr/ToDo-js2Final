export default function TaskCollection (id, data) {
  id = id ?? '';
  data = data ?? {};

  return {
    id,
    tasks: data.tasks ?? [],
  }
}
