'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, AlertTriangle } from 'lucide-react';

export default function SafetyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Safety Center</h1>
        <p className="text-muted-foreground mb-8">
          Learn about our security measures and best practices for safe trading
        </p>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Trading</h3>
                  <p className="text-muted-foreground">
                    Our escrow system protects both buyers and sellers throughout the transaction process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Lock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Account Security</h3>
                  <p className="text-muted-foreground">
                    Enable two-factor authentication and use strong passwords to protect your account.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fraud Prevention</h3>
                  <p className="text-muted-foreground">
                    Learn how to identify and avoid potential scams while trading digital assets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}