import { useEffect, useRef, useState } from 'react';
import First from '../assets/First.jpg';
import Second from '../assets/Second.png';
import Fourth from '../assets/Fourth.jpg';
import Fifth from '../assets/Fifth.jpg';
import Seventh from '../assets/Seventh.jpg';

const Hero = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [textVisible, setTextVisible] = useState(false);
    const ref = useRef(null);

    const Griditems = [
        { id: 1, image: First,   colSpan: 'col-span-2', rowSpan: 'row-span-1', alt: 'postcards' },
        { id: 2, image: Second,  colSpan: 'col-span-1', rowSpan: 'row-span-1', alt: 'recipe 2' },
        { id: 3, image: Seventh, colSpan: 'col-span-1', rowSpan: 'row-span-2', alt: 'recipe 3' },
        { id: 4, image: Fourth,  colSpan: 'col-span-1', rowSpan: 'row-span-1', alt: 'recipe 4' },
        { id: 5, image: Fifth,   colSpan: 'col-span-2', rowSpan: 'row-span-1', alt: 'recipe 5' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Animate text first
                    setTimeout(() => setTextVisible(true), 100);

                    // Then animate grid items one by one
                    Griditems.forEach((item, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, item.id]));
                        }, 400 + index * 150);
                    });

                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className='relative w-full sm:w-[90%] flex flex-col md:flex-row p-8 gap-8 md:h-98 sm:h-[20%] md:mt-12 sm:mt-6'
        >
            {/* Text block */}
            <div
                className='w-full md:w-[35%] flex flex-col justify-center h-full'
                style={{
                    opacity: textVisible ? 1 : 0,
                    transform: textVisible ? 'translateY(0)' : 'translateY(28px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                }}
            >
                <h1 className='text-2xl md:text-5xl font-bold text-amber-900 mb-6'>
                    Welcome to Ree`
                </h1>
                <p className='text-lg text-amber-800 leading-relaxed'>
                    We serve your taste buds by introducing you to low-effort quick snack recipes
                    to smooth both cravings and hunger. By doing this we keep our clients healthy
                    while tending to sweet appetite. Have fun touring!
                </p>
            </div>

            {/* Grid */}
            <div className="w-full md:w-[65%] grid grid-cols-4 row-auto-[100px] gap-4 md:h-full sm:h-56 border-l-[2px] border-[#672218] pl-2.5">
                {Griditems.map((item) => {
                    const isVisible = visibleItems.has(item.id);
                    return (
                        <div
                            key={item.id}
                            className={`${item.colSpan} ${item.rowSpan} bg-amber-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(20px)',
                                transition: 'opacity 0.5s ease, transform 0.5s ease',
                            }}
                        >
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                                />
                            ) : (
                                <div className='w-full h-full bg-gradient-to-br from-amber-50 to-amber-100'></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Hero;