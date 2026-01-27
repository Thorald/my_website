"use client";

import { useEffect, useRef, useState } from "react";

export function LadybugWalker() {
    const [dir, setDir] = useState<1 | -1>(1); // 1 = right, -1 = left
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const xRef = useRef(0);
    const lastTRef = useRef<number | null>(null);

    useEffect(() => {
        let raf = 0;

        const speedPxPerSec = 10; // <- change speed here
        const bugWidth = 60; // used for wrap (a bit bigger than 40px to be safe)

        const tick = (t: number) => {
            if (lastTRef.current == null) lastTRef.current = t;
            const dt = (t - lastTRef.current) / 1000;
            lastTRef.current = t;

            const w = window.innerWidth;

            // move
            xRef.current += dir * speedPxPerSec * dt;

            // wrap (go off-screen then reappear)
            if (xRef.current > w + bugWidth) xRef.current = -bugWidth;
            if (xRef.current < -bugWidth) xRef.current = w + bugWidth;

            // apply transform
            if (wrapperRef.current) {
                wrapperRef.current.style.transform = `translateX(${xRef.current}px)`;
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [dir]);

    return (
        <div
            ref={wrapperRef}
            onClick={() => setDir((d) => (d === 1 ? -1 : 1))}
            style={{
                position: "fixed",
                bottom: -12,
                left: 0,
                cursor: "pointer",
                zIndex: 9999,
                willChange: "transform",
            }}
            aria-label="Ladybug"
            role="button"
        >
            <img
                src="images/ladybug.gif"
                alt="ladybug"
                style={{
                    width: 40,
                    height: "auto",
                    // face the direction we move
                    transform: `scaleX(${dir})`,
                    transformOrigin: "center",
                    pointerEvents: "none",
                    userSelect: "none",
                }}
                draggable={false}
            />
        </div>
    );
}
