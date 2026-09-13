import { db, users } from "@/db";
import { currentUser } from "next/server";
import { eq } from "drizzle-orm";



export async function POST(request: Request) {
    try{
        const {name, email, image} = await request.json();
        const user = await db.users.insert()
    }
}