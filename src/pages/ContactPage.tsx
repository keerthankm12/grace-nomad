import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-12">
          We're here to help plan your perfect journey. Reach out to us anytime!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Send us an email anytime</p>
              <a
                href="mailto:info@gracedestiny.com"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                info@gracedestiny.com
              </a>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <a
                href="tel:+919845072277"
                className="text-foreground font-semibold hover:text-primary transition-colors block"
              >
                +91 98450 72277
              </a>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Our Office</p>
              <p className="text-foreground font-semibold">
                Bangalore
                <br />
                Karnataka, India
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Info */}
        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/30">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Ready to Start Your Journey?</h2>
            <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're planning a quick getaway or an extended adventure, our team is ready to
              help you create unforgettable memories. Contact us today to discuss your travel dreams!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/919845072277"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+919845072277"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
