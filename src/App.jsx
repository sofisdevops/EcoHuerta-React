import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header title="EcoHuerta 🌿" subtitle="Learn sustainable crops" />

      <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        <Card title="Tomato" description="Warm-season crop rich in lycopene." />
        <Card title="Lettuce" description="Cool-season leafy vegetable." />
        <Card title="Carrot" description="Root crop high in beta-carotene." />
      </section>

      <Counter />
    </main>
  );
}