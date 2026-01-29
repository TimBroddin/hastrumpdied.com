"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const answers = [
  "No",
  "Nope",
  "Nopes",
  "Not yet",
  "Negative",
  "He hasn't",
  "Nay",
  "Nae",
  "No siree",
];

export default function Home() {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setAnswer(answers[Math.floor(Math.random() * answers.length)]);
  }, []);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4">
      <main className="flex flex-1 flex-col items-center justify-center">
        <h2 className="font-(family-name:--font-display) mb-4 text-2xl font-bold tracking-wide text-cream-muted uppercase sm:text-3xl animate-[fade-in-up_0.8s_ease-out]">
          Has Trump Died?
        </h2>
        <h1
          className="font-(family-name:--font-display) text-7xl font-black tracking-tight sm:text-8xl lg:text-9xl animate-[fade-in-up_0.8s_ease-out]"
        >
          {answer}.
        </h1>
        <div className="mt-10 animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
          <Image
            src="/lelijkhoofd.png"
            alt="Mannekes, wat ne lelijke kop."
            width={300}
            height={300}
            priority
            className="invert transition-transform duration-300 hover:scale-105"
          />
        </div>
      </main>
      <footer className="fixed right-4 bottom-4">
        <a
          href="https://broddin.be"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl transition-opacity hover:opacity-70"
        >
          😘
        </a>
      </footer>
    </div>
  );
}
