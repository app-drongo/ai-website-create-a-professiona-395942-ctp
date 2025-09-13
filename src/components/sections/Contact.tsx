'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Calendar,
  Home,
  Shield,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call or Text',
      description: 'Quick response for urgent inquiries',
      contact: '+1 (555) 789-2468',
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Direct',
      description: 'Detailed booking inquiries welcome',
      contact: 'reservations@citystayapartments.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Instant messaging for quick questions',
      contact: 'Available 8AM - 10PM',
      action: 'Message Us',
    },
  ];

  const supportTopics = [
    {
      icon: Calendar,
      title: 'Booking & Availability',
      description: 'Check dates, rates, and make reservations',
    },
    {
      icon: Home,
      title: 'Property Information',
      description: 'Amenities, location details, and apartment features',
    },
    {
      icon: Shield,
      title: 'Policies & Guidelines',
      description: 'Check-in process, house rules, and cancellation policy',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Contact Your Host
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Book Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Perfect Stay?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our apartments? Need help with booking? We're here to help make
            your stay in the city comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Tell us about your travel dates and we'll help you find the perfect apartment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Interested Property
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select an apartment (optional)</option>
                    <option value="downtown-studio">Downtown Studio - Modern & Central</option>
                    <option value="downtown-1br">Downtown 1BR - City Views</option>
                    <option value="downtown-2br">Downtown 2BR - Executive Suite</option>
                    <option value="residential-1br">Residential 1BR - Quiet Neighborhood</option>
                    <option value="residential-2br-garden">Residential 2BR - Garden View</option>
                    <option value="residential-2br-family">
                      Residential 2BR - Family Friendly
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Hi! I'm looking for accommodation from March 15-20 for 2 guests. Could you please check availability and rates? Any recommendations based on our needs would be great!"
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Inquiry
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Reach Your Host
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Support Topics */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="size-5 text-primary" />
                How We Can Help
              </h3>
              <div className="space-y-3">
                {supportTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div key={index} className="p-4 border border-border/50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Icon className="size-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold">{topic.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Response Times & Availability */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Response Times
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Phone/WhatsApp</span>
                    <Badge variant="secondary">Within 1 hour</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Email inquiries</span>
                    <Badge variant="secondary">Within 4 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Booking confirmations</span>
                    <Badge variant="secondary">Within 2 hours</Badge>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    Available 7 days a week for guest support
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <MapPin className="size-5 text-primary" />
                  Our Properties
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Downtown Locations</p>
                    <p className="text-muted-foreground">
                      Walking distance to restaurants, shopping, and attractions
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Residential Areas</p>
                    <p className="text-muted-foreground">
                      Quiet neighborhoods with local charm and easy transit access
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
