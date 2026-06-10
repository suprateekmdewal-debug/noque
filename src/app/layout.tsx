import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOQ — Skip the Queue. Book Your Slot.",
  description: "WhatsApp-based queue-free slot booking for local businesses in India. No app downloads, no waiting. Just book via WhatsApp.",
  keywords: "slot booking, queue management, WhatsApp booking, Jaipur, Tier 2 cities, barber appointment, clinic booking",
  openGraph: {
    title: "NOQ — Skip the Queue. Book Your Slot.",
    description: "WhatsApp-based queue-free slot booking for local businesses in India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
