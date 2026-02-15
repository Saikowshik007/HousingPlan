import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Floor3D from './Floor3D'
import { buildingFloors, SCALE } from '../../data/buildingData'

function Scene({ selectedFloor, showCeiling }) {
  return (
    <>
      {/* Lighting - enhanced for better interior visibility */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 15, 10]} intensity={0.8} castShadow />
      <directionalLight position={[-10, 10, -10]} intensity={0.5} />
      <directionalLight position={[0, 15, 0]} intensity={0.4} />
      <pointLight position={[12 * SCALE, 5, 48 * SCALE]} intensity={0.6} distance={20} />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[12 * SCALE, -0.02, 48 * SCALE]}>
        <planeGeometry args={[40 * SCALE, 120 * SCALE]} />
        <meshStandardMaterial color="#E8E0D4" />
      </mesh>

      {/* Grid helper */}
      <gridHelper args={[15, 30, '#ccc', '#e8e8e8']} position={[12 * SCALE, -0.01, 48 * SCALE]} />

      {/* Building floors */}
      {buildingFloors.map((floor) => (
        <Floor3D
          key={floor.id}
          floor={floor}
          showCeiling={showCeiling}
          opacity={
            selectedFloor === 'all'
              ? 0.85
              : selectedFloor === floor.id
                ? 1
                : 0.08
          }
        />
      ))}

      {/* Road label indicator (front) */}
      <mesh position={[12 * SCALE, 0.01, -2 * SCALE]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[24 * SCALE, 1 * SCALE]} />
        <meshBasicMaterial color="#B8712D" transparent opacity={0.4} />
      </mesh>
    </>
  )
}

function Building3D() {
  const [selectedFloor, setSelectedFloor] = useState('all')
  const [showCeiling, setShowCeiling] = useState(false)
  const [viewAngle, setViewAngle] = useState('perspective')
  const [showFloorSelector, setShowFloorSelector] = useState(true)
  const [showViewControls, setShowViewControls] = useState(false)

  const floorButtons = [
    { id: 'all', label: 'All Floors' },
    ...buildingFloors.map(f => ({ id: f.id, label: f.label })),
  ]

  const cameraPositions = {
    perspective: [6, 8, 12],
    top: [12 * SCALE, 15, 48 * SCALE],
    front: [12 * SCALE, 4, -5],
    side: [-5, 4, 48 * SCALE],
  }

  return (
    <div className="building-3d-container">
      {/* Mobile toggle buttons */}
      <div className="mobile-toggle-buttons">
        <button
          className={`mobile-toggle ${showFloorSelector ? 'active' : ''}`}
          onClick={() => {
            setShowFloorSelector(!showFloorSelector)
            setShowViewControls(false)
          }}
        >
          🏢 Floors
        </button>
        <button
          className={`mobile-toggle ${showViewControls ? 'active' : ''}`}
          onClick={() => {
            setShowViewControls(!showViewControls)
            setShowFloorSelector(false)
          }}
        >
          👁️ View
        </button>
      </div>

      {/* Floor selector */}
      {showFloorSelector && (
        <div className="floor-selector">
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#C4B5A3', marginBottom: '8px' }}>
            Select Floor
          </div>
          {floorButtons.map(btn => (
            <button
              key={btn.id}
              className={`floor-btn ${selectedFloor === btn.id ? 'active' : ''}`}
              onClick={() => setSelectedFloor(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

      {/* View controls */}
      {showViewControls && (
        <div className="view-controls">
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#C4B5A3', marginBottom: '8px' }}>
            View Angle
          </div>
          <button
            className={`view-btn ${viewAngle === 'perspective' ? 'active' : ''}`}
            onClick={() => setViewAngle('perspective')}
          >
            📐 Perspective
          </button>
          <button
            className={`view-btn ${viewAngle === 'top' ? 'active' : ''}`}
            onClick={() => setViewAngle('top')}
          >
            ⬇️ Top View
          </button>
          <button
            className={`view-btn ${viewAngle === 'front' ? 'active' : ''}`}
            onClick={() => setViewAngle('front')}
          >
            👁️ Front View
          </button>
          <button
            className={`view-btn ${viewAngle === 'side' ? 'active' : ''}`}
            onClick={() => setViewAngle('side')}
          >
            👁️ Side View
          </button>

          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#C4B5A3', marginTop: '12px', marginBottom: '8px' }}>
            Display Options
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E0E0E0', fontSize: '13px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showCeiling}
              onChange={(e) => setShowCeiling(e.target.checked)}
              style={{ cursor: 'pointer' }}
            />
            Show Ceilings
          </label>
        </div>
      )}

      {/* 3D Canvas */}
      <div className="canvas-wrapper">
        <Canvas
          camera={{
            position: cameraPositions[viewAngle],
            fov: 45,
            near: 0.1,
            far: 100,
          }}
        >
          <Scene selectedFloor={selectedFloor} showCeiling={showCeiling} />
          <OrbitControls
            enableDamping
            dampingFactor={0.1}
            target={[12 * SCALE, 2.5, 48 * SCALE]}
            maxPolarAngle={Math.PI / 2.1}
            minDistance={3}
            maxDistance={20}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            touches={{
              ONE: 2, // TOUCH.ROTATE
              TWO: 1  // TOUCH.DOLLY_PAN
            }}
          />
        </Canvas>
      </div>

      {/* Controls hint */}
      <div className="controls-hint">
        <span className="desktop-hint">Drag to rotate &middot; Scroll to zoom &middot; Right-click drag to pan</span>
        <span className="mobile-hint">Touch to rotate &middot; Pinch to zoom &middot; Two fingers to pan</span>
      </div>
    </div>
  )
}

export default Building3D
