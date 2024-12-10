'use client';

import { Heart, MessageCircle, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  seller: {
    name: string;
    verified: boolean;
  };
}

const mockProducts: Product[] = [
  {
    id: '1',
    title: '2021 Instagram account with 100+ followers',
    description: 'This account has strong and maintenance included, comes with email and 2fa code',
    price: 50,
    category: 'Social Media',
    image: '/instagram-logo.png',
    seller: {
      name: 'MarryKings',
      verified: true,
    },
  },
  {
    id: '2',
    title: 'Two years Telegram account with 100+ followers',
    description: 'Account has strong and maintenance included, comes with email and 2fa code',
    price: 50,
    category: 'Social Media',
    image: '/telegram-logo.png',
    seller: {
      name: 'Mayper',
      verified: true,
    },
  },
];

interface ProductListProps {
  searchQuery: string;
}

export default function ProductList({ searchQuery }: ProductListProps) {
  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="p-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {product.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg">${product.price}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary">
                    {product.seller.name}
                    {product.seller.verified && ' ✓'}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}