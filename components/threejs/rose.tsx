'use client'

import * as React from 'react'
import * as THREE from 'three'

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'

export function Rose() {
    const mountRef = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
        if (!mountRef.current) return

        let camera: THREE.PerspectiveCamera
        let scene: THREE.Scene
        let renderer: THREE.WebGLRenderer
        let object: THREE.Object3D | undefined
        let manager: THREE.LoadingManager
        let animationId: number

        // material template
        let material = new THREE.MeshStandardMaterial({
            metalness: 0,
            roughness: 0.8,
            side: THREE.DoubleSide,
        })

        // init
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight

        camera = new THREE.PerspectiveCamera(33, width / height, 1, 2000)
        camera.position.y = 150
        camera.position.z = 250

        scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 0.5)
        pointLight.castShadow = true
        camera.add(pointLight)
        scene.add(camera)

        // load model
        function loadModel() {
            if (!object) return
            object.traverse(function (child: any) {
                if (child.isMesh) {
                    let newMat = material.clone()
                    if (child.name === 'rose') {
                        newMat.color.set('crimson')
                    } else if (child.name === 'calyx') {
                        newMat.color.set('#001a14')
                    } else if (
                        child.name === 'leaf1' ||
                        child.name === 'leaf2'
                    ) {
                        newMat.color.set('#00331b')
                    }
                    child.material = newMat
                }
            })
            object.rotation.set(0, Math.PI / 1.7, 0)
            object.receiveShadow = true
            object.castShadow = true
            scene.add(object)
        }

        manager = new THREE.LoadingManager(loadModel)

        const loader = new OBJLoader(manager)
        loader.load(
            'https://happy358.github.io/Images/Model/red_rose3.obj',
            (obj) => {
                object = obj
            },
            undefined,
            (err) => {
                console.error('Error loading model', err)
            }
        )

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(width, height)
        renderer.outputEncoding = THREE.sRGBEncoding
        renderer.shadowMap.enabled = true

        mountRef.current.appendChild(renderer.domElement)
        // resize handler
        const handleResize = () => {
            if (!mountRef.current) return
            const w = mountRef.current.clientWidth
            const h = mountRef.current.clientHeight
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
        }
        window.addEventListener('resize', handleResize)

        // animation loop
        const animate = () => {
            animationId = requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()

        // cleanup
        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
            mountRef.current?.removeChild(renderer.domElement)
            scene.clear()
        }
    }, [])

    return <div ref={mountRef} className="w-full h-[600px]" />
}
