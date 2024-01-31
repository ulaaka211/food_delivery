"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/material";
import { CustomHeader } from "@/components";
import { CustomFooter } from "@/components";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
// import { AuthProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomHeader />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
          <CssBaseline />
        </AppRouterCacheProvider>

        <CustomFooter />
      </body>
    </html>
  );
}
