import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'My App',
  description: 'A modern application with an equation generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  )
} 