import * as THREE from "three"
import Car from "./components/Car"
import { renderFieldMesh, renderPlane } from "./components/Track"

const scene = new THREE.Scene()

const playerCar = Car()

scene.add(playerCar)


// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
dirLight.position.set(100, -300, 400)
scene.add(dirLight)

// Set up camera

const aspectRatio = window.innerWidth / window.innerHeight;

// const camera = new THREE.PerspectiveCamera(
//     20,
//     aspectRatio,
//     60,
//     100
// )

const cameraWidth = 960;
const cameraHeight = cameraWidth / aspectRatio

const camera = new THREE.OrthographicCamera(
    cameraWidth / -2,    // left
    cameraWidth / 2,     // right
    cameraHeight / 2,    // top
    cameraHeight / -2,   // bottom
    0,                 // near plane
    1000               // far plane
)

camera.position.set(0, -210, 300)
// camera.position.set(200, -200, 300)
// camera.up.set(0, 0, 1)
camera.lookAt(0, 0, 0)

renderMap(cameraWidth, cameraHeight)

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

export const rendererDom = renderer.domElement

function renderMap(mapWidth, mapHeight){
    const plane = renderPlane(mapWidth, mapHeight)
    scene.add(plane)
    const fieldMesh = renderFieldMesh(mapWidth, mapHeight)
    scene.add(fieldMesh)
}


