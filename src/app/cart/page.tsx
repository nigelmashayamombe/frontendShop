'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [isAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-4">YOUR CART IS EMPTY</h1>
          <p className="text-muted-foreground mb-8">
            Sign in to view your cart and start shopping
          </p>
          <div className="space-y-4">
            <Button className="w-full" asChild>
              <Link href="/auth/signin">SIGN IN / REGISTER</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/marketplace">SHOP NOW</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <Button variant="outline" asChild>
            <Link href="/marketplace">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {/* Cart is empty state */}
            <Card className="p-6 text-center">
              <p className="text-muted-foreground">Your cart is empty</p>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <h2 className="font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6" disabled>
                Proceed to Checkout
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}