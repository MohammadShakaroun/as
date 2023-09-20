import React from "react";
import { Testimonials } from "../Testimonials/testimonials";
import { Team } from "../Team/Team";
import UsePageDataHook from "../../customHooks/usePageDataHook";

export const Blogs = () => {
  const { landingPageData } = UsePageDataHook();
  return (
    <div>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
    </div>
  );
};
