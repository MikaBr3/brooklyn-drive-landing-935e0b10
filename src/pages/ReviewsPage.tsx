import { Star, Quote } from "lucide-react";

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Sophie van der Berg",
      rating: 5,
      date: "December 2025",
      text: "Fantastische ervaring bij Brooklyn Drive! Mijn instructeur was super geduldig en legde alles duidelijk uit. In 3 maanden had ik mijn rijbewijs. Echt een aanrader!",
      package: "Basis Pakket",
    },
    {
      name: "Mohammed El Amrani",
      rating: 5,
      date: "November 2025",
      text: "Na twee keer gezakt te zijn bij een andere rijschool, ben ik overgestapt naar Brooklyn Drive. Wat een verschil! De instructeurs weten precies waar je aan moet werken. In één keer geslaagd!",
      package: "Intensief Pakket",
    },
    {
      name: "Lisa de Vries",
      rating: 5,
      date: "Oktober 2025",
      text: "Zeer professioneel en vriendelijk team. De flexibele planning was ideaal voor mij als student. Modern lesmateriaal en goede auto's. Top!",
      package: "Basis Pakket",
    },
    {
      name: "Thomas Bakker",
      rating: 4,
      date: "Oktober 2025",
      text: "Goede rijschool met ervaren instructeurs. De theorie ondersteuning heeft me echt geholpen. Enige minpunt was dat ik soms even moest wachten op een beschikbare les.",
      package: "Intensief Pakket",
    },
    {
      name: "Emma Jansen",
      rating: 5,
      date: "September 2025",
      text: "Van proefles tot rijbewijs in 4 maanden! Brooklyn Drive heeft me echt vertrouwen gegeven achter het stuur. De examenvoorbereiding was uitstekend.",
      package: "Basis Pakket",
    },
    {
      name: "Daan Visser",
      rating: 5,
      date: "September 2025",
      text: "Beste rijschool van Amsterdam! Instructeur Kees is top, hij heeft echt geduld en zorgt ervoor dat je alles goed snapt. Aanrader voor iedereen!",
      package: "Proefles",
    },
  ];

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wat Onze Leerlingen Zeggen
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ontdek waarom honderden leerlingen kozen voor Brooklyn Drive
          </p>

          {/* Stats */}
          <div className="inline-flex items-center gap-6 bg-card px-8 py-4 rounded-xl border border-border card-shadow">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-accent">{averageRating}</div>
              <div className="flex items-center gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-primary">{reviews.length}+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border card-shadow card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <Quote className="w-8 h-8 text-primary-light" />
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {review.text}
              </p>

              <span className="inline-block px-3 py-1 bg-secondary-light text-secondary text-xs font-medium rounded-full">
                {review.package}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-primary-light rounded-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Word ook een tevreden leerling!
          </h2>
          <p className="text-muted-foreground mb-6">
            Begin vandaag nog met je rijlessen bij Brooklyn Drive
          </p>
          <a
            href="/registreer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Schrijf Je In
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
