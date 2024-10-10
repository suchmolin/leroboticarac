import "./globals.css"

export const metadata = {
  title: "Codifica y Construye Robots Increíbles en Este Regreso a Clases",
  description: "LeRobotica la extracurricular perfecta para el nuevo año escolar, bríndale diversión a la tarde de tus hijos.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
