import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex flex-col min-h-screen', className);

  return (
    <div className={wrapperStyles}>
      <header className="bg-[#ea5b0b]">{/* <Navigation /> */}</header>
      <main className="flex-1 bg-[white]">{children}</main>
    </div>
  );
};
