'use client';

import { useSession } from "next-auth/react";
import { PrismaClient } from '@prisma/client'

export const Data = () => {

    const { data: session } = useSession();

    /*  const prisma = new PrismaClient()
 
     async function main() {
         const allUsers = await prisma.user.findMany()
         console.log(allUsers)
     }
 
     main()
         .then(async () => {
             await prisma.$disconnect()
         })
         .catch(async (e) => {
             console.error(e)
             await prisma.$disconnect()
             process.exit(1)
         }) */

    return (
        <div>
            <h2>Info:</h2>
            {session?.user ? (
                <h1>{session.user.id}</h1>
            ) : null}
        </div>
    )
}