import React from "react";
import styles from "../../assets/css/Testimonial/TestimonialSection.module.css";
import Customer1 from "../../assets/img/Customer/1.jpg";
import Customer2 from "../../assets/img/Customer/2.jpg";
import Customer3 from "../../assets/img/Customer/3.jpg";
import Customer4 from "../../assets/img/Customer/4.jpg";
import TestimonialGallery from "./UI/TestimonialGallery";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className={`${styles["section-testimonial"]} ${styles.grid} ${styles["grid--2-cols"]}`}>

      <div className={styles['testimonial-containers']}>
      <span className={styles.subheading}>TESTIMONIALS</span>
    <h2 className={styles["heading-secondary"]}>Once you try it, you can't go back</h2>


      <div className={styles.testimonials}>
        <figure className={styles.testimonial}>
          <img
            src={Customer1}
            alt="Customer1Img"
            className={styles["testmonial-img"]}
          />
          <blockquote className={styles["testimonial-text"]}>
            Inexpensive, healthy and great-tasting meals, without even having to
            order manually! It feels truly magical.
          </blockquote>
          <p className={styles["testimonial-name"]}>&mdash; Dave Bryson</p>
        </figure>

        <figure className={styles.testimonial}>
          <img
            src={Customer2}
            alt="Customer1Img"
            className={styles["testmonial-img"]}
          />
          <blockquote className={styles["testimonial-text"]}>
            The AI algorithm is crazy good, it chooses the right meals for me
            every time. It's amazing not to worry about food anymore!
          </blockquote>
          <p className={styles["testimonial-name"]}>&mdash; Ben Hadley</p>
        </figure>

        <figure className={styles.testimonial}>
          <img
            src={Customer3}
            alt="Customer1Img"
            className={styles["testmonial-img"]}
          />
          <blockquote className={styles["testimonial-text"]}>
            Omnifood is a life saver! I just started a company, so there's no
            time for cooking. I couldn't live without my daily meals now!
          </blockquote>
          <p className={styles["testimonial-name"]}>&mdash; Steve Miller</p>
        </figure>

        <figure className={styles.testimonial}>
          <img
            src={Customer4}
            alt="Customer1Img"
            className={styles["testmonial-img"]}
          />
          <blockquote className={styles["testimonial-text"]}>
            I got Omnifood for the whole family, and it frees up so much time!
            Plus, everything is organic and vegan and without plastic.
          </blockquote>
          <p className={styles["testimonial-name"]}>&mdash; Hannah Smith</p>
        </figure>
      </div>
      </div>
   
       <TestimonialGallery/>
      
    </section>
  );
};

export default TestimonialSection;
