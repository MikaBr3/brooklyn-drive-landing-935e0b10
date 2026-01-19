import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Car, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    package: "basis",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
  };

  const benefits = [
    "Professionele instructeurs",
    "Flexibele lesplanning",
    "Moderne auto's",
    "Hoog slagingspercentage",
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex flex-1 hero-gradient items-center justify-center p-12">
        <div className="max-w-md text-primary-foreground">
          <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-8">
            <Car className="w-10 h-10 text-accent-foreground" />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-4">
            Start je reis naar vrijheid
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            Schrijf je vandaag nog in en begin met rijlessen bij de beste rijschool van Amsterdam.
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Brooklyn Drive
            </span>
          </Link>

          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            Schrijf je in
          </h1>
          <p className="text-muted-foreground mb-8">
            Vul je gegevens in en begin met je rijlessen.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Voornaam</Label>
                <Input
                  id="firstName"
                  placeholder="Jan"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Achternaam</Label>
                <Input
                  id="lastName"
                  placeholder="Jansen"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres</Label>
              <Input
                id="email"
                type="email"
                placeholder="jan@email.nl"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefoonnummer</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="06 - 1234 5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Wachtwoord</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimaal 8 karakters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="package">Gewenst pakket</Label>
              <select
                id="package"
                value={formData.package}
                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
              >
                <option value="proefles">Proefles - €45</option>
                <option value="basis">Basis Pakket - €1.850</option>
                <option value="intensief">Intensief Pakket - €2.450</option>
              </select>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1 rounded border-border" required />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                Ik ga akkoord met de{" "}
                <a href="#" className="text-primary hover:underline">
                  algemene voorwaarden
                </a>{" "}
                en het{" "}
                <a href="#" className="text-primary hover:underline">
                  privacybeleid
                </a>
              </label>
            </div>

            <Button type="submit" variant="accent" className="w-full" size="lg">
              Inschrijven
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Heb je al een account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
