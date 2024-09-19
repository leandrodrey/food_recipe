import {Inter} from "next/font/google";
import "@/public/globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Food Recipes APP",
    description: "This application is a food recipe app that allows users to search for recipes, view ratings, and save their favorite recipes.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="text-sm flex min-h-screen flex-col items-center p-4">
            <div className="w-1/3">
                {children}
            </div>
        </main>
        </body>
        </html>
    );
}
