import React, { useEffect, useRef } from 'react';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';
import { Button } from 'reactstrap';

import Slider1 from '../../assets/images/slider-1.webp';
import Slider2 from '../../assets/images/slider-2.webp';
import Slider3 from '../../assets/images/slider-3.webp';
import Slider4 from '../../assets/images/slider-4.webp';
import Slider5 from '../../assets/images/slider-5.webp';
import Slider6 from '../../assets/images/slider-6.jpg';

const slides = [
    {
        heading: "We provide cutting-edge, PEB Structure Solutions",
        title: 'High-quality PEB and modular structures, ensuring',
        image: Slider1,
        des: 'Explore our 3D Smart Building Planner, an intuitive digital tool that allows you to visualize, customize, and refine your prefabricated structure in real time. This immersive platform empowers you to experiment with layouts, optimize material usage, and perfect your design before execution—ensuring efficiency, cost-effectiveness, and sustainability from day one.',
    },
    {
        heading: "We provide cutting-edge, PEB Structure Solutions",
        title: 'High-quality PEB and modular structures, ensuring',
        image: Slider2,
        des: 'X-Dev, Transforming code into visual poetry..!',
    },
    {
        heading: "We provide cutting-edge, PEB Structure Solutions",
        title: 'High-quality PEB and modular structures, ensuring',
        image: Slider3,
        des: 'Explore our 3D Smart Building Planner, an intuitive digital tool that allows you to visualize, customize, and refine your prefabricated structure in real time. This immersive platform empowers you to experiment with layouts, optimize material usage, and perfect your design before execution—ensuring efficiency, cost-effectiveness, and sustainability from day one.',
    },
    {
        heading: "We provide cutting-edge, PEB Structure Solutions",
        title: 'High-quality PEB and modular structures, ensuring',
        image: Slider4,
        des: 'Explore our 3D Smart Building Planner, an intuitive digital tool that allows you to visualize, customize, and refine your prefabricated structure in real time. This immersive platform empowers you to experiment with layouts, optimize material usage, and perfect your design before execution—ensuring efficiency, cost-effectiveness, and sustainability from day one.',
    },
    {
        heading: "We provide cutting-edge, PEB Structure Solutions",
        title: 'High-quality PEB and modular structures, ensuring',
        image: Slider5,
        des: 'Explore our 3D Smart Building Planner, an intuitive digital tool that allows you to visualize, customize, and refine your prefabricated structure in real time. This immersive platform empowers you to experiment with layouts, optimize material usage, and perfect your design before execution—ensuring efficiency, cost-effectiveness, and sustainability from day one.',
    },
    {
        heading: "We provide cutting-edge, PEB Structure Solutions",
        title: 'High-quality PEB and modular structures, ensuring',
        image: Slider6,
        des: 'Explore our 3D Smart Building Planner, an intuitive digital tool that allows you to visualize, customize, and refine your prefabricated structure in real time. This immersive platform empowers you to experiment with layouts, optimize material usage, and perfect your design before execution—ensuring efficiency, cost-effectiveness, and sustainability from day one.',
    },
];

const DashboardSlider = () => {
    const slideRef = useRef(null);

    const nextSlide = () => {
        const slide = slideRef.current;
        if (slide.children.length > 0) {
            const first = slide.children[0];
            slide.appendChild(first);
        }
    };

    const prevSlide = () => {
        const slide = slideRef.current;
        if (slide.children.length > 0) {
            const last = slide.children[slide.children.length - 1];
            slide.prepend(last);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-slider">
            <div className="slide" ref={slideRef}>
                {slides.map((item, index) => (
                    <div
                        className="item"
                        key={index}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="content">
                            <div className="heading">{item.heading}</div>
                            <div className="name">{item.title}</div>
                            <div className="des">{item.des}</div>
                            <Button className='btn common-btn'>Get Your Free Design & Estimate Consultation Now!</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button">
                <Button className="me-2 prev" onClick={prevSlide}>
                    <IoChevronBackOutline />
                </Button>
                <Button className="next" onClick={nextSlide}>
                    <IoChevronForward />
                </Button>
            </div>
        </div>
    );
};

export default DashboardSlider;
