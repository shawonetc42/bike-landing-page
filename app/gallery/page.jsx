import BicycleCover from "@/components/Landing Page 1/Gallery/BicycleCover";
import HeroGallery from "@/components/Landing Page 1/Gallery/HeroGallery";
import PhotoGallery from "@/components/Landing Page 1/Gallery/PhotoGallery";
import RideText from "@/components/Landing Page 1/Gallery/RideText";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroGallery />
      <RideText />
      <PhotoGallery />
      <BicycleCover />
    </div>
  );
}
