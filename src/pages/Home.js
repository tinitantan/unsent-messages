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
        padding: isSmall ? "0.5rem 1rem 0 1rem" : "1rem 1rem 0 1rem",
        margin: "0px auto 0", // center horizontally
        width: "100%",         // full width but excludes scrollbar
        maxWidth: "700px",     // max width for larger screens
        boxSizing: "border-box",
        minHeight: "auto",
        fontFamily: "Arial, sans-serif",
        color: "#201e1c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

        overflowX: "hidden",
      }}
    >
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontSize: isSmall ? "1.5rem" : "2rem",
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        THE LOST LETTERBOX
      </h1>

      <p
        style={{
          margin: 0,
          fontSize: isSmall ? 12 : 14,
          fontWeight: 500,
          marginRight: 0,
          marginLeft: 0,
          padding: 0,
        }}
      >
        Inspired by a little Christmas Candy Grams tradition. :)
      </p>

      <p
        style={{
          margin: isSmall ? "1.5rem 0" : "1.5rem 2rem",
          fontSize: isSmall ? 14 : 16,
          maxWidth: "100%",
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        Write secret messages to loved ones!{" "}
        <span style={{ fontStyle: "italic" }}>Perhaps there's one for you?</span>
      </p>

      <div
        style={{
          width: bearWidth,
          height: 400,
          border: "2px solid #b5c18e",
          backgroundColor: "#d3debc",
          borderRadius: 6,
          margin: "0.5rem auto 0rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            transform: isSmall ? "scale(1)" : "scale(1.5)",
            transformOrigin: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: '60px',
            width: "auto",
            height: "auto",
            boxSizing: "border-box",
          }}
        >
          <Bear />
        </div>
      </div>
    </div>
  );
}
