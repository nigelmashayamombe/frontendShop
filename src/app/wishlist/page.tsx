'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const [isAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-4">YOUR WISHLIST IS EMPTY</h1>
          <p className="text-muted-foreground mb-8">
            Sign in to view your wishlist and start adding items
          </p>
          <div className="space-y-4">
            <Button className="w-full" asChild>
              <Link href="/auth/signin">SIGN IN / REGISTER</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/marketplace">BROWSE PRODUCTS</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">Your wishlist is empty</p>
          <Button className="mt-4" asChild>
            <Link href="/marketplace">Browse Products</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}