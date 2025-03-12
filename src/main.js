import WebGL from 'three/addons/capabilities/WebGL.js';
import { myScene } from './scene';

if ( WebGL.isWebGLAvailable() ) {

  myScene();

} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById( 'container' ).appendChild( warning );
}


