import './globals.css';

export const metadata = {
  title: 'Monorepo Web',
  description: 'Web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
