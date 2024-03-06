import { useState } from 'react';

export function Slider({ slides }) {
    const [currentSlide, setCurrentSlides] = useState(1);

    const nextSlide = () => {
        if (currentSlide !== slides.length) {
            setCurrentSlides(currentSlide + 1);
        } else {
            setCurrentSlides(1);
        }
    }

    const prevSlide = () => {
        if (currentSlide !== 1) {
            setCurrentSlides(currentSlide - 1);
        } else {
            setCurrentSlides(slides.length);
        }
    }

    const moveCircle = (index) => {
        setCurrentSlides(index);
    }

    return (
        <div className="container-slider">
            {
                slides.map(obj => {
                    return (
                        <div
                            key={obj.id}
                            style={{ backgroundImage: `url(${obj.url})` }}
                            className={currentSlide === obj.id ? "slide active-anim" : "slide"}
                        >
                                <h3>{obj.title}</h3>
                        </div>
                    )
                })
            }

            <button onClick={nextSlide} className="btn-slide next">
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            <button onClick={prevSlide} className="btn-slide prev">
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="container-circle">
                {slides.map(obj => (
                    <div
                        key={obj.id}
                        onClick={() => moveCircle(obj.id)}
                        className={currentSlide === obj.id ? "circle active" : "circle"}
                    />
                ))}
            </div>
        </div>
    )
}
