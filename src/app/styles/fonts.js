import localFont from "next/font/local";
const sansation = localFont({
  src: [
    {
      path: "../fonts/Sansation_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Sansation_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Sansation_Light.ttf",
      weight: "200",
      style: "light",
    },
  ],
});

export { sansation };
