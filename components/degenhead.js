import { useColorMode } from '@chakra-ui/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { HeadSpinner, HeadContainer } from './degenheadloader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const DegenHead = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0, 0, 0))
  const { colorMode } = useColorMode()
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      -5,
      30 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        1,
        500
      )
      camera.zoom = 40
      camera.updateProjectionMatrix()
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const pointLight = new THREE.PointLight(0xcccccc, 2)
      pointLight.position.set(80, 8, 4)
      const pointLight2 = new THREE.PointLight(0xcccccc, 2)
      pointLight2.position.set(-80, 30, 40)
      scene.add(pointLight)
      scene.add(pointLight2)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.3
      controls.target = target
      setControls(controls)

      loadGLTFModel(scene, 'HEAD (NO Shoulders).glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  const setFaceColor = hex => {
    scene.children[2]?.children[0]?.material?.color.setHex(hex)
  }

  const setFace = () => {
    if (colorMode == 'light') {
      setFaceColor(0xff4444)
    } else {
      setFaceColor(0x000000)
    }
  }

  const setGlassesMaterial = () => {
    const glass = new THREE.MeshPhysicalMaterial({
      metalness: 0,
      roughness: 0.2,
      envMap: new THREE.WebGLCubeRenderTarget(2048).texture,
      refractionRatio: 1,
      transparent: true,
      transmission: 0.99,
      side: THREE.DoubleSide,
      clearcoat: 1.0,
      clearcoatRoughness: 0.39
    })

    // Sets glasses lense to a glass like material
    if (scene.children[2]) {
      scene.children[2].children[1].children[2].material = glass
    }
  }

  useEffect(() => {
    setFace()
  }, [colorMode])

  setGlassesMaterial()
  return (
    <HeadContainer ref={refContainer}>
      {loading && <HeadSpinner />}
    </HeadContainer>
  )
}

export default DegenHead
