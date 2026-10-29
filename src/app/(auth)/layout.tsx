import { FullkodCredit } from '@/components/ui/FullkodCredit';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background pt-safe">
      {children}
      <div className="absolute inset-x-0 bottom-3 flex justify-center px-6 lg:justify-end">
        <FullkodCredit />
      </div>
    </div>
  );
}
