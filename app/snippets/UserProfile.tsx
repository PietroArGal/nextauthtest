'use client';

import { useSession } from "next-auth/react";

export const UserProfile = () => {

    const { data: session } = useSession();

    return (
        <div>
            {session?.user ? (
                <span>DNI: {session.user.id}</span>
            ) : null}
        </div>
    )
}