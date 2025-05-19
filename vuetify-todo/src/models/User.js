export default function User (id, data) {
  id = id ?? '';
  data = data ?? {};

  return {
    id,
    firstName: data.firstName ?? '',
    lastName: data.lastName ?? '',
  }
}
