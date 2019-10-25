const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1000, 10, 1000);
const material = new THREE.MeshBasicMaterial({color: 0x8e8e8e});
const cube = new THREE.Mesh(geometry, material);
const box = new THREE.BoxHelper(cube, 0xffff00);
const cubeBox = new THREE.Group();
cubeBox.add(cube, box);
cubeBox.rotation.x = 10;

;(function animate() {
  requestAnimationFrame(animate);
  cubeBox.rotation.x += 0.01;
  cubeBox.rotation.y += 0.01;
}());

scene.add(cubeBox);
export default scene;
