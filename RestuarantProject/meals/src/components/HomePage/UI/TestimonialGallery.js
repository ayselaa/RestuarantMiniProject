import React from 'react'
import styles from '../../../assets/css/Testimonial/TestmonialGallery.module.css'
import GalleryImg1 from "../../../assets/img/gallery/gallery-1.jpg";
import GalleryImg2 from "../../../assets/img/gallery/gallery-2.jpg";
import GalleryImg3 from "../../../assets/img/gallery/gallery-3.jpg";
import GalleryImg4 from "../../../assets/img/gallery/gallery-4.jpg";
import GalleryImg5 from "../../../assets/img/gallery/gallery-5.jpg";
import GalleryImg6 from "../../../assets/img/gallery/gallery-6.jpg";
import GalleryImg7 from "../../../assets/img/gallery/gallery-7.jpg";
import GalleryImg8 from "../../../assets/img/gallery/gallery-8.jpg";
import GalleryImg9 from "../../../assets/img/gallery/gallery-9.jpg";
import GalleryImg10 from "../../../assets/img/gallery/gallery-10.jpg";
import GalleryImg11 from "../../../assets/img/gallery/gallery-11.jpg";
import GalleryImg12 from "../../../assets/img/gallery/gallery-12.jpg";

const TestimonialGallery = () => {
  return (
   
       <div className={styles.gallery}>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg1}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg2}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg3}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg4}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg5}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg6}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg7}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg8}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg9}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg10}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg11}/>
        </figure>
        <figure className={styles['gallery-item']}>
            <img alt='galleryimg' src={GalleryImg12}/>
        </figure>
       </div>
  
  )
}

export default TestimonialGallery
