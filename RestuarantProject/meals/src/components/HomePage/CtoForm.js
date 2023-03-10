import React from "react";
import styles from "../../assets/css/Cta/CtoForm.module.css";

const CtoForm = () => {
  return (
    <form className={styles['cta-form']} name="sign-up" netlify>
      <div>
        <label for="full-name">Full Name</label>
        <input id="full-name" type="text" placeholder="Aysel Abilova" name="full-name" required />
      </div>

      <div>
        <label for="email">Email address</label>
        <input id="email"type="email"placeholder="ayselaa@gmail.com" name="email" required />
      </div>

      <div>
        <label for="select-where">Where did you hear from us?</label>
        <select id="select-where" name="select-where" required>
          <option value="">Please choose one option:</option>
          <option value="friends">Friends and family</option>
          <option value="youtube">YouTube video</option>
          <option value="podcast">Podcast</option>
          <option value="ad">Facebook ad</option>
          <option value="others">Others</option>
        </select>
      </div>

      <button className={`${styles.btn} ${styles['btn--form']}`}>Sign up now</button>
    </form>
  );
};

export default CtoForm;
