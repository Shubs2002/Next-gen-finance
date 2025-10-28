import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Values',
  description: 'Learn about NextGen Finance - founded by experienced banking professionals with 30+ years in advances and investments. Discover our mission to provide transparent, doorstep financial services.',
  openGraph: {
    title: 'About NextGen Finance - Our Story & Values',
    description: 'Founded by experienced banking professionals with 30+ years of expertise. Providing transparent doorstep financial services.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
