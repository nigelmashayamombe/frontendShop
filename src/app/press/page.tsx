'use client';

import { Card, CardContent } from '@/components/ui/card';

const pressReleases = [
  {
    date: '2024-03-15',
    title: 'ShrapnelTech Launches New Security Features',
    summary: 'Enhanced protection for digital asset trading with advanced encryption.',
  },
  {
    date: '2024-02-28',
    title: 'Record Growth in Q4 2023',
    summary: 'Platform achieves milestone of 1 million successful transactions.',
  },
];

export default function PressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Press Releases</h1>
        <p className="text-muted-foreground mb-8">
          Latest news and updates from ShrapnelTech
        </p>

        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {new Date(release.date).toLocaleDateString()}
                  </p>
                  <h3 className="text-xl font-semibold">{release.title}</h3>
                  <p className="text-muted-foreground">{release.summary}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}