import { Header } from "./components/header";
import { HeroBanner } from "./components/hero-banner";
import { FilterBar } from "./features/filters/components/filter-bar";
import { Footer } from "./components/footer";
import { ProductGrid } from "./features/products/components/product-grid/product-grid";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-body">
      <Header />
      <HeroBanner />
      <FilterBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
