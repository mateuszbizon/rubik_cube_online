import BlogHeader from "@/components/BlogHeader";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <BlogHeader />
            {children}
        </main>
    )
}