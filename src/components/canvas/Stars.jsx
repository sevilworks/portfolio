import { Suspense } from "react";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";

const NUM_STARS = 1500; // Adjust the number of stars as needed

const Stars = () => {
  const sphere = random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1.2 });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="stars-canvas-container">
    <Suspense fallback={null}>
      <Stars />
    </Suspense>

    <Preload all />
  </div>
);

export default StarsCanvas;
