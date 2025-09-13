import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Tv } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const apartments = [
    {
      name: 'Downtown Studio',
      description: 'Modern studio in the heart of the city',
      price: '$89',
      period: '/night',
      badge: 'Best Value',
      image: 'downtown-studio',
      location: 'Downtown District',
      guests: 2,
      bedrooms: 'Studio',
      bathrooms: 1,
      features: [
        'High-speed WiFi included',
        'Smart TV with streaming',
        'Full kitchen with coffee maker',
        '24/7 building security',
        'Walking distance to attractions',
        'Public transit nearby',
        'Self check-in available',
        'Weekly cleaning service',
      ],
      amenities: [Wifi, Tv, Coffee, MapPin],
      rating: 4.8,
      reviews: 127,
      popular: false,
    },
    {
      name: 'Executive One-Bedroom',
      description: 'Luxury apartment perfect for business travelers',
      price: '$129',
      period: '/night',
      badge: 'Most Popular',
      image: 'executive-one-bed',
      location: 'Financial District',
      guests: 3,
      bedrooms: '1 Bedroom',
      bathrooms: 1,
      features: [
        'Premium location downtown',
        'Dedicated workspace area',
        'High-end appliances',
        'Concierge services',
        'Gym access included',
        'Rooftop terrace access',
        'Express check-in/out',
        'Business center nearby',
        'Restaurant recommendations',
      ],
      amenities: [Wifi, Tv, Coffee, Car],
      rating: 4.9,
      reviews: 203,
      popular: true,
    },
    {
      name: 'Family Two-Bedroom',
      description: 'Spacious apartment ideal for families and groups',
      price: '$179',
      period: '/night',
      badge: 'Family Favorite',
      image: 'family-two-bed',
      location: 'Residential Area',
      guests: 6,
      bedrooms: '2 Bedrooms',
      bathrooms: 2,
      features: [
        'Sleeps up to 6 guests comfortably',
        'Two full bathrooms',
        'Large living and dining area',
        'Fully equipped kitchen',
        'Washer and dryer in unit',
        'Free parking space included',
        'Child-friendly amenities',
        'Quiet residential neighborhood',
        'Parks and playgrounds nearby',
      ],
      amenities: [Wifi, Tv, Coffee, Car],
      rating: 4.7,
      reviews: 156,
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <MapPin className="size-3 mr-1" />
            Featured Properties
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              City Stay
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Discover our handpicked selection of premium apartments. Each property offers
            exceptional comfort, prime locations, and all the amenities you need for an
            unforgettable stay.
          </p>

          {/* Property Stats */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <div className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              6 Properties Available
            </div>
            <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
              <Star className="size-3 mr-1 inline text-primary" />
              4.8 Average Rating
              <Badge variant="secondary" className="ml-2 text-xs">
                500+ Reviews
              </Badge>
            </div>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apartments.map((apartment, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg group cursor-pointer',
                apartment.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {apartment.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="size-3 mr-1" />
                    {apartment.badge}
                  </Badge>
                </div>
              )}

              {/* Property Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md">
                    <Star className="size-3 text-primary fill-primary" />
                    <span className="text-xs font-medium">{apartment.rating}</span>
                    <span className="text-xs text-muted-foreground">({apartment.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Background Gradient */}
              {apartment.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative pb-4">
                {apartment.badge && !apartment.popular && (
                  <Badge variant="outline" className="mb-2 w-fit">
                    {apartment.badge}
                  </Badge>
                )}

                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {apartment.name}
                </CardTitle>
                <CardDescription className="text-sm mb-4">{apartment.description}</CardDescription>

                {/* Property Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="size-3" />
                    <span>{apartment.guests} guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="size-3" />
                    <span>{apartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="size-3" />
                    <span>{apartment.bathrooms} bath</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="size-3" />
                  <span>{apartment.location}</span>
                </div>

                {/* Price */}
                <div className="flex items-end justify-between">
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold">{apartment.price}</span>
                    <span className="text-muted-foreground text-sm mb-1">{apartment.period}</span>
                  </div>
                  <div className="flex gap-1">
                    {apartment.amenities.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="size-6 rounded bg-muted flex items-center justify-center"
                      >
                        <Icon className="size-3 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {/* Features List */}
                <ul className="space-y-2 max-h-32 overflow-hidden">
                  {apartment.features.slice(0, 6).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-2.5 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <Button
                    className={cn(
                      'w-full text-sm py-5',
                      apartment.popular ? 'bg-primary hover:bg-primary/90' : ''
                    )}
                    variant={apartment.popular ? 'default' : 'outline'}
                  >
                    Book Now
                  </Button>

                  <Button variant="ghost" size="sm" className="w-full text-xs">
                    View Details & Photos
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  Free cancellation • Instant confirmation
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Can't find the perfect match?</h3>
          <p className="text-muted-foreground mb-6">
            We have 3 additional properties that might be perfect for your stay. Contact us directly
            to explore all available options and find your ideal accommodation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
            <Button size="lg">Contact Host</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
