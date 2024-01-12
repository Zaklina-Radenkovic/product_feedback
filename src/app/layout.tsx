import { Metadata } from 'next';
import { FeedbackProvider } from '@/state/feedback';
import { SortedFeedbackProvider } from '@/state/sortedFeedback';
import { CommentsProvider } from '@/state/comments';
import './globals.css';

import { Jost } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

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
          <CommentsProvider>
            <SortedFeedbackProvider>{children}</SortedFeedbackProvider>
          </CommentsProvider>
        </FeedbackProvider>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: '#ad1fea',
              color: '#f7f8fd',
            },
          }}
        />
      </body>
    </html>
  );
}
