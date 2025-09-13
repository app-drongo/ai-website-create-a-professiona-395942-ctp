import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  Heart,
  Star,
  Wifi,
  Car,
  Coffee,
  Plus,
  Minus,
  MapPin,
  Users,
  Bed,
  Bath,
} from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Property Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format&fit=crop"
                alt="Downtown Executive Suite living room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400&auto=format&fit=crop',
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={src}
                    alt={`Property view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              <Badge variant="secondary">Instant Book</Badge>
              <Badge className="bg-accent text-accent-foreground">Superhost</Badge>
            </div>

            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Downtown Executive Suite
              </h1>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${i < 5 ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9 (47 reviews)</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="size-4" />
                  <span>4 guests</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="size-4" />
                  <span>2 bedrooms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="size-4" />
                  <span>2 baths</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">$189</span>
                <span className="text-muted-foreground">per night</span>
              </div>
              <p className="text-sm text-muted-foreground">$25 cleaning fee • $15 service fee</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Luxurious downtown apartment perfect for business travelers and couples. Walking
              distance to restaurants, shopping, and public transit. Features modern amenities,
              high-speed WiFi, and stunning city views.
            </p>

            {/* Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <span className="font-medium">Downtown Financial District</span>
              </div>
              <p className="text-sm text-muted-foreground ml-7">
                2 blocks from Metro Station • 5 min walk to Convention Center
              </p>
            </div>

            {/* Guest Selection & Book Now */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="icon" className="rounded-r-none">
                  <Minus className="size-4" />
                </Button>
                <span className="px-4 py-2 min-w-[80px] text-center text-sm">2 guests</span>
                <Button variant="ghost" size="icon" className="rounded-l-none">
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button size="lg" className="flex-1 gap-2">
                <Calendar className="size-5" />
                Book Now
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="size-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-muted">
              <div className="flex items-center gap-2">
                <Wifi className="size-5 text-primary" />
                <span className="text-sm">High-Speed WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="size-5 text-primary" />
                <span className="text-sm">Free Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="size-5 text-primary" />
                <span className="text-sm">Full Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-primary" />
                <span className="text-sm">Flexible Cancellation</span>
              </div>
            </div>

            {/* Property Tabs */}
            <Tabs defaultValue="amenities" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="policies">House Rules</TabsTrigger>
              </TabsList>
              <TabsContent value="amenities" className="mt-4 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 bg-primary rounded-full" />
                    <span>Air Conditioning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 bg-primary rounded-full" />
                    <span>Washer & Dryer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 bg-primary rounded-full" />
                    <span>Smart TV</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 bg-primary rounded-full" />
                    <span>Dishwasher</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 bg-primary rounded-full" />
                    <span>Balcony</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="size-2 bg-primary rounded-full" />
                    <span>Work Desk</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="location" className="mt-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">City Center:</span>
                    <span className="font-medium">3 min walk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Airport:</span>
                    <span className="font-medium">25 min drive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Restaurants:</span>
                    <span className="font-medium">50+ within 2 blocks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grocery Store:</span>
                    <span className="font-medium">1 block away</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="policies" className="mt-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Check-in: 3:00 PM - 10:00 PM</p>
                  <p>• Check-out: 11:00 AM</p>
                  <p>• No smoking anywhere on property</p>
                  <p>• No parties or events</p>
                  <p>• Quiet hours: 10:00 PM - 8:00 AM</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
