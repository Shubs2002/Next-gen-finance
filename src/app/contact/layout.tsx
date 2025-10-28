import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact NextGen Finance for doorstep financial services. Schedule a consultation, send us a message, or book a meeting. We are here to help with your financial needs.',
  openGraph: {
    title: 'Contact NextGen Finance',
    description: 'Get in touch for doorstep financial services. Schedule a consultation or send us a message.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
