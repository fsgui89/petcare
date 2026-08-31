import type { Metadata } from "next";

import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { AppointmentProvider } from "@/hooks/useAppointments";

export const metadata: Metadata = {
  title: "PetCare",
  description:
    "Sistema moderno de agendamento para pet shops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppointmentProvider>
          <Header />

          {children}

          <Footer />
        </AppointmentProvider>
      </body>
    </html>
  );
}