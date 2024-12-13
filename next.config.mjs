/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
<<<<<<< HEAD
    remotePatterns: [{ hostname: "images.pexels.com" }],
=======
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Adding Cloudinary as an allowed domain
      },
    ],
>>>>>>> 1225c77 (Second commit)
  },
};

export default nextConfig;
