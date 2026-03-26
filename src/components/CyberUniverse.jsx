import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const CyberUniverse = () => {
  const ref = useRef();
  const [particles] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * 0.03;
    ref.current.rotation.x -= delta * 0.01;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00ffcc" size={0.04} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
};

export default CyberUniverse;
