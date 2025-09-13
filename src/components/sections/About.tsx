import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Home,
  MapPin,
  Calendar,
  Shield,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Home,
      title: 'Exceptional Properties',
      description:
        'Each apartment is carefully selected, professionally furnished, and maintained to the highest standards for your comfort.',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description:
        'As local hosts, we provide personalized recommendations and 24/7 support to make your stay memorable.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description:
        'Professional cleaning protocols, secure booking process, and verified guest reviews ensure peace of mind.',
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description:
        'Our apartments are strategically located in the best neighborhoods, close to attractions, dining, and transport.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Hosting Since', icon: Award },
    { value: '2,500+', label: 'Happy Guests', icon: Users },
    { value: '4.9', label: 'Average Rating', icon: Star },
    { value: '6', label: 'Premium Properties', icon: Home },
  ];

  const team = [
    {
      name: 'Maria Santos',
      role: 'Founder & Host',
      image: 'MS',
      bio: 'Local hospitality expert with 8+ years managing premium vacation rentals.',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Property Manager',
      image: 'CR',
      bio: 'Ensures every apartment meets our high standards for cleanliness and comfort.',
    },
    {
      name: 'Ana Martinez',
      role: 'Guest Experience',
      image: 'AM',
      bio: 'Your local concierge for recommendations and 24/7 guest support.',
    },
    {
      name: 'Diego Lopez',
      role: 'Maintenance Lead',
      image: 'DL',
      bio: 'Keeps all properties in perfect condition with rapid response times.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About City Stay Apartments
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Home Away From Home in
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              The Heart of the City
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a family-owned business dedicated to providing exceptional short-term
            accommodations that combine the comfort of home with the convenience of hotel-style
            service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by Maria Santos, a local hospitality professional, City Stay
                Apartments began with a simple vision: to offer travelers authentic, comfortable
                accommodations without the impersonal feel of traditional hotels.
              </p>
              <p>
                Starting with just two apartments, we've grown to six carefully curated properties
                across the city's most desirable neighborhoods. Each apartment reflects our
                commitment to quality, comfort, and the personal touch that makes every stay
                special.
              </p>
              <p>
                Today, we're proud to have hosted over 2,500 guests from around the world,
                maintaining our 4.9-star rating through personalized service and attention to
                detail.
              </p>
            </div>
            <Button className="group">
              View Our Properties
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every guest deserves to feel at home, no matter how far they've traveled."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Maria Santos, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground">
              The principles that guide our hospitality and ensure every guest has an exceptional
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Your Hosts</h3>
            <p className="text-muted-foreground">
              The dedicated team working behind the scenes to ensure your stay is perfect from
              check-in to check-out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Contact Our Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Guest Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Absolutely perfect stay! The apartment was immaculate, beautifully furnished, and
                Maria's local recommendations made our vacation unforgettable. Will definitely book
                again!"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RJ
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Johnson</div>
                  <div className="text-sm text-muted-foreground">Guest from Toronto, Canada</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-border/50 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience City Stay?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Browse our collection of premium apartments and discover why guests choose City Stay
                for their perfect vacation rental experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Book Now
                  <Calendar className="ml-2 size-4" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  View All Properties
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
