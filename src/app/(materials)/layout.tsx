import MaterialsWrapper from "@/components/common/MaterialsWrapper";
import Nav from "@/components/common/Nav";

export default function MaterialsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav />
            <main>
                <MaterialsWrapper>
                    {children}
                </MaterialsWrapper>
            </main>
        </>
    );
  }