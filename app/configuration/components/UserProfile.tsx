'use client';

import React, { useEffect, useState } from "react";
import UserData from "./UserData";

interface User {
    name: string;
}

function UserProfile() {
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await UserData();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            {userData ? (
                <>
                    <h1>Nombre: {userData.name}</h1>
                </>
            ) : (
                <p>Cargando datos del usuario...</p>
            )}
        </div>
    );
}

export default UserProfile;
