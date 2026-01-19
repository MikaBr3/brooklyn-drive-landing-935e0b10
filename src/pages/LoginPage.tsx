import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
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
            Welkom terug!
          </h1>
          <p className="text-muted-foreground mb-8">
            Log in om je voortgang te bekijken en lessen te plannen.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres</Label>
              <Input
                id="email"
                type="email"
                placeholder="jouw@email.nl"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Wachtwoord</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-muted-foreground">Onthoud mij</span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                Wachtwoord vergeten?
              </a>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Inloggen
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Nog geen account?{" "}
            <Link to="/registreer" className="text-primary font-medium hover:underline">
              Registreer nu
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 hero-gradient items-center justify-center p-12">
        <div className="max-w-md text-center text-primary-foreground">
          <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-8">
            <Car className="w-10 h-10 text-accent-foreground" />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-4">
            Jouw rijbewijs binnen handbereik
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            Bekijk je lesrooster, volg je voortgang en plan nieuwe lessen. 
            Alles in één overzichtelijk dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
