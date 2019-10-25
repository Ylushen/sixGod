import {camera, renderer, domElement} from './init';
import scene from './createScene';

;(function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}());

export default domElement;
