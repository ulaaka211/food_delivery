"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { Footer } from "@/components";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/provider/AuthenticationProvider";
import { FoodProvider } from "@/provider/FoodProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <FoodProvider>
                <Header />
                {children}
                <Footer />
              </FoodProvider>
            </AuthProvider>
            <ToastContainer />
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
