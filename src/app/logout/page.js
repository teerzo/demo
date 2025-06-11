
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem('lilly-barcode');
        router.push('/');
    }, []);

    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}