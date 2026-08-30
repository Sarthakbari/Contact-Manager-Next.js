"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { setSession, deleteSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    try {
        // Find user using email only
        const response = await axios.get(
            `${API_URL}/users?email=${encodeURIComponent(email ?? "")}`
        );

        console.log("USER RESPONSE:", response.data);

        const user: UserType = response.data[0];

        if (!user) {
            throw new Error("User not found");
        }

        // Check password manually
        if (user.password !== password) {
            throw new Error("Wrong password");
        }

        await setSession({
            name: user.name,
            email: user.email,
            id: user.id,
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error);
        throw error;
    }

    redirect("/contact");
};

export const logoutAction = async () => {
    await deleteSession();
    redirect("/login");
};