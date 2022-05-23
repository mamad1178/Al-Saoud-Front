import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Item from './Item';
import { useState, useRef, useEffect } from 'react';
import {IoChevronForwardOutline} from 'react-icons/io5'
import {IoChevronBackOutline} from 'react-icons/io5'

const DUMMY_CATEGORIES = [
	{
		id: 1,
		title: 'All',
		icon: '/all.svg'
	},
	{
		id: 2,
		title: 'Art',
		icon: '/art.svg'
	},
	{
		id: 3,
		title: 'Economy',
		icon: '/economy.svg'
	},
	{
		id: 4,
		title: 'Education',
		icon: '/education.svg'
	},
	{
		id: 5,
		title: 'General',
		icon: '/general.svg'
	},
	{
		id: 6,
		title: 'Geography',
		icon: '/geography.svg'
	},
	{
		id: 7,
		title: 'History',
		icon: '/history.svg'
	},
	{
		id: 8,
		title: 'Islam',
		icon: '/islam.svg'
	},
	{
		id: 9,
		title: 'Law',
		icon: '/law.svg'
	},
	{
		id: 10,
		title: 'Linguistics',
		icon: '/linguistics.svg'
	},
	{
		id: 11,
		title: 'Literature',
		icon: '/literature.svg'
	},
	{
		id: 12,
		title: 'Management',
		icon: '/management.svg'
	},
]

const Categories = () => {
	const sliderRef = useRef();
	

	return (
				
					<div className = 'relative  ml-12 '>
					<div className = 'absolute top-[-50px] right-[40px] flex gap-4'>
						<button className = 'border-2 border-green-600' onClick = {() => sliderRef.current.swiper.slidePrev()}><IoChevronBackOutline className = 'text-[36px] text-green-800'/></button>
						<button className = 'border-2 border-green-600' onClick = {() => sliderRef.current.swiper.slideNext()}><IoChevronForwardOutline className = 'text-[36px] text-green-800'/></button>
					</div>
					<Swiper
					ref = {sliderRef}
					slidesPerView={7}
					className = ' my-10'
					>
						{DUMMY_CATEGORIES.map(item => <SwiperSlide key = {item.id}>
							<Item item = {item}/>
						</SwiperSlide>)}
					</Swiper>
					</div>
			 
	)
}

export default Categories;