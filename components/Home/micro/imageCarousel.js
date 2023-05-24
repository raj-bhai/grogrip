import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
    <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showArrows
        stopOnHover
        showStatus={false}
        swipeable
        useKeyboardArrows
        className="flex flex-col items-center"
    >
        <div>
            <img alt="" src="https://res.cloudinary.com/drgvislmm/image/upload/v1669407843/videos/Sports/maxresdefault_3_fdyj71.jpg" />
        </div>
        <div>
            <img alt="" src="https://res.cloudinary.com/drgvislmm/image/upload/v1669407843/videos/Sports/maxresdefault_3_fdyj71.jpg" />
        </div>
        <div>
            <img alt="" src="https://res.cloudinary.com/drgvislmm/image/upload/v1669407843/videos/Sports/maxresdefault_3_fdyj71.jpg" />
        </div>
        <div>
            <img alt="" src="https://res.cloudinary.com/drgvislmm/image/upload/v1669407843/videos/Sports/maxresdefault_3_fdyj71.jpg" />
        </div>
    </Carousel>
);
