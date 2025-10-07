import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-primary" data-testid="text-logo">
              GetModsAPK
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" size="sm" data-testid="button-nav-home">
                Home
              </Button>
              <Button variant="ghost" size="sm" data-testid="button-nav-games">
                Games
              </Button>
              <Button variant="ghost" size="sm" data-testid="button-nav-apps">
                Apps
              </Button>
            </nav>
          </div>
          
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search apps & games..."
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
