import { Header } from "./components/header";
import { FilterBar } from "./features/filters/components/filter-bar";
import { Footer } from "./components/footer";
import { useProductCatalog } from "./features/products/hooks/useProductCatalog";
import { ProductGrid } from "./features/products/components/product-grid/product-grid";

export default function App() {
  const {
    visible,
    maxPrice,
    setPrice,
    brand,
    setBrand,
    fit,
    setFit,
    color,
    setColor,
    sizes,
    setSize,
    sortKey,
    setSortKey,
    totalFiltered,
    totalVisible,
    hasMore,
    loadMore,
    clearFit,
    clearBrand,
    clearColor,
    clearSizes,
    onSale,
    toggleOnSale,
    batal,
    toggleBatal,
  } = useProductCatalog();

  return (
    <div className="min-h-screen bg-gray-100 font-body">
      <Header />
      <FilterBar
        toggleBatal={toggleBatal}
        toggleOnSale={toggleOnSale}
        onSale={onSale}
        batal={batal}
        maxPrice={maxPrice}
        setPrice={setPrice}
        brand={brand}
        setBrand={setBrand}
        color={color}
        setColor={setColor}
        fit={fit}
        setFit={setFit}
        sizes={sizes}
        setSizes={setSize}
        clearFit={clearFit}
        clearBrand={clearBrand}
        clearColor={clearColor}
        clearSizes={clearSizes}
        sortKey={sortKey}
        setSortKey={setSortKey}
        totalVisible={totalVisible}
        totalFiltered={totalFiltered}
      />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Product grid */}
        <ProductGrid visible={visible} hasMore={hasMore} loadMore={loadMore} />
      </main>
      <Footer />
    </div>
  );
}
