'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const careers = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Customer Support Specialist',
    department: 'Support',
    location: 'Remote',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Careers at ShrapnelTech</h1>
        <p className="text-muted-foreground mb-8">
          Join our team and help shape the future of digital asset trading
        </p>

        <div className="space-y-6">
          {careers.map((job, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Department: {job.department}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Location: {job.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Type: {job.type}
                      </p>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}