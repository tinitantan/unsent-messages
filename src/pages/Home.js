import { useEffect, useState } from "react";
import Bear from "./Bear";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmall = windowWidth < 400;

  const bearWidth = windowWidth < 550 ? windowWidth * 0.8 : 500;
  const bearHeight = windowWidth < 550 ? (150 * bearWidth) / 500 : 150;

  return (
    <div
      style={{
        padding: isSmall ? "1rem 1rem 2rem" : "4rem",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#201e1c",
        width: "90vw",
        maxWidth: "700px",
        minWidth: "320px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontSize: isSmall ? "1.5rem" : "2rem",
          // Remove any horizontal margins on small screen:
          ...(isSmall ? {} : { marginRight: "50px" }),
        }}
      >
        THE LOST LETTERBOX
      </h1>

      <p
        style={{
          margin: 0,
          fontSize: isSmall ? "12px" : "14px",
          fontWeight: 500,
          // Remove horizontal margin on small screen:
          ...(isSmall ? {} : { marginLeft: "50px" }),
        }}
      >
        Inspired by a little Christmas Candy Grams tradition. :)
      </p>

      <p
        style={{
          margin: "1.5rem 2rem",
          fontSize: isSmall ? "14px" : "16px",
          maxWidth: "100%",
        }}
      >
        Write secret messages to loved ones!{" "}
        <span style={{ fontStyle: "italic" }}>Perhaps there's one for you?</span>
      </p>

      <div
        style={{
          width: bearWidth,
          height: '400px',
          border: "2px solid #b5c18e",
          backgroundColor: "#d3debc",
          borderRadius: "6px",
          margin: "1.75rem auto 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            transform: "scale(1.5)",
            transformOrigin: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: '50px',
            width: "auto",
            height: "auto",
          }}
        >
          <Bear />
        </div>
      </div>
    </div>
  );
}
