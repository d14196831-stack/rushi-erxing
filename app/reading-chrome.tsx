"use client";

import { useEffect, useState } from "react";

export function ReadingChrome() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      setProgress(nextProgress);
      setShowTop(window.scrollY > window.innerHeight * 0.9);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="progress-track" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <button
        className={`back-to-top ${showTop ? "back-to-top--visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="返回页面顶部"
        tabIndex={showTop ? 0 : -1}
      >
        ↑
      </button>
    </>
  );
}
