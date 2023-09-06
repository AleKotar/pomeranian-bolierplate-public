export async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Bład pobierania danych');
  }
  return data;
}
