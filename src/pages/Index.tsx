import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { DestinationsPage } from '@/pages/DestinationsPage';
import { PackageDetailPage } from '@/pages/PackageDetailPage';
import { BookingsPage } from '@/pages/BookingsPage';
import { VisaPage } from '@/pages/VisaPage';
import { ContactPage } from '@/pages/ContactPage';

type Page = 'home' | 'destinations' | 'bookings' | 'visa' | 'contact' | 'packageDetail';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    setCurrentPage('packageDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDestinations = () => {
    setCurrentPage('destinations');
    setSelectedPackageId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && <HomePage onViewPackage={handleViewPackage} />}
      {currentPage === 'destinations' && <DestinationsPage onViewPackage={handleViewPackage} />}
      {currentPage === 'bookings' && <BookingsPage />}
      {currentPage === 'visa' && <VisaPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'packageDetail' && selectedPackageId && (
        <PackageDetailPage
          packageId={selectedPackageId}
          onBack={handleBackToDestinations}
        />
      )}

      <WhatsAppButton />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
