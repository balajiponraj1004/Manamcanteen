
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-text">
          <Image src="/manam-logo.png" width={40} height={40} alt="Manam Canteen logo" priority />
          <span>Manam Canteen</span>
        </Link>
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 border rounded-xl" aria-expanded={open} aria-controls="nav">☰</button>
        <nav id="nav" className={clsx("md:flex gap-4 items-center", open ? "flex flex-col absolute left-0 right-0 top-16 bg-white p-4 border-b" : "hidden md:flex")}>
          <Link href="/menu">Menu</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/about">About</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact" className="btn btn-primary">Contact / Reserve</Link>
        </nav>
      </div>
    </header>
  );
}
