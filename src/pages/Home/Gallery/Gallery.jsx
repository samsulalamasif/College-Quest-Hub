import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = () => {
    return (
        <div className='my-32' data-aos="fade-right" data-aos-duration="2000">
            <h1 className='text-5xl font-mono font-semibold text-center'>Our Gallery</h1>
            <p className='text-slate-600 font-bold py-8 text-center'>
                Our college student graduated gallery consectetur adipisicing elit. Reiciendis veniam, eligendi <br />
                quisquam omnis illo sit soluta cupiditate distinctio facere. Architecto deleniti sdrt sdf
                <br />neque, ab tempore quos perspiciatis est sapiente alias voluptas.</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-full' src="https://cdn.retouchme.com/blogs/137-1657555606.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://media.istockphoto.com/id/1349302576/photo/happy-graduate-student-holding-his-diploma-on-graduation-day.jpg?s=612x612&w=0&k=20&c=5tC0cWX5hv77DixVGIZkyf-1sh5GU7fDphhcXcRUD8g=" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://media.istockphoto.com/id/1320944243/photo/millennial-students-celebrating-graduation-ceremony-and-throwing-their-caps-up-young-people.jpg?s=612x612&w=0&k=20&c=FS20KOwfz9AT6Jt8TS0wz5_UIDfDJPMWm2jtj7qguqw=" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://media.istockphoto.com/id/1366623793/photo/diverse-friends-group-takes-joyful-photo-after-graduation.jpg?s=612x612&w=0&k=20&c=HM9tFxrmaMPgaYBpqs6_V6S3mGYBSuMxKvo8s5MMsJk=" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://img.freepik.com/premium-photo/education-graduation-people-concept-group-happy-international-students_255667-21334.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://media.istockphoto.com/id/1046680338/photo/proud-to-be-graduates.jpg?s=612x612&w=0&k=20&c=jLHU0AaOZmcMntpHyoqN32vummZ6X9KJxGtS8P4yBFs=" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://media.istockphoto.com/id/506651951/photo/graduated-together.jpg?s=612x612&w=0&k=20&c=WQp6viz-PuFI4lEsaTz5NTFkAG8ZBXOL7YeUeZU3G5Q=" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://as2.ftcdn.net/v2/jpg/02/39/45/75/1000_F_239457544_FvZny6v9L9IfDpuKPLBNxg7QbhPxnAFt.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://media.istockphoto.com/id/452716307/photo/were-on-our-way-to-success.jpg?s=612x612&w=0&k=20&c=tGofU5zLFgRpNu88onsnJMRo0aWsZA_ChSk70p89ooE=" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;