"use client";

import { Flowbite } from "flowbite-react";
import { customtheme as theme } from "../components/theme";


export default function Provider({ children }: { children: React.ReactNode }) {
    return <Flowbite theme={{ theme }}>{children}</Flowbite>;
}