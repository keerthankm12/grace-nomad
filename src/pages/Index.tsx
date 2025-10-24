import { useState } from 'react';
import { Header } from '@/components/Header';
import { NewHomePage } from '@/pages/NewHomePage';
import { NewDestinationsPage } from '@/pages/NewDestinationsPage';
import { TripDetailPage } from '@/pages/TripDetailPage';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { NewFooter } from '@/components/NewFooter';

type Page = 'home' | 'destinations' | 'hotel' | 'flights' | 'cruise' | 'visa' | 'tripDetail' | 'contact' | 'about' | 'gallery' | 'blogs';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTripSelect = (tripId: string) => {
    setSelectedTripId(tripId);
    setCurrentPage('tripDetail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDestinations = () => {
    setCurrentPage('destinations');
    setSelectedTripId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPlaceholderPage = (title: string) => (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600">This page is coming soon!</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onTripSelect={handleTripSelect}
      />
      
      {currentPage === 'home' && <NewHomePage onTripSelect={handleTripSelect} />}
      {currentPage === 'destinations' && <NewDestinationsPage onTripSelect={handleTripSelect} />}
      {currentPage === 'hotel' && renderPlaceholderPage('Hotels')}
      {currentPage === 'flights' && renderPlaceholderPage('Flights')}
      {currentPage === 'cruise' && renderPlaceholderPage('Cruise')}
      {currentPage === 'visa' && renderPlaceholderPage('Visa & Travel Insurance')}
      {currentPage === 'contact' && renderPlaceholderPage('Contact Us')}
      {currentPage === 'about' && renderPlaceholderPage('About Us')}
      {currentPage === 'gallery' && renderPlaceholderPage('Gallery')}
      {currentPage === 'blogs' && renderPlaceholderPage('Blogs')}
      {currentPage === 'tripDetail' && selectedTripId && (
        <TripDetailPage
          tripId={selectedTripId}
          onBack={handleBackToDestinations}
        />
      )}

      <WhatsAppButton />
      <NewFooter onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
