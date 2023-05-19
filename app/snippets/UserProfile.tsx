'use client';

import { useSession } from "next-auth/react";

export const UserProfile = () => {

    const { data: session } = useSession();

    return (
        <div>
            {session?.user ? (
                <span>DNI: {session.user.id}</span>
            ) : null}

            {session?.user ? (<span>ID: {session.user.id}</span>) : null}
            <br />
            {session?.user ? (<span>Name: {session.user.name}</span>) : null}
            <br />
            {session?.user ? (<span>Email: {session.user.email}</span>) : null}
            <br />
            {session?.user ? (<span>Image: {session.user.image}</span>) : null}
            <br />
        </div>
    )
}