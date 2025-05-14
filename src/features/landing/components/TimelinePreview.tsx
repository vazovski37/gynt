export function TimelinePreview() {
  const steps = ["Registration", "Training", "Tournament"];

  return (
    <section className="py-12 ">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">{step}</span>
              {index !== steps.length - 1 && <div className="w-6 h-px bg-muted-foreground" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
