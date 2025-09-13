import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Bed, Wifi, Car, Star, Filter, ChevronDown } from 'lucide-react';

export default function ProductGrid() {
  const properties = [
    {
      id: 1,
      name: 'Downtown Executive Studio',
      pricePerNight: 89,
      originalPrice: 109,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 47,
      badge: 'Popular',
      location: 'Downtown District',
      guests: 2,
      bedrooms: 'Studio',
      amenities: ['Wifi', 'Kitchen', 'Workspace'],
    },
    {
      id: 2,
      name: 'Riverside One-Bedroom Retreat',
      pricePerNight: 125,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 63,
      badge: 'Superhost',
      location: 'Riverside Quarter',
      guests: 4,
      bedrooms: '1 Bedroom',
      amenities: ['Wifi', 'Parking', 'Balcony'],
    },
    {
      id: 3,
      name: 'Historic District Two-Bedroom',
      pricePerNight: 165,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 38,
      location: 'Historic District',
      guests: 6,
      bedrooms: '2 Bedrooms',
      amenities: ['Wifi', 'Kitchen', 'Washer'],
    },
    {
      id: 4,
      name: 'Garden View Studio Loft',
      pricePerNight: 95,
      originalPrice: 115,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 29,
      badge: 'Great Value',
      location: 'Garden District',
      guests: 2,
      bedrooms: 'Studio',
      amenities: ['Wifi', 'Garden', 'Kitchen'],
    },
    {
      id: 5,
      name: 'Modern Downtown One-Bedroom',
      pricePerNight: 135,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 52,
      location: 'Downtown Core',
      guests: 4,
      bedrooms: '1 Bedroom',
      amenities: ['Wifi', 'Gym', 'Concierge'],
    },
    {
      id: 6,
      name: 'Family Two-Bedroom Suite',
      pricePerNight: 185,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 71,
      badge: 'Family Favorite',
      location: 'Residential Area',
      guests: 6,
      bedrooms: '2 Bedrooms',
      amenities: ['Wifi', 'Parking', 'Playground'],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All City Stay Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose from our collection of 6 professionally managed apartments, each offering comfort
            and convenience for your perfect stay
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              Filters
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Property Type
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Price Range
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Amenities
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>6 properties available</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Price
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-muted">
                {property.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={property.badge === 'Great Value' ? 'secondary' : 'default'}
                  >
                    {property.badge}
                  </Badge>
                )}
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <MapPin className="size-3" />
                      {property.location}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {property.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{property.rating}</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    {property.guests} guests
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="size-4" />
                    {property.bedrooms}
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">{property.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">
                    ${property.pricePerNight}
                  </span>
                  <span className="text-sm text-muted-foreground">per night</span>
                  {property.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-1">
                      ${property.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  Check Availability
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Can't find the perfect dates?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact us directly for custom arrangements or last-minute availability
            </p>
            <Button variant="outline">Contact Host</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
