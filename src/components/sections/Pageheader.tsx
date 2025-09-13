import { ChevronRight, Home, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PageHeader() {
  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="size-4" />
              <span>Home</span>
            </a>
            <ChevronRight className="size-4" />
            <a href="/properties" className="hover:text-foreground transition-colors">
              Properties
            </a>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Downtown Executive Suites</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Premium Downtown Apartment Rentals
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore 12 carefully curated furnished apartments in the city's business district.
                From modern studios to spacious two-bedroom units, perfect for extended stays and
                corporate housing.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="size-4" />
                Filter Units
              </Button>
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Search className="size-4" />
                Book Now
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-muted">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">12</span> Units Available
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">$2,200-$4,800</span> per month
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9★</span> Tenant satisfaction
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Same-day</span> Move-in available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
