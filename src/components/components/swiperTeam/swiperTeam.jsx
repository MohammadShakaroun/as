import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
} from "swiper";

import "swiper/swiper-bundle.min.css";
import team_image_1 from "../../../assets/images/team/jenn.png";
import team_image_2 from "../../../assets/images/team/john.png";
import team_image_3 from "../../../assets/images/team/jony.png";

function SwiperTeam() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      effect={"coverflow"}
      centeredSlides={true}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      covereffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
    >
      <SwiperSlide>
        <div className="col-md-4 col-sm-8 team-Sections">
          <div className="team">
            <img src={team_image_1} alt="" className="team-img" />
            <div className="caption">
              <h4>Jane Doe</h4>
              <p className="teamjob">Senior Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-md-4 col-sm-8 team-Sections">
          <div className="team">
            <img src={team_image_3} alt="" className="team-img" />
            <div className="caption">
              <h4>Jane Doe</h4>
              <p className="teamjob">Senior Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-md-4 col-sm-8 team-Sections">
          <div className="team">
            <img src={team_image_2} alt="" className="team-img" />
            <div className="caption">
              <h4>Jane Doe</h4>
              <p className="teamjob">Senior Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-md-4 col-sm-8 team-Sections">
          <div className="team">
            <img src={team_image_3} alt="" className="team-img" />
            <div className="caption">
              <h4>Jane Doe</h4>
              <p className="teamjob">Senior Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-md-4 col-sm-8 team-Sections">
          <div className="team">
            <img src={team_image_1} alt="" className="team-img" />
            <div className="caption">
              <h4>Jane Doe</h4>
              <p className="teamjob">Senior Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="col-md-3 col-sm-6 team-Sections">
          <div class="team">
            <img src={team_image_4} alt="" class="team-img" />
            <div class="caption">
              <h4>Jane Doe</h4>
              <p class="teamjob">Senior Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="col-md-3 col-sm-6 team-Sections">
          <div class="team">
            <img src={team_image_5} alt="" class="team-img" />
            <div class="caption">
              <h4>Jane Doe</h4>
              <p class="teamjob">Senior Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
}

export default SwiperTeam;
