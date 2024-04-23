"use client"

import BlogCard from "@/components/blogCard/blogCard";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import ButtonDark from "@/components/button/buttonDark";
import ButtonLight from "@/components/button/buttonLight";
import { useState } from "react";
import ContactModal from "@/components/contact/page";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Software developer.</h1>
            <p className={styles.description}>
              I create websites with taste.
              <br></br>
              <br></br> Want to learn more? Check out
            </p>
            <div className={styles.buttons}>
              <ButtonDark text={"Contact Me"} />
              <ButtonLight text={"Learn More"} />
            </div>
            <div>
              <button onClick={openModal}>Open Modal</button>
              <ContactModal isOpen={isModalOpen} onClose={closeModal}>
                <p>This is the modal content!</p>
              </ContactModal>
            </div>
          </div>
          {/* <div className={styles.imgContainer}>
            <Image className={styles.img} src="/blueBanner.jpeg" fill={true} />
          </div> */}
        </div>
        <div className={styles.blogs}>
          <BlogCard
            text={
              "This Resume helped many in getting an interview calls from companies like Google, Microsoft, Amazon, and many more. "
            }
          />
          <BlogCard
            text={
              "This Resume helped many in getting an interview calls from companies like Google, Microsoft, Amazon, and many more. "
            }
          />
        </div>
      </div>
    </>
  );
}
