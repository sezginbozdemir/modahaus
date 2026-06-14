import { Header } from "./components/header";
import { HeroBanner } from "./components/hero-banner";
import { FilterBar } from "./features/filters/components/filter-bar";
import { Footer } from "./components/footer";
import { ProductGrid } from "./features/products/components/product-grid/product-grid";
import { FloatingActions } from "./components/floating-actions";
import { ConsentBanner, useConsent } from "./features/consent";

export default function App() {
  const { showBanner, handleAccept, handleDecline } = useConsent();

  return (
    <div className="min-h-screen bg-gray-100 font-body">
      <Header />
      <HeroBanner />
      <FilterBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProductGrid />
      </main>
      <Footer />
      <FloatingActions />
      {showBanner && (
        <ConsentBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </div>
  );
}
