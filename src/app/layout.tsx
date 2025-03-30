import "./globals.css";
import type {} from "styled-components/cssprop";
import "@fontsource/oswald/variable.css";
import "@fontsource/inconsolata/variable.css";
import "@fontsource/nunito/variable.css";
import GlobalMeta from "@/components/GlobalMeta";
import StyledComponentsRegistry from "@/styles/styled-components-registry";

export const metadata = {
  title: "Password Generator",
  description: "Generate strong passwords",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GlobalMeta />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
