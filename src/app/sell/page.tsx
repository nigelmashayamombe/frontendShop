'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Upload, DollarSign, Shield } from 'lucide-react';

export default function SellPage() {
  const [category, setCategory] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Sell Your Digital Assets</h1>
          <p className="text-muted-foreground mt-2">
            List your digital assets securely and reach thousands of potential buyers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <Upload className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Easy Listing</CardTitle>
              <CardDescription>Create your listing in minutes</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Secure Payment</CardTitle>
              <CardDescription>Get paid safely through our escrow system</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Verified Buyers</CardTitle>
              <CardDescription>Connect with legitimate buyers</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Your Listing</CardTitle>
            <CardDescription>
              Fill in the details about your digital asset
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Instagram Account with 10k Followers"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="email-messaging">Email & Messaging</SelectItem>
                    <SelectItem value="gift-cards">Gift Cards</SelectItem>
                    <SelectItem value="vpn-proxy">VPN & Proxy</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (USD)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter your price"
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your digital asset in detail..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="proof">Proof of Ownership</Label>
                <Input
                  id="proof"
                  type="file"
                  className="cursor-pointer"
                  accept="image/*,.pdf"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Upload screenshots or documents proving your ownership
                </p>
              </div>

              <Button type="submit" className="w-full">
                Create Listing
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}