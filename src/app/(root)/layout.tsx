import RootHeader from "@/components/RootHeader";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
            <RootHeader />
            {children}
        </main>
    );
  }