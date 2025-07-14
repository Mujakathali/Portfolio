import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const StarBackground = () => {
  const mountRef = useRef()

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 1

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    mountRef.current.appendChild(renderer.domElement)

    const starGeometry = new THREE.BufferGeometry()
    const starCount = 10000
    const positions = []

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      positions.push(x, y, z)
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    const animate = () => {
      stars.rotation.y += 0.0005
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="star-background" />
}

export default StarBackground
