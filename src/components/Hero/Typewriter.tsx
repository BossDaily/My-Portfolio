"use client";

import TypewriterComponent from "typewriter-effect";

export function Typewriter() {
  return (
    <div className="">
      <TypewriterComponent
        options={{
          strings: [
            "Discord Bot Dev",
            "Web Developer",
            "Aspiring App Developer",
            "Open Source Enthusiast",
            "Minecraft server owner",
            "Sigma Male",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
