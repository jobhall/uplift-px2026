'use client'

import { useState, Suspense, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Center } from "@react-three/drei";
import * as THREE from "three";
import Header from "@/components/Header";
import { WWA_GLASS_CLASSES } from "@/components/WhoWeAre/consts";

export default function D3Client() {
  const [rotationY, setRotationY] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const maxScroll = element.scrollHeight - element.clientHeight;
    const progress = maxScroll > 0 ? element.scrollTop / maxScroll : 0;
    const targetRotation = progress * Math.PI * 2;
    setRotationY(targetRotation);
  };

  return (
    <div className="flex h-lvh items-start justify-center bg-zinc-50 font-sans bg-[url('/images/bgs/bg-demo.webp')] bg-cover bg-center">
      <Header useBlackBtn />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-0">
        <div className="w-full h-full">
          <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
              <Center>
                <Model rotationY={rotationY} />
              </Center>
              <TerrainPlane
                innerColor="#3a3a3a"
                outerColor="#1a1a1a"
                opacity={0.6}
                fadeStart={0.5}
                size={9}
                yPosition={-0.5}
              />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
        <div
          className="absolute inset-0  bg-[url('/images/bgs/bg-demo.webp')] bg-cover bg-center z-2 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to top, transparent 80%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 80%, black 100%)',
          }}
        />


        <div
          id="scroll-container"
          className="w-full h-full overflow-scroll flex flex-col items-center gap-[40svh] pb-[25svh]"
          style={{
            scrollbarWidth: 'none',
          }}
          onScroll={handleScroll}
        >


          <div className={`mt-[25svh] flex flex-col items-center justify-center max-w-[840px] xl:max-w-[960px] w-full ${WWA_GLASS_CLASSES}`}>
            <div className="p-12 xl:p-20">
              <h4 className="text-[4.5rem] xl:text-[5.25rem] leading-none font-serif">The Human Transformation Platform powering <i>enterprise performance</i></h4>
              <p className="text-md xl:text-lg font-mono mt-6 xl:mt-10 tracking-[0.09em]">TRANSFORM WORKFORCE POTENTIAL INTO BUSINESS VALUE</p>
            </div>
          </div>

          <div className={`flex flex-col items-center justify-center max-w-[840px] xl:max-w-[960px] w-full ${WWA_GLASS_CLASSES}`}>
            <div className="p-12 xl:p-20">
              <h4 className="text-[4.5rem] xl:text-[5.25rem] leading-none font-serif">The Human Transformation Platform powering <i>enterprise performance</i></h4>
              <p className="text-md xl:text-lg font-mono mt-6 xl:mt-10 tracking-[0.09em]">TRANSFORM WORKFORCE POTENTIAL INTO BUSINESS VALUE</p>
            </div>
          </div>

          <div className={`flex flex-col items-center justify-center max-w-[840px] xl:max-w-[960px] w-full ${WWA_GLASS_CLASSES}`}>
            <div className="p-12 xl:p-20">
              <h4 className="text-[4.5rem] xl:text-[5.25rem] leading-none font-serif">The Human Transformation Platform powering <i>enterprise performance</i></h4>
              <p className="text-md xl:text-lg font-mono mt-6 xl:mt-10 tracking-[0.09em]">TRANSFORM WORKFORCE POTENTIAL INTO BUSINESS VALUE</p>
            </div>
          </div>

          <div className={`flex flex-col items-center justify-center max-w-[840px] xl:max-w-[960px] w-full ${WWA_GLASS_CLASSES}`}>
            <div className="p-12 xl:p-20">
              <h4 className="text-[4.5rem] xl:text-[5.25rem] leading-none font-serif">The Human Transformation Platform powering <i>enterprise performance</i></h4>
              <p className="text-md xl:text-lg font-mono mt-6 xl:mt-10 tracking-[0.09em]">TRANSFORM WORKFORCE POTENTIAL INTO BUSINESS VALUE</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Model({ rotationY }: { rotationY: number }) {
  const { scene } = useGLTF("/3d/f1.glb");
  const ref = useRef<THREE.Group>(null!);

  // Replace all materials with a wireframe material
  useEffect(() => {
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      wireframe: true,
    });

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = wireframeMaterial;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        rotationY,
        0.05
      );
    }
  });

  return <primitive object={scene} ref={ref} scale={0.015} rotation={[0.6, 0, 0]} position={[0, 0, 1]} />;
}

/* ─── Terrain Plane ─── */

const terrainVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const terrainFragmentShader = /* glsl */ `
  uniform vec3 uInnerColor;
  uniform vec3 uOuterColor;
  uniform float uOpacity;
  uniform float uFadeStart;

  varying vec2 vUv;

  void main() {
    // Distance from center (0,0 → 0.5,0.5 in UV space)
    vec2 centered = vUv - 0.5;
    float dist = length(centered) * 2.0; // 0 at center, 1 at corners

    // Radial gradient: inner → outer color
    vec3 color = mix(uInnerColor, uOuterColor, smoothstep(0.0, 1.0, dist));

    // Alpha fade: fully opaque until fadeStart, then fade to 0 at edge
    float alpha = 1.0 - smoothstep(uFadeStart, 1.0, dist);

    gl_FragColor = vec4(color, alpha * uOpacity);
  }
`;

interface TerrainPlaneProps {
  innerColor?: string;
  outerColor?: string;
  opacity?: number;
  fadeStart?: number;
  size?: number;
  yPosition?: number;
}

function TerrainPlane({
  innerColor = '#3a3a3a',
  outerColor = '#1a1a1a',
  opacity = 0.6,
  fadeStart = 0.4,
  size = 12,
  yPosition = -1.2,
}: TerrainPlaneProps) {
  const uniforms = useMemo(
    () => ({
      uInnerColor: { value: new THREE.Color(innerColor) },
      uOuterColor: { value: new THREE.Color(outerColor) },
      uOpacity: { value: opacity },
      uFadeStart: { value: fadeStart },
    }),
    []
  );

  useFrame(() => {
    uniforms.uInnerColor.value.set(innerColor);
    uniforms.uOuterColor.value.set(outerColor);
    uniforms.uOpacity.value = opacity;
    uniforms.uFadeStart.value = fadeStart;
  });

  return (
    <mesh
      // rotation={[-Math.PI / 2, 0, 0]}
      rotation={[1.0, 0, 0]}
      position={[0, yPosition, -3]}
    >
      <circleGeometry args={[size / 2, 128]} />
      <shaderMaterial
        vertexShader={terrainVertexShader}
        fragmentShader={terrainFragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}
