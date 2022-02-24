import * as THREE from 'three';

export default function createLine() {
  let geo = new THREE.BufferGeometry();
  geo.setFromPoints(
    [
      0, 0, 0,
      3, 0, 0,
      // new THREE.Vector3(),
      // new THREE.Vector3(),
    ]
  );
  const material = new THREE.LineBasicMaterial(
    { color: 0xf6cafe, vertexColors: true}
  );
  return new THREE.Line( geo, material );
};
