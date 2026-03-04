import "./globals.css";
export const metadata = {
  title: "AI Movie Insight Builder",
  description: "Analyze movie sentiment using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}