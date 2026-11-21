const code = [
  "const developer = 'ABDO';",
  "import React from 'react';",
  "function createExperience() {",
  "return digitalInnovation;",
  "const future = await build();",
  "npm run dev",
  "git commit -m 'new experience'",
  "export default Developer;",
  "const creativity = true;",
  "console.log('Hello World');",
  "while (learning) { keepBuilding(); }",
  "const vision = 'Unlimited';",
  "return <ABDO_STUDIO />;",
];

export default function GlobalCodeBackground() {
  return (
    <div className="global-code-background" aria-hidden="true">
      <div className="code-columns">
        {Array.from({ length: 6 }).map((_, column) => (
          <div
            className="code-column"
            key={column}
            style={{
              animationDelay: `${column * -4}s`,
              animationDuration: `${22 + column * 5}s`,
            }}
          >
            {[...code, ...code, ...code].map((line, index) => (
              <div className="background-code-line" key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="background-overlay" />
    </div>
  );
}