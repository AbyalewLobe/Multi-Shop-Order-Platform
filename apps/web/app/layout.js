import './globals.css';
import Nav from './components/Nav';

export const metadata = {
  title: 'Monorepo Web',
  description: 'Web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
