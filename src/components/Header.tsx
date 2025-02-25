"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-blue-900 py-4 shadow-md z-50 w-auto max-w-7xl rounded-b-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <nav className="h-8 flex items-center ">
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