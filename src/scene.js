import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";

export const myScene = () => {
  // Initialize Tweakpane
  const pane = new Pane({
    title: 'Parameters',
    expanded: true,
  });

  // Initialize the scene
  const scene = new THREE.Scene();

  // texture loader
  const textureLoader = new THREE.TextureLoader();
  const earthDayMap = textureLoader.load('/textures/2k_earth_daymap.jpg');
//   const earthNightMap = textureLoader.load('/textures/2k_earth_nightmap.jpg');
//   const earthNormalMap = textureLoader.load('/textures/2k_earth_normal_map.tif');
//   const earthSpecularMap = textureLoader.load('/textures/2k_earth_specular_map.tif');
  const earthCloudsMap = textureLoader.load('/textures/2k_earth_clouds.jpg');
  const moonTexture = textureLoader.load('/textures/2k_moon.jpg');

  // Add materials
  const planetMaterial = new THREE.MeshStandardMaterial({
    map: earthDayMap,
    // normalMap: earthNormalMap,
    // specularMap: earthSpecularMap,
    // specular: new THREE.Color('gray')
  });

  const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
  });

  // Add geometry
  const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);

  // Create cloud layer
    const cloudGeometry = new THREE.SphereGeometry(1, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
    map: earthCloudsMap,
    transparent: true,
    opacity: 0.2
    });

    const cloudeMesh = new THREE.Mesh(cloudGeometry, cloudMaterial)
    cloudeMesh.scale.setScalar(13.5);
    scene.add(cloudeMesh);
    

  const planets = [
    {
      name: "Earth",
      radius: 13,
      position: [0, 0, 0],
      speed: 0.002,
      material: planetMaterial,
      moons: [
        {
          name: "Moon",
          radius: 0.25,
          distance: 3,
          speed: 0.01,
          material: moonMaterial
        },
      ],
    }
  ];

  const createPlanet = (planet) => {
    const planetMesh = new THREE.Mesh(
      sphereGeometry,
      planet.material
    );

    planetMesh.scale.setScalar(planet.radius);
    planetMesh.position.set(planet.position[0], planet.position[1], planet.position[2]);
    return planetMesh;
  }

  const createMoon = (moon) => {
    const moonMesh = new THREE.Mesh(
      sphereGeometry,
      moon.material
    );
    moonMesh.scale.setScalar(moon.radius);
    moonMesh.position.x = moon.distance;
    return moonMesh;
  }

  const planetMeshes = planets.map((planet) => {
    const planetMesh = createPlanet(planet);
    scene.add(planetMesh);

    planet.moons.forEach((moon) => {
      const moonMesh = createMoon(moon);
      planetMesh.add(moonMesh);
    });
    return planetMesh;
  });

  console.log(planetMeshes);

  // Add lights
  const ambientLight = new THREE.AmbientLight(0x333333,0.3);
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0xffffff, 300);
  pointLight.position.set(20, 21, 15);
  scene.add(pointLight);

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  scene.add(pointLightHelper);

//   const directionalLight = new THREE.DirectionalLight(
//     0xffffff,
//     5
//   );
//   directionalLight.position.set(22, 17, -7);
//   scene.add(directionalLight);

  // Add the directional light helper
//   const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 3);
//   scene.add(directionalLightHelper);



  // Initialize the camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 50;
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
  planetFolder.addBinding(planets[0], "radius", { min: 5, max: 20, step: 0.1 }).on("change", (ev) => {
    planetMeshes[0].scale.setScalar(ev.value);
  });
  planetFolder.addBinding(planets[0], "speed", { min: 0, max: 0.1, step: 0.001 });

  // Add moon properties to the pane
  const moonFolder = pane.addFolder({ title: "Moon" });
  moonFolder.addBinding(planets[0].moons[0], "radius", { min: 0.1, max: 1, step: 0.05 }).on("change", (ev) => {
    planetMeshes[0].children[0].scale.setScalar(ev.value);
  });
  moonFolder.addBinding(planets[0].moons[0], "speed", { min: 0, max: 0.1, step: 0.001 });
  moonFolder.addBinding(planets[0].moons[0], "distance", { min: 1, max: 10, step: 0.1 });

  // Add directional light properties to the pane
//   const lightFolder = pane.addFolder({ title: "Directional Light" });
//   lightFolder.addBinding(directionalLight.position, "x", { min: -50, max: 50, step: 0.1 }).on("change", () => {
//     directionalLightHelper.update();
//   });
//   lightFolder.addBinding(directionalLight.position, "y", { min: -50, max: 50, step: 0.1 }).on("change", () => {
//     directionalLightHelper.update();
//   });
//   lightFolder.addBinding(directionalLight.position, "z", { min: -50, max: 50, step: 0.1 }).on("change", () => {
//     directionalLightHelper.update();
//   });
//   lightFolder.addBinding(directionalLight, "intensity", { min: 0, max: 10, step: 0.1 }).on("change", () => {
//     directionalLightHelper.update();
//   });

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
    PointLightFolder.addBinding(pointLight, "intensity", { min: 100, max: 500, step: 10 }).on("change", () => {
      directionalLightHelper.update();
    });

    const ambientLightFolder = pane.addFolder({ title: "ambient Light" });
    ambientLightFolder.addBinding(ambientLight, "intensity", { min: 0, max: 2, step: 0.1 }).on("change", () => {
        directionalLightHelper.update();
      });
  // Render loop
  const renderloop = () => {
    cloudeMesh.rotation.y += 0.005;
    planetMeshes.forEach((planet, planetIndex) => {
      planet.rotation.y += planets[planetIndex].speed;
      planet.children.forEach((moon, moonIndex) => {
        moon.rotation.y += planets[planetIndex].moons[moonIndex].speed;
        moon.position.x = Math.sin(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance;
        moon.position.z = Math.cos(moon.rotation.y) * planets[planetIndex].moons[moonIndex].distance;
      });
    });

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(renderloop);
  };

  renderloop();
};