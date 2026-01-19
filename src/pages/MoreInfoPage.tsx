import { Car, Users, Award, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MoreInfoPage = () => {
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
      role: "Instructeur",
      experience: "5 jaar ervaring",
      description: "Focust op jonge bestuurders en intensieve spoedcursussen.",
    },
  ];

  const faqs = [
    {
      question: "Hoe lang duurt het om mijn rijbewijs te halen?",
      answer: "Gemiddeld hebben leerlingen 30-40 lessen nodig, wat neerkomt op 3-6 maanden. Dit verschilt per persoon en hangt af van je leervermogen en hoeveel je oefent.",
    },
    {
      question: "Kan ik mijn lessen annuleren of verplaatsen?",
      answer: "Ja, je kunt lessen tot 24 uur van tevoren kosteloos annuleren of verplaatsen via ons online systeem of telefonisch.",
    },
    {
      question: "Welke auto's gebruiken jullie?",
      answer: "We rijden in moderne Toyota Yaris en Volkswagen Polo's. Alle auto's zijn uitgerust met dual controls en voldoen aan de nieuwste veiligheidseisen.",
    },
    {
      question: "Bieden jullie theorie-ondersteuning?",
      answer: "Ja! Bij onze pakketten krijg je toegang tot online theorie-oefeningen en kun je deelnemen aan onze wekelijkse theorie-avonden.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Over Brooklyn Drive
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
            Al meer dan 10 jaar de betrouwbare rijschool van Amsterdam. 
            Wij helpen jou veilig en zelfverzekerd de weg op.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary-light text-secondary text-sm font-medium rounded-full mb-4">
                Onze Missie
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Veilige bestuurders voor een veiligere wereld
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bij Brooklyn Drive geloven we dat goed rijden begint met goed leren. 
                Onze missie is om elke leerling niet alleen te leren rijden, maar ook 
                verantwoordelijk en veilig deel te nemen aan het verkeer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Met moderne lesmethoden, ervaren instructeurs en persoonlijke aandacht 
                zorgen we ervoor dat jij met vertrouwen je rijbewijs haalt en de weg op gaat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-xl border border-border card-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground">500+</h3>
                <p className="text-muted-foreground text-sm">Tevreden leerlingen</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border card-shadow">
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground">95%</h3>
                <p className="text-muted-foreground text-sm">Slagingspercentage</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border card-shadow">
                <Clock className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground">10+</h3>
                <p className="text-muted-foreground text-sm">Jaar ervaring</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border card-shadow">
                <Car className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground">5</h3>
                <p className="text-muted-foreground text-sm">Moderne lesauto's</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-primary-light">
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
      <section className="py-20">
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
      <section className="py-20 bg-card border-t border-border">
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

            <Button size="lg" variant="accent" asChild>
              <Link to="/registreer">Schrijf Je Nu In</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreInfoPage;
