"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { Footer } from "@/components";
import {
  ThemeProvider,
  CssBaseline,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider, useAuth } from "@/provider/AuthenticationProvider";
import { FoodProvider } from "@/provider/FoodProvider";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <FoodProvider>
                {loading ? (
                  <Backdrop
                    open={loading}
                    sx={{
                      bgcolor: "white",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                  >
                    <CircularProgress
                      sx={{
                        color: "primary.main",
                      }}
                    />
                  </Backdrop>
                ) : (
                  <>
                    <Header />
                    {children}
                    <Footer />
                  </>
                )}
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
