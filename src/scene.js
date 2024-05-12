import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";

export const myScene = () => {
  // Initialize Tweakpane
  const pane = new Pane({
    title: 'Parameters',
    expanded: true,
  });

  //mockdata
  const planet = 
  {
    name: "Earth",
    radius: 13,
    position: [0, 0, 0],
    speed: 0.1,
    material: 'earthDay',
    cloud:{
      name:'Cloud',
      radius: 1.07,
      speed: 0.1,
      opacity: 0.15,
      material: 'cloud'
    },
    moons: [
      {
        name: "Moon",
        radius: 0.25,
        distance: 2,
        speed: 0.5,
        material: 'moon'
      },
    ],
  };

  // Initialize the scene
  const scene = new THREE.Scene();

  // texture loader
  const textureLoader = new THREE.TextureLoader();
 
  const earthDayMap = textureLoader.load( new URL('../textures/2k_earth_daymap.jpg', import.meta.url).href);
  const earthNightMap = textureLoader.load( new URL('../textures/2k_earth_nightmap.jpg', import.meta.url).href);
  const earthCloudsMap = textureLoader.load( new URL('../textures/2k_earth_clouds.jpg', import.meta.url).href);
  const moonMap = textureLoader.load( new URL('../textures/2k_moon.jpg', import.meta.url).href);

  // Add materials
  const earthDayMaterial = new THREE.MeshLambertMaterial({
    map: earthDayMap,
    name: 'earthDay',
  });

  const earthNightMaterial = new THREE.MeshLambertMaterial({
    map: earthNightMap,
    name: 'earthNight',
  });

  const moonMaterial = new THREE.MeshLambertMaterial({
    map: moonMap,
    name:'moon'
  });

  const cloudMaterial = new THREE.MeshPhongMaterial({
    map: earthCloudsMap,
    name: 'cloud',
    transparent: true,
    opacity: planet.cloud.opacity
    });

    //improve performance
    [earthDayMap, earthNightMap, earthCloudsMap, moonMap].forEach((texture) => {
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        // texture.magFilter = THREE.NearestFilter;
    });

    const materials = [earthDayMaterial, earthNightMaterial, cloudMaterial, moonMaterial];
    
  // Add geometry and improve its performance
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

      // Add mesh
    const planetMesh = new THREE.Mesh( sphereGeometry, materials.find(material => material.name === planet.material));
    const cloudMesh = new THREE.Mesh(sphereGeometry, materials.find(material => material.name === planet.cloud.material));
    const moonMesh = new THREE.Mesh(sphereGeometry,materials.find(material => material.name ===planet.moons[0].material));

    planetMesh.scale.setScalar(planet.radius);
    planetMesh.position.set(planet.position[0], planet.position[1], planet.position[2]);

    moonMesh.name = planet.moons[0].name;
    moonMesh.scale.setScalar(planet.moons[0].radius);
    moonMesh.position.x = planet.moons[0].distance;

    cloudMesh.name = planet.cloud.name;
    cloudMesh.scale.setScalar(planet.cloud.radius);

    planetMesh.add(cloudMesh);
    planetMesh.add(moonMesh);
    scene.add(planetMesh);


  // Add lights
  const ambientLight = new THREE.AmbientLight(0x333333,1);
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0xffffff, 400);
  pointLight.position.set(20, 21, 15);
  scene.add(pointLight);

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  scene.add(pointLightHelper);

  // Initialize the camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 80;
  camera.position.y = 5;

  // Initialize the renderer
  const canvas = document.querySelector("canvas.threejs");
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Add controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.maxDistance = 200;
  controls.minDistance = 20;

  // Add resize listener
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Add planet properties to the pane
  const planetFolder = pane.addFolder({ title: "Planet" });
  planetFolder.addBinding(planet, "radius", { min: 5, max: 20, step: 0.1 }).on("change", (ev) => {
    planetMesh.scale.setScalar(ev.value);
  });
  planetFolder.addBinding(planet, "speed", { min: 0, max: 1, step: 0.01 });
const toggleTexture = { dayTexture: true };
planetFolder.addBinding(toggleTexture, 'dayTexture', { label: 'Day Texture' }).on('change', ({value}) => {
    planetMesh.material = value ? earthDayMaterial : earthNightMaterial;
    planet.material = value ? 'earthDay' : 'earthNight';
});

    // Add cloud properties to the pane
  const cloudFolder = pane.addFolder({ title: "Cloud" });
  cloudFolder.addBinding(planet.cloud, "radius", { min: 1.01, max: 1.5, step: 0.01 })
  .on("change", (ev) => {
    planetMesh.children[0].scale.setScalar(ev.value);
  });
  cloudFolder.addBinding(planet.cloud, "speed", { min: 0, max: 1, step: 0.01 });
  cloudFolder.addBinding(planet.cloud, "opacity", { min: 0, max: 1, step: 0.05 })
 .on("change", (ev) => {
    console.log(ev.value)
    planet.cloud.opacity = ev.value;
    planetMesh.children[0].material.opacity = ev.value;
    renderer.render(scene,camera)
  });

  // Add moon properties to the pane
  const moonFolder = pane.addFolder({ title: "Moon" });
  moonFolder.addBinding(planet.moons[0], "radius", { min: 0.1, max: 1, step: 0.05 }).on("change", (ev) => {
    planetMesh.children[1].scale.setScalar(ev.value);
  });
  moonFolder.addBinding(planet.moons[0], "speed", { min: 0, max: 1, step: 0.01 });
  moonFolder.addBinding(planet.moons[0], "distance", { min: 1, max: 10, step: 0.1 });

// Add point light properties to the pane
const PointLightFolder = pane.addFolder({ title: "point Light" });
PointLightFolder.addBinding(pointLight.position, "x", { min: -50, max: 50, step: 0.1 }).on("change", () => {
    directionalLightHelper.update();
});
PointLightFolder.addBinding(pointLight.position, "y", { min: -50, max: 50, step: 0.1 }).on("change", () => {
    directionalLightHelper.update();
});
PointLightFolder.addBinding(pointLight.position, "z", { min: -50, max: 50, step: 0.1 }).on("change", () => {
    directionalLightHelper.update();
});
PointLightFolder.addBinding(pointLight, "intensity", { min: 100, max: 1000, step: 10 }).on("change", () => {
    directionalLightHelper.update();
});

const ambientLightFolder = pane.addFolder({ title: "ambient Light" });
ambientLightFolder.addBinding(ambientLight, "intensity", { min: 0, max: 5, step: 0.1 }).on("change", () => {
    directionalLightHelper.update();
});

const cameraFolder = pane.addFolder({ title: "camera" });
cameraFolder.addBinding(camera.position, "z", { min: 20, max: 200, step: 1 }).on("change", ({value}) => {
    camera.position.z = value;
});
cameraFolder.addBinding(camera.position, "y", { min: -50, max: 50, step: 1 }).on("change", ({value}) => {
    camera.position.y = value;
});
cameraFolder.addBinding(camera.position, "x", { min: -100, max: 100, step: 1 }).on("change", ({value}) => {
    camera.position.x = value;
});

  // Render loop
 const clock = new THREE.Clock();
  
  const renderloop = () => {
    const elapsedTime = clock.getElapsedTime();
  
      planetMesh.rotation.y = planet.speed * elapsedTime;
      planetMesh.children.forEach((mesh, meshIndex) => {
          if(mesh.name === 'Moon'){
              mesh.rotation.y = planet.moons[meshIndex-1].speed * elapsedTime;
              mesh.position.x = Math.sin(mesh.rotation.y) * planet.moons[meshIndex-1].distance;
              mesh.position.z = Math.cos(mesh.rotation.y) * planet.moons[meshIndex-1].distance;
          }
          if(mesh.name === 'Cloud'){
              mesh.rotation.y = planet.cloud.speed * elapsedTime;
          }
  
      });
  
      controls.update();
      renderer.render(scene, camera);
  
      window.requestAnimationFrame(renderloop);
  };

  renderloop();
};