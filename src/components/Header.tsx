"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-blue-900 py-4 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <nav className="h-16 flex items-center ">
                    <ul className="flex gap-6 px-6">
                        <li>
                            <Link
                                href="/"
                                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium block"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium block"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/forecast"
                                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium block"
                            >
                                Forecast
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}