import { Metadata } from "next";
import { FeedbackProvider } from "@/state/feedback";
import "./globals.css";

import { Jost } from "next/font/google";
import { SortedFeedbackProvider } from "@/state/sortedFeedback";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product feedback app",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body>
        <FeedbackProvider>
          <SortedFeedbackProvider>{children}</SortedFeedbackProvider>
        </FeedbackProvider>
      </body>
    </html>
  );
}
