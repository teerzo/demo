'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {


    return (
        <footer className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <p className="text-gray-500">© 2024 Lilly's</p>
                </div>
            </div>
        </footer>
    );
}