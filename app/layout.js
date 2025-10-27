export const metadata = { title: "Vejen", description: "Økonomisk rådgivning" };

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="bg-neutral-50 text-neutral-800">{children}</body>
    </html>
  );
}
