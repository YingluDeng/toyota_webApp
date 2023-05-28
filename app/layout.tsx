import './globals.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/homePage/Home';

export const metadata = {
  title: 'Toyota Designer Platform',
  description: 'Toyota Designer Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
