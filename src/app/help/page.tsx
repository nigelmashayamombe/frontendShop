'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'To create an account, click on the "Sign Up" button in the top right corner and follow the registration process.',
  },
  {
    question: 'How does the escrow system work?',
    answer: 'Our escrow system holds the payment until both buyer and seller confirm the transaction is complete, ensuring safe trades.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept major credit cards, PayPal, and cryptocurrency payments.',
  },
];

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-muted-foreground mb-8">
          Find answers to frequently asked questions and get support
        </p>

        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}