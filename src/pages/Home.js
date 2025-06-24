import { useEffect, useState } from "react";
import Bear from "./Bear";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        padding: isMobile ? "2rem 1rem" : "4rem",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#201e1c",
        width: "90vw",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          margin: 0,
          padding: 0,
          marginRight: isMobile ? "0" : "50px",
          fontSize: isMobile ? "1.5rem" : "2rem",
        }}
      >
        THE LOST LETTERBOX
      </h1>
      <p
        style={{
          margin: 0,
          fontSize: isMobile ? "12px" : "14px",
          fontWeight: 500,
          marginLeft: isMobile ? "0" : "50px",
          marginTop: "0.25rem",
        }}
      >
        Inspired by a little Christmas Candy Grams tradition. :)
      </p>

      <p style={{ margin: "1.5rem 1rem", fontSize: isMobile ? "14px" : "16px" }}>
        Write secret messages to loved ones!{" "}
        <span style={{ fontStyle: "italic" }}>
          Perhaps there's one for you?
        </span>
      </p>

      <div
        style={{
          width: isMobile ? "90vw" : "57vw",
          height: isMobile ? "36vw" : "23vw",
          border: "2px solid #b5c18e",
          backgroundColor: "#d3debc",
          borderRadius: "6px",
          margin: "1.75rem auto 0",
          maxWidth: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? "0 10px" : 0,
        }}
      >
        <div
          style={{
            transform: isMobile ? "scale(0.7)" : "scale(1)",
            transformOrigin: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: isMobile ? "0" : "70px",
            width: "100%",
          }}
        >
          <Bear />
        </div>
      </div>
    </div>
  );
}
