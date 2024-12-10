'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none p-6">
            <p className="text-muted-foreground mb-6">
              Last updated: March 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using ShrapneMarket, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
              <p className="mb-4">
                Users must:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate information</li>
                <li>Maintain account security</li>
                <li>Comply with all applicable laws</li>
                <li>Use the platform responsibly</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}