import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundColor: "#d2d9e0" }}>
        <Main />
        <div id="sidebar" />
        <div id="backdrop" />
        <NextScript />
      </body>
    </Html>
  );
}
