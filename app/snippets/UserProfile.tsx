'use client';

import React, { Suspense } from 'react';
import { useSession } from "next-auth/react";

export const UserProfile = () => {

    const { data: session } = useSession();

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {session?.user ? (
                    <div>
                        <p>Email: {session.user.email}</p>
                        <p>Nombre: {session.user.name}</p>
                    </div>
                ) : null}
            </Suspense>
        </>
    )
}