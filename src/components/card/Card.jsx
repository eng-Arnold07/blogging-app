import React from 'react'
import styles from "./card.module.css"
import Link from 'next/link'
import Image from 'next/image'

const card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src ="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.09.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Cupiditate, quam nisi magni ea laborum inventore voluptatum 
          laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium 
          quisquam! Harum unde sit culpa debitis.</p>
          <Link href="/">Read More</Link>
      </div>
    </div>
  )
}

export default card