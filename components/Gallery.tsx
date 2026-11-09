"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/constants";
import { Eye, X, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Residential Overhead",
    "Underground Sump",
    "Commercial",
    "Industrial",
    "STP & ETP",
    "Equipment",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FAFE] border border-[#22C4F2]/30 w-fit mb-3">
            <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
              Work &amp; Operations Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            See the <span className="text-[#22C4F2]">Difference We Make.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Take a look at our professional water tank cleaning and sanitation work across residential, commercial and industrial setups in Kerala.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#22C4F2] text-white shadow-sm"
                  : "bg-[#F0FAFE] text-[#555555] hover:text-[#171717] hover:bg-gray-100 border border-[#E5E7EB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold bg-white/95 backdrop-blur-md text-[#171717] px-3 py-1 rounded-full border border-white/20 shadow">
                    {item.category}
                  </span>
                </div>

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom title & description */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/80 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox for detailed viewing */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-96 w-full bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 bg-white">
                <span className="text-xs font-bold text-[#22C4F2] uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h4 className="text-xl font-bold text-[#171717] mt-1">
                  {selectedImage.title}
                </h4>
                <p className="mt-2 text-sm text-[#555555]">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
