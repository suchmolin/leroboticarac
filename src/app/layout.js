import "./globals.css"

export const metadata = {
  title: "LeRobotica - Regreso a Clases",
  description: "LeRobotica - Regreso a Clases",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
