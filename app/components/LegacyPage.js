"use client";

import { useEffect, useRef } from "react";

export default function LegacyPage({ html, scripts = [] }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return undefined;
    const appendedScripts = scripts.map((source) => {
      const script = document.createElement("script");
      script.text = source;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      appendedScripts.forEach((script) => script.remove());
    };
  }, [scripts]);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: html }} />;
}
