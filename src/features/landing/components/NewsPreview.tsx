import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NewsPreview() {
  const dummyPosts = [
    { title: "GYNT 2024 Registration Now Open", date: "Aug 1, 2024" },
    { title: "Meet the Winners of GYNT 2023", date: "May 20, 2024" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dummyPosts.map((post, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {/* You can add a short description here later if needed */}
                  Stay up to date with the latest announcements and achievements from GYNT.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
