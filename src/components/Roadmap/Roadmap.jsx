import React from "react";
import { roadMap } from "../../assets/data/roadMap";
import "./Roadmap.css";

export default function Roadmap() {
  const lineColor = "var(--brand, #5e6ac4)"; // αντί του theme.palette.primary.main

  return (
    <section id="roadmap" className="timeline-wrap">
      <div className="timeline container">
        <div className="timeline__outer">
          {roadMap.map((item, idx) => {
            const isOdd = (idx + 1) % 2 === 1;
            const isFirst = idx === 0;
            const isLast = idx === roadMap.length - 1;

            return (
              <div
                key={item.step ?? idx}
                className={`timeline__row ${isOdd ? "left" : "right"}`}
                style={{
                  // CSS vars προς χρήση στα pseudo-elements
                  "--line": lineColor,
                  "--cut-top": isFirst ? 0 : 5 + "px",
                  "--cut-bottom": isLast ? 0 : 5 + "px",
                }}
              >
                {/* Η καμπύλη γραμμή (pseudo-element στο row) */}

                <article className="timeline__card">
                  <div className="card__content">
                    <span className="card__step">
                      {String(item.step ?? idx + 1).padStart(2, "0")}
                    </span>

                    <h3 className={`card__title ${isOdd ? "" : "align-right"}`}>
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p
                        className={`card__subtitle ${
                          isOdd ? "" : "align-right"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    )}

                    {item.text && (
                      <p className={`card__text ${isOdd ? "" : "align-right"}`}>
                        {item.text}
                      </p>
                    )}

                    {item.cause && (
                      <p
                        className={`card__cause ${isOdd ? "" : "align-right"}`}
                      >
                        {item.cause}
                      </p>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
