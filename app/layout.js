import Logo from "@/app//_components/Logo";
import Navigation from "@/app//_components/Navigation";

// import { Josefin_Sans } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
import "@/app//_styles/globals.css";
import Header from "@/app/_components/Header";
import Reservation from "./_components/Reservation";
import { ReservationProvider } from "./_components/ReservationContext";
export const metadata = {
  title: {
    template: "%s / Driftwood Lodge",
    default: "Welcome / Driftwood Lodge",
  },
  description:
    "Stay at Driftwood Lodge — a boutique hideaway offering rustic charm and modern comfort. Book now for a peaceful escape near nature's edge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100  min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer className="text-red-600">
          Copyright by the Driftwood Lodge
        </footer>
      </body>
    </html>
  );
}
