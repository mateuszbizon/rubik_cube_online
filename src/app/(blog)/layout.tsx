import BlogHeader from "@/components/common/BlogHeader";


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