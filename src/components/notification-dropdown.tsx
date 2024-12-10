'use client';

import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Message',
    message: 'You have received a new message from John',
    time: '5m ago',
    read: false,
  },
  {
    id: '2',
    title: 'Order Update',
    message: 'Your order #123 has been processed',
    time: '1h ago',
    read: false,
  },
  {
    id: '3',
    title: 'Price Alert',
    message: 'An item in your wishlist is now on sale',
    time: '2h ago',
    read: true,
  },
];

export function NotificationDropdown() {
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {mockNotifications.map((notification) => (
          <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4">
            <div className="flex items-center justify-between w-full">
              <span className="font-medium">{notification.title}</span>
              <span className="text-xs text-muted-foreground">{notification.time}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-center">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}