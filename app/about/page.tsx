"use client"

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { LadybugWalker } from "../components/ladybugWalker";

export default function about_me() {
    const [dir, setDir] = useState(1); // 1 = right, -1 = left
    return (
        <main>
            <LadybugWalker />
        </main>)

}