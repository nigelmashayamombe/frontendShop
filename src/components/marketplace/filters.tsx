'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function MarketplaceFilters() {
  const [priceRange, setPriceRange] = useState([30, 250]);

  const categories = [
    { id: 'social-media', name: 'Social Media', count: 145 },
    { id: 'email-messaging', name: 'Email & Messaging Service', count: 89 },
    { id: 'gift-cards', name: 'Gift Cards', count: 56 },
    { id: 'vpn-proxy', name: 'VPN & PROXY', count: 34 },
    { id: 'marketplace', name: 'Marketplace', count: 23 },
    { id: 'gaming', name: 'Gaming', count: 78 },
  ];

  return (
    <div className="bg-card p-6 rounded-lg border">
      <h2 className="font-semibold mb-4">Filter</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Account Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category.id}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor={category.id}
                    className="ml-2 text-sm text-muted-foreground flex-1"
                  >
                    {category.name}
                  </label>
                  <span className="text-xs text-muted-foreground">
                    ({category.count})
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[30, 250]}
                max={250}
                min={0}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}