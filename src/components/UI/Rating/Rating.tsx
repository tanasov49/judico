import React from "react";
import RatingSvg from "@images/svg/rating.svg";
import './styles.scss';
interface IRating {
    rating: number;
    classRating: string
}
function Rating({ rating, classRating }: IRating) {
    return (
        <div className={`rating rating_${classRating}`}>
            {[...Array(5)].map((item, index: number) => {
                const ratingValue: number = index + 1;
                return (
                        <RatingSvg key={index}
                            className={
                                ratingValue <= rating
                                    ? "rating__svg rating__svg_active"
                                    : "rating__svg"
                            }
                        />
                );
            })}
        </div>
    );
}

export default Rating;
