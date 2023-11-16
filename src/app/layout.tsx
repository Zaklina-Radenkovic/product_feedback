import { Metadata } from 'next';
import { FeedbackProvider } from '@/state/feedback';
import { SortedFeedbackProvider } from '@/state/sortedFeedback';
import { CommentsProvider } from '@/state/comments';
import './globals.css';

import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Product feedback app',
  description: '',
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
          <SortedFeedbackProvider>
            <CommentsProvider>{children}</CommentsProvider>
          </SortedFeedbackProvider>
        </FeedbackProvider>
      </body>
    </html>
  );
}
