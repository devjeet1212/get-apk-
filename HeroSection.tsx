import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground mb-4">
            Download Premium MOD APKs
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access unlimited features, premium unlocked, and ad-free experience
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for MOD apps & games..."
              className="h-14 pl-12 text-lg"
              data-testid="input-hero-search"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">Recent Searches:</span>
            <div className="flex flex-wrap gap-2">
              {["YouTube Premium", "Netflix", "Spotify", "Instagram"].map((app) => (
                <button
                  key={app}
                  className="rounded-full bg-card px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 transition-transform"
                  data-testid={`button-recent-${app.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {app}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
