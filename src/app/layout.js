import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import ChakraUIProvider from '@/context/ChakraUIProvider'


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
}
