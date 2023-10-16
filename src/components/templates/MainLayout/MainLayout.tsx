import { ReactNode } from 'react';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles}>
      <header className="bg-[#ea5b0b] p-4">
        <Navigation />
      </header>
      <main className="flex-1 bg-[#ebebeb]">{children}</main>
      <Footer />
    </div>
  );
};
