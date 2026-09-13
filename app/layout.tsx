import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testify AI | AI-Powered Automation Testing Agent",
  description: "TestifyAI - AI-powered testing Agent",
};
const isClerkConfigured =
  !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !!process.env.CLERK_SECRET_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isClerkConfigured) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body style={{ margin: 0, padding: 0 }}>
            {children}
          </body>
        </html>
      </ClerkProvider>
    );
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0, padding: 0 }}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
