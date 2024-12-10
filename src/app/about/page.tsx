'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none p-6">
            <p className="text-lg mb-6">
              Welcome to Acctbazaar, the leading marketplace for digital assets. We provide a secure and reliable platform for buying and selling digital accounts, ensuring safe transactions for all our users.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              To create a trusted ecosystem where buyers and sellers can safely trade digital assets with confidence and peace of mind.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Secure escrow system for all transactions</li>
              <li>Verified sellers and authentic accounts</li>
              <li>24/7 customer support</li>
              <li>Competitive pricing</li>
              <li>User-friendly platform</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Trust and transparency in all operations</li>
              <li>Customer satisfaction as our top priority</li>
              <li>Innovation in digital asset trading</li>
              <li>Community-driven growth</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}