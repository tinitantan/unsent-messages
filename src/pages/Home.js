import Bear from "./Bear";

export default function Home() {
  return (
    <div
      style={{
        padding: "4rem",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#201e1c",
        width: "90vw",
        maxWidth: "700px",
        minWidth: "320px",
        margin: "0rem auto",
      }}
    >
      <h1 style={{ margin: 0, padding: 0, marginRight: "50px" }}>
        THE LOST LETTERBOX
      </h1>
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          fontWeight: 500,
          marginLeft: "50px",
        }}
      >
        Inspired by a little Christmas Candy Grams tradition. :)
      </p>

      <p style={{ margin: "1.5rem 2rem" }}>
        Write secret messages to loved ones!{" "}
        <span style={{ fontStyle: "italic" }}>
          Perhaps there's one for you?
        </span>
      </p>

      <div
        style={{
          width: "57vw",
          height: "23vw",
          border: "2px solid #b5c18e",
          backgroundColor: "#d3debc",
          borderRadius: "6px",
          margin: "1.75rem auto 0",
          maxWidth: "500px",
          minWidth: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
    style={{
      transform: "scale(1.0)",
      transformOrigin: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "70px"
    }}
  >
    <Bear />
  </div>
      </div>
    </div>
  );
}
