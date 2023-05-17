import React from 'react';
import { HomeHeader } from '../components/headers/HomeHeader';
import { PrismaClient } from '@prisma/client';
import { useSession } from 'next-auth/react';

function Configuration() {
    const prisma = new PrismaClient();
    const { data: session } = useSession();

    React.useEffect(() => {
        async function fetchData() {
            try {
                const userData = await prisma.user.findMany();
                console.log(userData);
            } catch (error) {
                console.error(error);
            } finally {
                await prisma.$disconnect();
            }
        }

        fetchData();
    }, []);

    return (

        <div>
            <HomeHeader />
            <div>
                <h2>Nombre:</h2>
                <p>{session?.user?.name}</p>
                <h2>Email:</h2>
                <p>{session?.user?.email}</p>
                <h2>Imagen:</h2>
                <p>{session?.user?.image}</p>
                <h2>DNI:</h2>
                <p>{session?.user?.dni}</p>
                <h2>Creado en:</h2>
                <p>{session?.user?.createdAt}</p>
            </div>
        </div>
    );
}

export default Configuration;
