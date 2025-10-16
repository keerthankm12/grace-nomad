import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileText, Shield } from 'lucide-react';

export const VisaPage = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">
          Visa & Insurance Services
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We provide comprehensive visa assistance and travel insurance to ensure your journey is
          worry-free
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visa Services */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl text-primary">Visa Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Expert assistance for all your visa requirements
              </p>

              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Documents Required:</h3>
                <ul className="space-y-3">
                  {[
                    'Valid Passport (minimum 6 months validity)',
                    'Recent Passport-sized Photographs',
                    'Proof of Financial Funds',
                    'Confirmed Flight Bookings',
                    'Hotel Reservations / Accommodation Proof',
                    'Travel Insurance',
                    'Completed Visa Application Form',
                    'Bank Statements (last 6 months)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                Get Visa Assistance
              </Button>
            </CardContent>
          </Card>

          {/* Insurance Services */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl text-primary">Travel Insurance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Comprehensive coverage for a safe and secure journey
              </p>

              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Coverage Highlights:</h3>
                <ul className="space-y-3">
                  {[
                    'Medical Expenses up to ₹ 50,00,000',
                    'Trip Cancellation Coverage',
                    'Lost Baggage Compensation',
                    'Flight Delay / Missed Connection',
                    'Emergency Medical Evacuation',
                    'Personal Accident Coverage',
                    '24/7 Travel Assistance',
                    'COVID-19 Coverage Available',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                Get Insurance Quote
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-12 max-w-4xl mx-auto bg-secondary/30">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Help?</h3>
            <p className="text-foreground mb-6">
              Our expert team is here to guide you through the entire visa and insurance process.
              Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Call Us: +91 98450 72277
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Email: info@gracedestiny.com
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
