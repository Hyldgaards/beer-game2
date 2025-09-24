export default function Page() {
  return <main className="p-10 text-4xl text-blue-600">Beer Game 2 — Hello</main>;
}
import Button from "./components/Button";
export default function Page() {
  return (
    <main className="p-10 space-y-4">
      <h1 className="text-4xl text-blue-600">Beer Game 2 — Hello</h1>
      <Button>Click me</Button>
    </main>
  );
}