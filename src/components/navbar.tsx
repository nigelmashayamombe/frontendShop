'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { NotificationDropdown } from '@/components/notification-dropdown';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated] = useState(false); // Replace with actual auth state

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

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/marketplace" className="hover:text-primary">
                Marketplace
              </Link>
              <Link href="/categories" className="hover:text-primary">
                Categories
              </Link>
              <Link href="/sell" className="hover:text-primary">
                Sell
              </Link>
              <ModeToggle />
              <NotificationDropdown />
              {isAuthenticated ? (
                <ProfileDropdown />
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
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
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
            {isAuthenticated ? (
              <div className="px-3 py-2">
                <ProfileDropdown />
              </div>
            ) : (
              <div className="px-3 py-2 space-y-2">
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}