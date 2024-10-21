/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    forceSwcTransforms: true,           //isto obriga o SWC a ser o compilador, ao invés do babel
  },
};
