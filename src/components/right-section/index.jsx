import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import './style.css'
import './style.css';


export const Rightsec = (props) => {


    return (
        <div className='right-img-section'>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                </div>
                <a>MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight</a>
                <p>4 699,000TND</p>
            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/6277-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/6278-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M2 CPU 8C GPU 8C SSD 256Go - Starlight</a>
                <p>4 699,000TND</p>
            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/9651-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/9650-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 8C 16GB SSD 256Go - Midnight</a>
                <p>4 699,000TND</p>

            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/9624-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/9623-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 10C 24GB SSD 512Go - Space Grey</a>
                <p>4 699,000TND</p>

            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/7031-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/7034-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M1 CPU 8ceours GPU 7coeurs - SSD 256Go - Space Grey</a>
                <p>3 699,000TND</p>

            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                </div>                <a>MacBook Pro 14" Puce Apple M3 CPU 8coeurs 10coeurs GPU SSD 512Go - Space Grey</a>
                <p>5 699,000TND</p>

            </div>

        </div>
    )
}

export const Rightsec2 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                <button
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => handleTabClick('tab1')}
                >
                    NOUVETETS
                </button>
                <button
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => handleTabClick('tab2')}
                >
                    PROMO
                </button>
                <button
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => handleTabClick('tab3')}
                >
                    IPHONE
                </button>
            </div>

            <div className="tabs-content">
                {activeTab === 'tab1' && (
                    <div className='right-img-section'>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/6454-home_default/ipad-10th-gen-wi-fi-64go-bleu.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/8083-home_default/marshall-enceinte-bluetooth-uxbridge-cream.jpg" alt="" />
                            </div>
                            <a>MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight</a>
                            <p>4 699,000TND</p>
                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/8080-home_default/marshall-enceinte-bluetooth-uxbridge-cream.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6278-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M2 CPU 8C GPU 8C SSD 256Go - Starlight</a>
                            <p>4 699,000TND</p>
                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/9651-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/9650-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 8C 16GB SSD 256Go - Midnight</a>
                            <p>4 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/9624-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/9623-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 10C 24GB SSD 512Go - Space Grey</a>
                            <p>4 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/7031-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/7034-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M1 CPU 8ceours GPU 7coeurs - SSD 256Go - Space Grey</a>
                            <p>3 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/10233-home_default/iphone-16-pro-128gb-white.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                            </div>                <a>MacBook Pro 14" Puce Apple M3 CPU 8coeurs 10coeurs GPU SSD 512Go - Space Grey</a>
                            <p>5 699,000TND</p>

                        </div>

                    </div>
                )}
                {activeTab === 'tab2' && (
                    <div className='right-img-section'>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                            </div>
                            <a>MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight</a>
                            <p>4 699,000TND</p>
                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/6277-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6278-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M2 CPU 8C GPU 8C SSD 256Go - Starlight</a>
                            <p>4 699,000TND</p>
                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/9651-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/9650-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 8C 16GB SSD 256Go - Midnight</a>
                            <p>4 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/9624-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/9623-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 10C 24GB SSD 512Go - Space Grey</a>
                            <p>4 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/7031-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/7034-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M1 CPU 8ceours GPU 7coeurs - SSD 256Go - Space Grey</a>
                            <p>3 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                            </div>                <a>MacBook Pro 14" Puce Apple M3 CPU 8coeurs 10coeurs GPU SSD 512Go - Space Grey</a>
                            <p>5 699,000TND</p>

                        </div>

                    </div>
                )}
                {activeTab === 'tab3' && (
                    <div className='right-img-section'>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                            </div>
                            <a>MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight</a>
                            <p>4 699,000TND</p>
                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/10233-home_default/iphone-16-pro-128gb-white.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6278-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M2 CPU 8C GPU 8C SSD 256Go - Starlight</a>
                            <p>4 699,000TND</p>
                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/9651-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/10233-home_default/iphone-16-pro-128gb-white.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 8C 16GB SSD 256Go - Midnight</a>
                            <p>4 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/9624-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/9623-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 10C 24GB SSD 512Go - Space Grey</a>
                            <p>4 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/7031-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/7034-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                            </div>                <a>MacBook Air 13" Apple M1 CPU 8ceours GPU 7coeurs - SSD 256Go - Space Grey</a>
                            <p>3 699,000TND</p>

                        </div>
                        <div className='right-img__container'>
                            <div class="image-wrapper">
                                <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                                <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                            </div>                <a>MacBook Pro 14" Puce Apple M3 CPU 8coeurs 10coeurs GPU SSD 512Go - Space Grey</a>
                            <p>5 699,000TND</p>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};
export const Rightsec3 = (props) => {


    return (
        <div className='right-img-section'>

            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                </div>
                <a>MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight</a>
                <p>4 699,000TND</p>
            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/7975-home_default/enceinte-portable-étanche-jbl-flip-6-martin-garrix.jpg" alt="" />
                </div>
                <a>MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight</a>
                <p>4 699,000TND</p>
            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/7974-home_default/enceinte-portable-étanche-jbl-flip-6-martin-garrix.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                </div>
                <a>MacBook Air 13" Apple M2 8coeurs CPU 8 Coeurs GPU - 8Gb SSD 256Go - Midnight</a>
                <p>4 699,000TND</p>
            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/6277-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/6278-home_default/macbook-air-13-apple-m2-cpu-8c-gpu-8c-ssd-256go-starlight.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M2 CPU 8C GPU 8C SSD 256Go - Starlight</a>
                <p>4 699,000TND</p>
            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/9651-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/9650-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-8c-16gb-ssd-256go-midnight.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 8C 16GB SSD 256Go - Midnight</a>
                <p>4 699,000TND</p>

            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/9624-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/9623-home_default/macbook-air-13-apple-m3-cpu-8c-gpu-10c-24gb-ssd-512go-space-grey.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M3 CPU 8C GPU 10C 24GB SSD 512Go - Space Grey</a>
                <p>4 699,000TND</p>

            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/7031-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/7034-home_default/macbook-air-13-apple-m1-cpu-8ceours-gpu-7coeurs-ssd-256go-space-grey.jpg" alt="" />
                </div>                <a>MacBook Air 13" Apple M1 CPU 8ceours GPU 7coeurs - SSD 256Go - Space Grey</a>
                <p>3 699,000TND</p>

            </div>
            <div className='right-img__container'>
                <div class="image-wrapper">
                    <img class="default-img" src="https://itechstore.tn/6266-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                    <img class="hover-img" src="https://itechstore.tn/6267-home_default/macbook-air-13-apple-m2-8coeurs-cpu-8-coeurs-gpu-8gb-ssd-256go-midnight.jpg" alt="" />
                </div>                <a>MacBook Pro 14" Puce Apple M3 CPU 8coeurs 10coeurs GPU SSD 512Go - Space Grey</a>
                <p>5 699,000TND</p>

            </div>

        </div>
    )
}