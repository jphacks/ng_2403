import BottomNav from "@/components/parts/bottom-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <BottomNav />
    </div>
  );
}
