import { h } from 'preact'
import { Entity } from 'aframe-react'

const Particles = () => {
  return (
    <Entity
      particle-system={{ preset: 'dust', particleCount: 100, opacity: 0.5 }}
    />
  )
}

export default Particles
