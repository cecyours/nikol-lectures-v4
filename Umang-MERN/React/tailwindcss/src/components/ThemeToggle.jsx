import { useEffect, useState } from "react";

export default function ThemeToggle() {
 

    return (
        <div className="min-h-screen bg-blue-500 text-black   dark:bg-red-900 dark:text-yellow-500 transition-colors duration-300">
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">

                <h1 className="text-5xl font-bold">
                    Tailwind v4 Theme
                </h1>

            </div>
        </div>
    );
}