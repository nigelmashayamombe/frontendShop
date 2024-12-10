'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { NotificationDropdown } from '@/components/notification-dropdown';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { ShoppingBag, Menu, X, Heart, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated] = useState(false);
  const cartCount = 0;
  const wishlistCount = 0;

  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="text-xl font-bold">ShrapnelMarket</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <Link href="/marketplace" className="hover:text-primary">
                Marketplace
              </Link>
              <Link href="/categories" className="hover:text-primary">
                Categories
              </Link>
              <Link href="/sell" className="hover:text-primary">
                Sell
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <ModeToggle />
            <NotificationDropdown />
            <ProfileDropdown isAuthenticated={isAuthenticated} />
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/marketplace"
              className="block px-3 py-2 hover:bg-accent rounded-md"
            >
              Marketplace
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-2 hover:bg-accent rounded-md"
            >
              Categories
            </Link>
            <Link
              href="/sell"
              className="block px-3 py-2 hover:bg-accent rounded-md"
            >
              Sell
            </Link>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Link href="/wishlist">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <ModeToggle />
              <NotificationDropdown />
              <ProfileDropdown isAuthenticated={isAuthenticated} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}