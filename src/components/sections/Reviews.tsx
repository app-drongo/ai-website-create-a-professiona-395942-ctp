import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ThumbsUp, Check, Filter, ChevronDown, MessageSquare, Award } from 'lucide-react';

export default function PropertyReviews() {
  const reviews = [
    {
      id: 1,
      author: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 days ago',
      property: 'Downtown Executive Studio',
      verified: true,
      helpful: 12,
      title: 'Perfect location for business travel',
      content:
        'This studio apartment exceeded my expectations! Located right in the heart of downtown, I could walk to all my meetings. The space is modern, spotlessly clean, and has everything needed for a comfortable stay. The kitchen is fully equipped and the workspace area was perfect for my laptop work. Maria was incredibly responsive and provided excellent local recommendations.',
      pros: ['Prime downtown location', 'Modern amenities', 'Excellent host communication'],
      stayDate: 'November 2024',
    },
    {
      id: 2,
      author: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 week ago',
      property: 'Riverside Two-Bedroom Apartment',
      verified: true,
      helpful: 18,
      title: 'Amazing family stay by the river',
      content:
        'We stayed here with our two kids and it was absolutely perfect. The apartment is spacious, beautifully furnished, and the river views from the balcony are stunning. The kids loved watching the boats go by. The location is quiet but still close to restaurants and attractions. Parking was convenient and the building felt very secure. Will definitely book again!',
      pros: ['Spacious for families', 'Beautiful river views', 'Safe neighborhood'],
      stayDate: 'November 2024',
    },
    {
      id: 3,
      author: 'Sophie Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      property: 'Historic District One-Bedroom',
      verified: true,
      helpful: 24,
      title: 'Charming apartment in perfect location',
      content:
        'This apartment is a gem! Located in the historic district, we could walk to museums, cafes, and shops. The apartment itself is beautifully decorated with a perfect blend of historic charm and modern comfort. The bed was incredibly comfortable and the bathroom renovation is gorgeous. The host provided a detailed guidebook with local recommendations that made our stay even better.',
      pros: ['Historic charm', 'Walking distance to attractions', 'Comfortable furnishings'],
      stayDate: 'October 2024',
    },
    {
      id: 4,
      author: 'David Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 4,
      date: '3 weeks ago',
      property: 'Garden View Studio',
      verified: true,
      helpful: 9,
      title: 'Peaceful retreat with lovely garden',
      content:
        "Really enjoyed our stay at this cozy studio. The garden view is so peaceful and relaxing - perfect for morning coffee. The apartment is well-maintained and has everything you need. Only minor issue was the shower pressure could be stronger, but overall it's a great value for money. The residential area is quiet and safe, with easy access to public transport.",
      pros: ['Peaceful garden setting', 'Great value', 'Quiet neighborhood'],
      stayDate: 'October 2024',
    },
    {
      id: 5,
      author: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Modern Loft Two-Bedroom',
      verified: true,
      helpful: 31,
      title: 'Stunning modern loft - highly recommend!',
      content:
        'This loft is absolutely beautiful! The high ceilings and large windows make it feel so spacious and bright. The modern kitchen is a dream - we cooked several meals and had everything we needed. Both bedrooms are comfortable with quality linens. The location offers easy access to both downtown and the airport. The host was professional and accommodating. This is definitely our go-to place for future visits!',
      pros: ['Spacious modern design', 'Fully equipped kitchen', 'Convenient location'],
      stayDate: 'October 2024',
    },
    {
      id: 6,
      author: 'Robert Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Cozy Residential One-Bedroom',
      verified: true,
      helpful: 15,
      title: 'Perfect home away from home',
      content:
        "This apartment felt like a true home away from home. Located in a lovely residential area, it's quiet and peaceful but still close to everything. The apartment is thoughtfully furnished with personal touches that make it special. The kitchen is well-stocked, the living area is comfortable for relaxing, and the bedroom is very restful. Great communication from the host and seamless check-in process.",
      pros: ['Homey atmosphere', 'Residential quiet area', 'Thoughtful amenities'],
      stayDate: 'September 2024',
    },
  ];

  const stats = {
    average: 4.9,
    total: 127,
    distribution: [
      { stars: 5, count: 108 },
      { stars: 4, count: 15 },
      { stars: 3, count: 3 },
      { stars: 2, count: 1 },
      { stars: 1, count: 0 },
    ],
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Guest Reviews & Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes City Stay Apartments the preferred choice for travelers seeking
            quality accommodations
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                {/* Overall Rating */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(stats.average)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {stats.total} verified stays
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-6">
                  {stats.distribution.map(item => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-3">{item.stars}</span>
                      <Star className="size-4 fill-primary text-primary" />
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.count / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 border-t border-muted pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-primary" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Professional host</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="size-4 text-primary" />
                    <span>Responsive communication</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="size-4" />
                  All Properties
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Property Type
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Rating
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                Most Recent
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Review Cards */}
            {reviews.map(review => (
              <Card key={review.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs gap-1">
                              <Check className="size-3" />
                              Verified Stay
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>Stayed {review.stayDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Property Badge */}
                  <Badge variant="outline" className="mb-3 text-primary border-primary/20">
                    {review.property}
                  </Badge>

                  {/* Review Content */}
                  <h5 className="font-semibold text-foreground mb-2">{review.title}</h5>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                  {/* Pros */}
                  {review.pros && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.pros.map((pro, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="gap-1 bg-primary/10 text-primary border-primary/20"
                        >
                          <Check className="size-3" />
                          {pro}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <MessageSquare className="size-4" />
                      Host Response
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg" className="px-8">
                View All {stats.total} Reviews
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                See reviews from all City Stay Apartments properties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
