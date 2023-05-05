import React from "react";
import "./styles.scss";
import TitleSection from "@components/UI/TitleSection/TitleSection";
import SubtitleSection from "@components/UI/SubtitleSection/SubtitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { reviewsClients } from "@data";
import Rating from "@components/UI/Rating/Rating";
function SectionReviews() {
    return (
        <section className="section-reviews">
            <TitleSection
                title="What Clients Say"
                classTitle="section-reviews"
            />
            <SubtitleSection
                subtitle={`Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics `}
                classSubtitle="section-reviews"
            />
            <div className="slides-clients">
                <Swiper
                slidesPerView={3}
                spaceBetween={127}
                centeredSlides={true}
                >
                    {reviewsClients.map((item, key) => (
                        <SwiperSlide className="swiper-slide-item" key={key}
                        >
                            <img className="swiper-slide-item__image" src={item.image} alt={`photo ${item.name}`} />
                            <h4 className="swiper-slide-item__title">{item.name}</h4>
                            <p className="swiper-slide-item__subtitle">{item.subtitle}</p>
                            <Rating classRating='slides-clients' rating={item.rating} />
                            <p className="swiper-slide-item__text">{item.text}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default SectionReviews;
