'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import MarketplaceFilters from '@/components/marketplace/filters';
import ProductList from '@/components/marketplace/product-list';
import { Button } from '@/components/ui/button';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-muted-foreground mt-2">
            Access all products on the marketplace by our verified sellers
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for Marketplace items..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MarketplaceFilters />
          <div className="md:col-span-3">
            <ProductList searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}