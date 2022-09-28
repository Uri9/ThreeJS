import { useEffect, useRef} from 'react'
import * as Three from 'three'

const Scene = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const currentMount = mountRef.current
    //scene
    const scene = new Three.Scene()
    const camera = new Three.PerspectiveCamera(
      25,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 4
    scene.add(camera)

    //renderer
    const renderer = new Three.WebGLRenderer()
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    currentMount.appendChild(renderer.domElement)

    //cube
    const cube = new Three.Mesh(
      new Three.BoxGeometry(1, 1, 1),
      new Three.MeshBasicMaterial({ color: 0x00ff00 }),
    )
    scene.add(cube)
    

    //sphere
    const geometry = new Three.SphereGeometry( 0.5, 32, 16 );
    const material = new Three.MeshBasicMaterial( { color: 0xffff00 } );
    const sphere = new Three.Mesh( geometry, material );
    scene.add( sphere );
    sphere.position.x = 1.5
    sphere.position.y = 0.5

    //tours
    const geometry1 = new Three.TorusKnotGeometry( 0.3, 0.1, 100, 16 );
    const material1 = new Three.MeshBasicMaterial( { color: 0xffff00 } );
    const torusKnot = new Three.Mesh( geometry1, material1 );
    scene.add( torusKnot );
    torusKnot.position.x = -1.5
    torusKnot.position.y = -0.5

    //render
    renderer.render(scene, camera)

    //clean up scene
    return () => {
      currentMount.removeChild(renderer.domElement)
    }

  }, [])
    return (
      <div 
        className='Contenedor3D'
        style={{ width: '100%', height: '100vh' }}
        ref={mountRef}
      >
        hola
      </div>
    )
  
}

export default Scene
