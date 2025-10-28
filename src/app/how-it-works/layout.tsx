import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - Our Simple 4-Step Process',
  description: 'Discover our hassle-free 4-step process: Connect with us, Document collection at doorstep, Application & approval with transparency, and ongoing support. Simple, secure, and efficient.',
  openGraph: {
    title: 'How It Works - NextGen Finance Process',
    description: 'Simple 4-step process: Connect, Document Collection, Application & Approval, Ongoing Support.',
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
