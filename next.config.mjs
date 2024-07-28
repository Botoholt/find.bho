/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  eslint: {
    dirs: ["app/*/**", "components/*/**", "shared/*/**"],
  },
}

export default nextConfig
