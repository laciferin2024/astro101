export async function get() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]

  return {
    body: JSON.stringify(users),
  }
}
