'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';


export default function Home() {
  const { user } = useAuth({ middleware: 'guest' })

  return (
    <>
      <Head>
        <title>Laravel</title>
      </Head>

      <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
          {user ? (
            <Link
              href="/dashboard"
              className="ml-4 text-sm text-gray-700 underline">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm text-gray-700 underline">
                Login
              </Link>

              <Link
                href="/register"
                className="ml-4 text-sm text-gray-700 underline">
                Register
              </Link>
            </>
          )}
        </div>
        </div>
  <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              The Trusted Marketplace for Digital Assets
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Buy and sell digital assets securely. From social media accounts to gaming accounts,
              we've got you covered with our escrow-protected marketplace.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/marketplace">
                  Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sell">Start Selling</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShrapnelMarket?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Our escrow system ensures your money and assets are protected throughout the transaction.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Users</h3>
              <p className="text-muted-foreground">
                All sellers are verified to ensure a trustworthy marketplace environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
              <p className="text-muted-foreground">
                Quick and seamless transactions with real-time chat support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}