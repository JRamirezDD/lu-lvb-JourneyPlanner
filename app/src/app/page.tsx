import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en"); // Perform redirect
  return <div>Redirecting...</div>; // Ensure it returns a React component
}