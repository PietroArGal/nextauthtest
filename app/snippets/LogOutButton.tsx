'use client';

import React from 'react'
import { signOut } from "next-auth/react";

export const LogOutButton = () => {
    return (
        <>
            <button onClick={() => signOut()}>Logout</button>
        </>
    )
}
