type Plant = { id: string; name: string; freqDays: number };

async function getPlants(): Promise<Plant[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/plants`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to load plants");
    return res.json();
  }
  
  export default async function PlantsPage() {
    const plants = await getPlants();
    return (
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">הצמחים שלי 🌿</h1>
        <div className="grid gap-3">
          {plants.map((p) => (
            <div key={p.id} className="rounded-2xl border p-4">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="opacity-70 text-sm">השקיה כל {p.freqDays} ימים</div>
            </div>
          ))}
        </div>
      </main>
    );
  }