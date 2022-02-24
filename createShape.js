import * as THREE from "three";

// function createBox(width) {
//   const geometry = new THREE.BoxGeometry( width, width, width, 2, 2);
//   const edges = new THREE.EdgesGeometry( geometry );
//   const material = new THREE.LineBasicMaterial({color: 0x0fffff});
//   return new THREE.LineSegments(edges, material);
// };

function createBoxGeometry(width, height, depth) {
  width = width * 0.5;
  height = height * 0.5;
  depth = depth * 0.5;

  const geometry = new THREE.BufferGeometry();
  const position = [];

  position.push(
    - width, - height, - depth,
    - width, height, - depth,

    - width, height, - depth,
    width, height, - depth,

    width, height, - depth,
    width, - height, - depth,

    width, - height, - depth,
    - width, - height, - depth,

    - width, - height, depth,
    - width, height, depth,

    - width, height, depth,
    width, height, depth,

    width, height, depth,
    width, - height, depth,

    width, - height, depth,
    - width, - height, depth,

    - width, - height, - depth,
    - width, - height, depth,

    - width, height, - depth,
    - width, height, depth,

    width, height, - depth,
    width, height, depth,

    width, - height, - depth,
    width, - height, depth
  );

  geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( position, 3 ) );

  return geometry;
}

export { createBoxGeometry };
