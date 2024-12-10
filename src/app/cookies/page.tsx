'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <Card>
          <CardContent className="prose dark:prose-invert max-w-none p-6">
            <p className="text-muted-foreground mb-6">
              Last updated: March 15, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve your experience</li>
                <li>Provide personalized content</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}