import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Users,
  Mail,
  Gift,
  Shield,
  ShoppingBag,
  Gamepad2,
} from 'lucide-react';

const categories = [
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Social media accounts with established following',
    icon: Users,
    count: 145,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    id: 'email-messaging',
    name: 'Email & Messaging',
    description: 'Email accounts and messaging service credentials',
    icon: Mail,
    count: 89,
    color: 'bg-green-500/10 text-green-500',
  },
  {
    id: 'gift-cards',
    name: 'Gift Cards',
    description: 'Digital gift cards from popular retailers',
    icon: Gift,
    count: 56,
    color: 'bg-yellow-500/10 text-yellow-500',
  },
  {
    id: 'vpn-proxy',
    name: 'VPN & Proxy',
    description: 'VPN accounts and proxy services',
    icon: Shield,
    count: 34,
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    description: 'Digital marketplace accounts and services',
    icon: ShoppingBag,
    count: 23,
    color: 'bg-pink-500/10 text-pink-500',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Gaming accounts and digital items',
    icon: Gamepad2,
    count: 78,
    color: 'bg-red-500/10 text-red-500',
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Browse Categories</h1>
          <p className="text-muted-foreground mt-2">
            Explore our wide range of digital assets across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/marketplace?category=${category.id}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{category.name}</h3>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}