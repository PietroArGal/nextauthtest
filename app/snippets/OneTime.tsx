'use client';

import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react'

export const OneTime = () => {

    const { data: session } = useSession();
    const [showAdditionalInterface, setShowAdditionalInterface] = useState(false);

    useEffect(() => {
        if (session?.user?.image === undefined || null) {
            setShowAdditionalInterface(true);
        } else {
            console.log(session?.user?.image)
        }
    }, []);

    const handleAdditionalInterfaceSubmit = (data: any) => {

        setShowAdditionalInterface(false);
    };

    return (
        <>
            {showAdditionalInterface && (
                <div>
                    <h2>Completa tus datos adicionales</h2>
                    <button onClick={handleAdditionalInterfaceSubmit}>Guardar</button>
                </div>
            )}
        </>
    )
}