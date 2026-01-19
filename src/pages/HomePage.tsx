import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, Car, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-driving.jpg";

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Veilig & Betrouwbaar",
      description: "Gecertificeerde instructeurs met jarenlange ervaring en een veilige leeromgeving.",
    },
    {
      icon: Clock,
      title: "Flexibele Lessen",
      description: "Plan je rijlessen wanneer het jou uitkomt. 7 dagen per week beschikbaar.",
    },
    {
      icon: Award,
      title: "Hoog Slagingspercentage",
      description: "Onze leerlingen slagen bovengemiddeld, dankzij onze bewezen lesmethode.",
    },
  ];

  const stats = [
    { number: "95%", label: "Slagingspercentage" },
    { number: "500+", label: "Tevreden Leerlingen" },
    { number: "10+", label: "Jaar Ervaring" },
    { number: "5★", label: "Gemiddelde Review" },
  ];

  const packages = [
    {
      name: "Proefles",
      price: "45",
      description: "Maak kennis met Brooklyn Drive",
      features: ["60 minuten rijles", "Kennismaking met instructeur", "Gratis advies rijpakket"],
      popular: false,
    },
    {
      name: "Basis Pakket",
      price: "1.850",
      description: "Ideaal voor beginners",
      features: ["30 rijlessen", "Theorie ondersteuning", "CBR examen inclusief", "Flexibele planning"],
      popular: true,
    },
    {
      name: "Intensief Pakket",
      price: "2.450",
      description: "Snel je rijbewijs halen",
      features: ["40 rijlessen", "Spoedcursus theorie", "Tussentijdse toets", "Examengarantie"],
      popular: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Rijles bij Brooklyn Drive"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6 animate-fade-in">
              🚗 Rijschool Amsterdam
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Behaal je Rijbewijs met{" "}
              <span className="text-accent">Brooklyn Drive</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Professionele rijlessen met ervaren instructeurs. Flexibele planning, 
              moderne auto's en een hoog slagingspercentage. Start vandaag nog!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" variant="accent" asChild>
                <Link to="/registreer">
                  Gratis Proefles <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link to="/meer-info">Meer Informatie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Waarom Brooklyn Drive?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wij bieden alles wat je nodig hebt om veilig en zelfverzekerd de weg op te gaan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border card-shadow card-hover"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary-light flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Pakketten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kies het pakket dat bij jou past. Van proefles tot intensieve cursus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card p-8 rounded-xl border-2 card-shadow card-hover ${
                  pkg.popular ? "border-accent" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Meest Gekozen
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-foreground">€{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "accent" : "default"}
                  className="w-full"
                  asChild
                >
                  <Link to="/registreer">Kies Dit Pakket</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8">
            Schrijf je nu in voor een gratis proefles en ontdek waarom honderden 
            leerlingen kozen voor Brooklyn Drive.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/registreer">
              Start Nu <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
