import React from 'react'

import { useActiveSlide } from '@/contexts'

import styles from './styles.module.scss'

export function Footer() {

  const { activeSlide, changeActiveSlide, slides } = useActiveSlide()

  return (
    <div className={styles.trail} id={slides[activeSlide]?.light?styles.light:null} style={{gridTemplateColumns: `repeat(${slides.length}, 1fr)`}}>
      {slides.map(({texts}, index) => (
        <div key={index} onClick={() => changeActiveSlide(index)} id={activeSlide==index?styles.active:styles.inactive}><span>{texts.name}</span></div>
      ))}
    </div>
  )
}
