import ThemeProvider from "@/theme/index";

import "@/app/globals.css";

export const metadata = {
  title: "SkillOmni",
  description: "SkillOmni description",
  keywords: "learning, up-skilling", // add more
  icons: [
    { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png", // add this
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png", // add this
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png", // add this
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
