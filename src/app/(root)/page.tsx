import Hello from "../components/Hello";

export default function Home() {
  console.log("Where are mine ? -- CLient / Server ");
  return (
    <>
      <h1>Welcome to Nextjs</h1>
      <Hello />
    </>
  );
}
