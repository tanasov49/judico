import React, { useEffect, useState } from "react";
import "./styles.scss";
import TitleSection from "@components/UI/TitleSection/TitleSection";
import SubtitleSection from "@components/UI/SubtitleSection/SubtitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { reviewsClients } from "@data";
import Rating from "@components/UI/Rating/Rating";
function SectionReviews() {
    const [slideOption, setSlideOption] = useState({
        spaceBetween: 0,
        direction: '',
        centered: true
    })
    useEffect(() => {
        if (window.innerWidth > 768) {
            setSlideOption({...slideOption, spaceBetween: 127, direction: 'horizontal', centered: true});
        } else {
            setSlideOption({...slideOption,  spaceBetween: 30, direction: 'vertical', centered: false});
        };
    },[]);
    return (
        <>
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
                    direction={`${slideOption.direction}`}
                    slidesPerView={'auto'}
                    spaceBetween={slideOption.spaceBetween}
                    centeredSlides={slideOption.centered}
                    navigation={true}
                >
                    {reviewsClients.map((item, key) => (
                        <SwiperSlide className="swiper-slide-item" key={key}>
                            <img
                                className="swiper-slide-item__image"
                                src={item.image}
                                alt={`photo ${item.name}`}
                            />
                            <h4 className="swiper-slide-item__title">
                                {item.name}
                            </h4>
                            <p className="swiper-slide-item__subtitle">
                                {item.subtitle}
                            </p>
                            <Rating
                                classRating="slides-clients"
                                rating={item.rating}
                            />
                            <p className="swiper-slide-item__text">
                                {item.text}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default SectionReviews;
