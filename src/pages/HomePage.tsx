import { ArrowRight, Shield, Clock, Award, Car, Users, CheckCircle, Star, Quote, MapPin, Phone, Mail, Bike } from "lucide-react";
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

  const autoPackages = [
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

  const fatbikePackages = [
    {
      name: "Basis Fatbike Les",
      price: "35",
      description: "Leer veilig fatbike rijden",
      features: ["60 minuten les", "Veiligheid & verkeersregels", "Praktische oefeningen"],
      popular: false,
    },
    {
      name: "Fatbike Cursus",
      price: "95",
      description: "Complete training",
      features: ["3 lessen van 60 min", "Theorie & praktijk", "Certificaat na afloop", "Helm inbegrepen"],
      popular: true,
    },
    {
      name: "Groepsles",
      price: "25",
      description: "Per persoon (min. 4)",
      features: ["90 minuten groepsles", "Max. 8 personen", "Inclusief fatbike", "Leuk & leerzaam"],
      popular: false,
    },
  ];

  const reviews = [
    {
      name: "Sophie van der Berg",
      rating: 5,
      date: "December 2025",
      text: "Fantastische ervaring bij Brooklyn Drive! Mijn instructeur was super geduldig en legde alles duidelijk uit. In 3 maanden had ik mijn rijbewijs.",
      package: "Basis Pakket",
    },
    {
      name: "Mohammed El Amrani",
      rating: 5,
      date: "November 2025",
      text: "Na twee keer gezakt te zijn bij een andere rijschool, ben ik overgestapt naar Brooklyn Drive. In één keer geslaagd!",
      package: "Intensief Pakket",
    },
    {
      name: "Lisa de Vries",
      rating: 5,
      date: "Oktober 2025",
      text: "Zeer professioneel en vriendelijk team. De flexibele planning was ideaal voor mij als student. Top!",
      package: "Basis Pakket",
    },
    {
      name: "Emma Jansen",
      rating: 5,
      date: "September 2025",
      text: "Van proefles tot rijbewijs in 4 maanden! Brooklyn Drive heeft me echt vertrouwen gegeven achter het stuur.",
      package: "Basis Pakket",
    },
    {
      name: "Daan Visser",
      rating: 5,
      date: "September 2025",
      text: "Beste rijschool van Amsterdam! Instructeur Kees is top, hij heeft echt geduld en zorgt ervoor dat je alles goed snapt.",
      package: "Proefles",
    },
    {
      name: "Tim Hendriks",
      rating: 5,
      date: "Augustus 2025",
      text: "De fatbike cursus was super leuk en leerzaam. Nu rij ik veel veiliger door het verkeer!",
      package: "Fatbike Cursus",
    },
  ];

  const instructors = [
    {
      name: "Kees van Dijk",
      role: "Senior Instructeur",
      experience: "15 jaar ervaring",
      description: "Gespecialiseerd in examentraining en het begeleiden van nerveuze leerlingen.",
    },
    {
      name: "Sandra Mulder",
      role: "Instructeur",
      experience: "8 jaar ervaring",
      description: "Expert in defensief rijden en eco-driving technieken.",
    },
    {
      name: "Tom de Boer",
      role: "Fatbike & Auto Instructeur",
      experience: "5 jaar ervaring",
      description: "Specialist in fatbike lessen en jonge bestuurders.",
    },
  ];

  const faqs = [
    {
      question: "Hoe lang duurt het om mijn rijbewijs te halen?",
      answer: "Gemiddeld hebben leerlingen 30-40 lessen nodig, wat neerkomt op 3-6 maanden. Dit verschilt per persoon.",
    },
    {
      question: "Kan ik mijn lessen annuleren of verplaatsen?",
      answer: "Ja, je kunt lessen tot 24 uur van tevoren kosteloos annuleren of verplaatsen.",
    },
    {
      question: "Welke auto's gebruiken jullie?",
      answer: "We rijden in moderne Toyota Yaris en Volkswagen Polo's met dual controls.",
    },
    {
      question: "Bieden jullie ook fatbike lessen aan?",
      answer: "Ja! We bieden fatbike lessen aan voor alle leeftijden. Leer veilig rijden in het verkeer.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
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
              🚗 Rijschool & Fatbike Lessen Amsterdam
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Behaal je Rijbewijs met{" "}
              <span className="text-accent">Brooklyn Drive</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Professionele rijlessen én fatbike cursussen met ervaren instructeurs. 
              Flexibele planning, moderne voertuigen en een hoog slagingspercentage!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" variant="accent" onClick={() => scrollToSection('pakketten')}>
                Bekijk Pakketten <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="ghost" className="border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => scrollToSection('over-ons')}>
                Meer Over Ons
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
      <section id="waarom" className="py-20 bg-background">
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

      {/* Auto Packages Section */}
      <section id="pakketten" className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full mb-4">
              <Car className="w-5 h-5" />
              <span className="font-semibold">Autorijlessen</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onze Rijlespakketten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kies het pakket dat bij jou past. Van proefles tot intensieve cursus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {autoPackages.map((pkg, index) => (
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
                  onClick={() => scrollToSection('contact')}
                >
                  Kies Dit Pakket
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fatbike Packages Section */}
      <section id="fatbike" className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full mb-4">
              <Bike className="w-5 h-5" />
              <span className="font-semibold">Fatbike Lessen</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fatbike Cursussen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leer veilig fatbike rijden in het verkeer. Voor alle leeftijden!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {fatbikePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card p-8 rounded-xl border-2 card-shadow card-hover ${
                  pkg.popular ? "border-accent" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Populair
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
                  onClick={() => scrollToSection('contact')}
                >
                  Boek Nu
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wat Onze Leerlingen Zeggen
            </h2>
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
        </div>
      </section>

      {/* About / Team Section */}
      <section id="over-ons" className="py-20 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ons Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ontmoet onze ervaren en gecertificeerde instructeurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border card-shadow card-hover text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">
                    {instructor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {instructor.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-1">{instructor.role}</p>
                <p className="text-muted-foreground text-xs mb-3">{instructor.experience}</p>
                <p className="text-muted-foreground text-sm">{instructor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border card-shadow"
              >
                <h3 className="font-semibold text-foreground mb-2 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Neem Contact Op
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
                <p className="text-muted-foreground">06 - 1234 5678</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent-hover" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <p className="text-muted-foreground">info@brooklyndrive.nl</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-lg bg-secondary-light flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Locatie</h3>
                <p className="text-muted-foreground">Amsterdam, Nederland</p>
              </div>
            </div>

            <Button size="lg" variant="accent" onClick={() => scrollToSection('pakketten')}>
              Bekijk Onze Pakketten <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8">
            Schrijf je nu in voor een proefles en ontdek waarom honderden 
            leerlingen kozen voor Brooklyn Drive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" onClick={() => scrollToSection('pakketten')}>
              <Car className="w-5 h-5" /> Autorijlessen
            </Button>
            <Button size="lg" variant="ghost" className="border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => scrollToSection('fatbike')}>
              <Bike className="w-5 h-5" /> Fatbike Lessen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
