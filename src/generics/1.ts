import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUserData() {
  const user = await fetchData<User>("https://api.example.com/user");
  console.log(user.id, user.name, user.email);
}
