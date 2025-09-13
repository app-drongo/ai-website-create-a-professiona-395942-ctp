import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Home,
  Calendar,
  Shield,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Properties',
      links: [
        { name: 'All Apartments', href: '/properties' },
        { name: 'Downtown Studios', href: '/properties?type=studio' },
        { name: 'One Bedroom', href: '/properties?type=1br' },
        { name: 'Two Bedroom', href: '/properties?type=2br' },
        { name: 'Availability Calendar', href: '/availability' },
        { name: 'Instant Booking', href: '/book-now' },
      ],
    },
    {
      title: 'Guest Services',
      links: [
        { name: 'About Your Host', href: '/about-host' },
        { name: 'Guest Reviews', href: '/reviews' },
        { name: 'Check-in Process', href: '/check-in' },
        { name: 'Local Recommendations', href: '/local-guide' },
        { name: 'Concierge Services', href: '/concierge' },
        { name: 'Emergency Support', href: '/support' },
      ],
    },
    {
      title: 'Booking Info',
      links: [
        { name: 'Booking Policies', href: '/policies' },
        { name: 'Cancellation Terms', href: '/cancellation' },
        { name: 'House Rules', href: '/house-rules' },
        { name: 'Pricing & Fees', href: '/pricing' },
        { name: 'Group Bookings', href: '/group-stays' },
        { name: 'Extended Stays', href: '/monthly-rates' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Frequently Asked', href: '/faq' },
        { name: 'Booking Help', href: '/booking-help' },
        { name: 'Payment Options', href: '/payment' },
        { name: 'Travel Insurance', href: '/insurance' },
        { name: 'Accessibility Info', href: '/accessibility' },
        { name: 'Safety Guidelines', href: '/safety' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/citystayapartments' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/citystayapartments' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/citystayapts' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Home className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">City Stay Apartments</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Premium furnished apartments for your perfect city getaway. Six carefully curated
                properties offering the comfort of home with hotel-quality service. Book direct and
                save on fees.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">reservations@citystayapartments.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) CITY-STAY</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Downtown & Residential Districts</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Offers</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email for special rates"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get early access to seasonal rates and last-minute deals. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-border/50 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="size-4 text-primary" />
                <span>Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-primary" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <span>24/7 Guest Support</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">4.9★</span> Average Guest Rating
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 City Stay Apartments. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Hosted with <Heart className="size-3 text-primary fill-current" /> since 2019
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/property-sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Property Map
            </Link>
            <Link
              href="/guest-portal"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Guest Portal
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
