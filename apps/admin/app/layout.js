import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Admin Panel',
  description: 'Monorepo admin dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100 text-gray-900 antialiased">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="bg-white border-b border-gray-200 px-8 py-4">
            <h1 className="text-sm font-medium text-gray-500">Monorepo Admin</h1>
          </header>
          <main className="flex-1 px-8 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
