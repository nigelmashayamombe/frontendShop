'use client';

import { User, ShoppingCart, MessageCircle, Heart, History, Gift, Settings, LogOut, UserCircle, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export function ProfileDropdown({ isAuthenticated = false }) {
  const menuItems = isAuthenticated ? (
    <>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/profile" className="flex items-center">
          <UserCircle className="mr-2 h-4 w-4" />
          My Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/orders" className="flex items-center">
          <ShoppingCart className="mr-2 h-4 w-4" />
          My Orders
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/messages" className="flex items-center">
          <MessageCircle className="mr-2 h-4 w-4" />
          My Messages
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/wishlist" className="flex items-center">
          <Heart className="mr-2 h-4 w-4" />
          My Wishlist
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/coupons" className="flex items-center">
          <Gift className="mr-2 h-4 w-4" />
          My Coupons
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/history" className="flex items-center">
          <History className="mr-2 h-4 w-4" />
          Recently Viewed
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/payment-methods" className="flex items-center">
          <CreditCard className="mr-2 h-4 w-4" />
          Payment Methods
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/security" className="flex items-center">
          <Shield className="mr-2 h-4 w-4" />
          Security
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/settings" className="flex items-center">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-red-600">
        <LogOut className="mr-2 h-4 w-4" />
        Sign out
      </DropdownMenuItem>
    </>
  ) : (
    <>
      <DropdownMenuItem asChild>
        <Link href="/auth/signin" className="flex items-center">
          Sign In
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/auth/signup" className="flex items-center">
          Sign Up
        </Link>
      </DropdownMenuItem>
    </>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {menuItems}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}