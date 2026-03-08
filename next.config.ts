import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WAJIB: Agar jadi file HTML statis yang disukai Hostinger
  output: 'export',
  
  // WAJIB: Agar gambar tidak error di hosting biasa
  images: {
    unoptimized: true,
  },

  // Kita hapus devIndicators yang bikin error. 
  // Defaultnya sudah aman.
};

export default nextConfig;