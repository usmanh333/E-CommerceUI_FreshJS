import { AppProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import NavBar from "../components/NavBar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html data-theme="dracula">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@3.7.7/dist/full.css" rel="stylesheet" type="text/css" />
        <title>UiTaskFresh</title>
      </head>
      <body>
        <NavBar/>
        <Component />
        <Footer />
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
}
