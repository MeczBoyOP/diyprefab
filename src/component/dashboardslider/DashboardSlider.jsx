import React, { useEffect, useRef } from 'react';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';
import { Button } from 'reactstrap';

const slides = [
    {
        heading:"We provide cutting-edge, PEB Structure Solutions",
        title: 'High-quality PEB and modular structures, ensuring faster constructionreduced costsunmatched durability Explore our 3D Smart Building Planner, an intuitive digital tool that allows you to visualize, customize, and refine your prefabricated structure in real time. This immersive platform empowers you to experiment with layouts, optimize material usage, and perfect your design before execution—ensuring efficiency, cost-effectiveness, and sustainability from day one.',
        image: 'https://i.ibb.co/qCkd9jS/img1.jpg',
        des: 'X-Dev, Transforming code into visual poetry..!',
    },
    {
       heading:"We provide cutting-edge, PEB Structure Solutions",
        title: 'Switzerland',
        image: 'https://i.ibb.co/jrRb11q/img2.jpg',
        des: 'X-Dev, Transforming code into visual poetry..!',
    },
    {
        heading:"We provide cutting-edge, PEB Structure Solutions",
        title: 'Switzerland',
        image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
        des: 'X-Dev, Transforming code into visual poetry..!',
    },
    {
        heading:"We provide cutting-edge, PEB Structure Solutions",
        title: 'Switzerland',
        image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
        des: 'X-Dev, Transforming code into visual poetry..!',
    },
    {
        heading:"We provide cutting-edge, PEB Structure Solutions",
        title: 'Switzerland',
        image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
        des: 'X-Dev, Transforming code into visual poetry..!',
    },
    {
        heading:"We provide cutting-edge, PEB Structure Solutions",
        title: 'Switzerland',
        image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
        des: 'X-Dev, Transforming code into visual poetry..!',
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
        }, 10000); // Change slide every 10 seconds

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
