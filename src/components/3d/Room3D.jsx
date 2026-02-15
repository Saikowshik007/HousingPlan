import { useState, useRef } from 'react'
import { Html } from '@react-three/drei'
import { DoubleSide } from 'three'
import { COLORS, SCALE } from '../../data/buildingData'

function Room3D({ name, type, x, z, w, d, h, yOffset, opacity = 1, showCeiling = false }) {
  const [hovered, setHovered] = useState(false)

  const color = COLORS[type] || '#cccccc'
  const s = SCALE
  const wallThickness = 0.015 // Thin walls in 3D units

  // Calculate positions (bottom-left corner origin)
  const baseX = x * s
  const baseY = yOffset * s
  const baseZ = z * s
  const width = w * s
  const height = h * s
  const depth = d * s

  // Center positions for labels
  const centerX = baseX + width / 2
  const centerY = baseY + height / 2
  const centerZ = baseZ + depth / 2

  return (
    <group>
      {/* Floor */}
      <mesh
        position={[centerX, baseY, centerZ]}
        receiveShadow
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[width, wallThickness, depth]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={opacity * 0.9}
          side={DoubleSide}
        />
      </mesh>

      {/* Ceiling - very transparent or hidden */}
      {showCeiling && (
        <mesh position={[centerX, baseY + height, centerZ]} castShadow>
          <boxGeometry args={[width, wallThickness, depth]} />
          <meshStandardMaterial
            color="#f5f5f5"
            transparent
            opacity={opacity * 0.15}
            side={DoubleSide}
          />
        </mesh>
      )}

      {/* Back Wall (positive Z) */}
      <mesh
        position={[centerX, centerY, baseZ + depth]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[width, height, wallThickness]} />
        <meshStandardMaterial
          color="#E8E2DA"
          transparent
          opacity={opacity * 0.7}
          side={DoubleSide}
        />
      </mesh>

      {/* Left Wall (negative X) */}
      <mesh
        position={[baseX, centerY, centerZ]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[wallThickness, height, depth]} />
        <meshStandardMaterial
          color="#E8E2DA"
          transparent
          opacity={opacity * 0.7}
          side={DoubleSide}
        />
      </mesh>

      {/* Right Wall (positive X) */}
      <mesh
        position={[baseX + width, centerY, centerZ]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[wallThickness, height, depth]} />
        <meshStandardMaterial
          color="#E8E2DA"
          transparent
          opacity={opacity * 0.7}
          side={DoubleSide}
        />
      </mesh>

      {/* Front Wall (negative Z) - More transparent to see inside */}
      <mesh
        position={[centerX, centerY, baseZ]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[width, height, wallThickness]} />
        <meshStandardMaterial
          color="#E8E2DA"
          transparent
          opacity={opacity * 0.3}
          side={DoubleSide}
        />
      </mesh>

      {/* Room Label on floor */}
      {opacity > 0.5 && (
        <Html
          position={[centerX, baseY + 0.02, centerZ]}
          center
          distanceFactor={10}
          style={{ pointerEvents: 'none' }}
        >
          <div style={{
            background: hovered ? 'rgba(30,27,24,0.85)' : 'rgba(30,27,24,0.65)',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontFamily: 'DM Sans, sans-serif',
            whiteSpace: 'nowrap',
            fontWeight: hovered ? 'bold' : 'normal',
            border: hovered ? '1px solid #B8712D' : 'none',
          }}>
            {name}
            <br />
            <span style={{ opacity: 0.7, fontSize: '9px' }}>{w}' × {d}'</span>
          </div>
        </Html>
      )}

      {/* Highlight on hover */}
      {hovered && (
        <mesh position={[centerX, baseY + 0.01, centerZ]}>
          <boxGeometry args={[width - 0.01, wallThickness + 0.01, depth - 0.01]} />
          <meshBasicMaterial
            color="#FFD700"
            transparent
            opacity={0.3}
          />
        </mesh>
      )}
    </group>
  )
}

export default Room3D
