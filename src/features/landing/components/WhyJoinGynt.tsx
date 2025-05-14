export function WhyJoinGynt() {
  const items = [
    { title: "Team-Based Science", icon: "🧑‍🤝‍🧑" },
    { title: "Develop Public Speaking", icon: "🎤" },
    { title: "Represent Georgia", icon: "🇬🇪" },
    { title: "Meet Young Innovators", icon: "🧠" },
  ];

  return (
    <section className="py-20 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12">Why Join GYNT?</h2>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
