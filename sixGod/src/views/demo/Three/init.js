export const camera = new THREE.PerspectiveCamera(70,
    window.innerWidth / window.innerHeight, 0.01, 5000);
camera.position.z = 1200;

// 创建一个新场景;
export const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
export const domElement = renderer.domElement;
