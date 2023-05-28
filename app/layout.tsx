import './globals.css'
import Navbar from './components/navbar/Navbar';
import CarsCanvas from './components/canvas/Cars';

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
        <div className="pb-20 pt-28">
          {children}
        </div>
        
      </body>
    </html>
  )
}
