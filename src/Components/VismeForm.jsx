import { useEffect } from "react";

export default function VismeForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  return (
    <div
      className="visme_d"
      data-title="Free Ebook Download"
      data-url="nmnx49d7-untitled-project"
      data-domain="forms"
      data-full-page="false"
      data-min-height="500px"
      data-form-id="158153"
    ></div>
  );
}

