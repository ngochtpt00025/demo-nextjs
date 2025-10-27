import Link from 'next/link';
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
