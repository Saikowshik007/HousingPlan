import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Text, Grid } from '@react-three/drei'
import { useState } from 'react'
import Room3D from './3d/Room3D'
import Floor3DView from './3d/Floor3DView'

function FloorPlan3D() {
  const [selectedFloor, setSelectedFloor] = useState('floor1')
  const [viewMode, setViewMode] = useState('perspective') // 'perspective' or 'top'

  return (
    <div style={{ width: '100%', height: '100vh', background: '#1a1a1a' }}>
      {/* Controls */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 10,
        background: 'rgba(0,0,0,0.7)',
        padding: '20px',
        borderRadius: '10px',
        color: 'white'
      }}>
        <h3 style={{ margin: '0 0 15px 0' }}>3D Floor Plan Viewer</h3>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Select Floor:</label>
          <select
            value={selectedFloor}
            onChange={(e) => setSelectedFloor(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              background: '#333',
              color: 'white',
              cursor: 'pointer',
              width: '200px'
            }}
          >
            <option value="stilt">Stilt Floor</option>
            <option value="floor1">1st Floor - 2BHK Units</option>
            <option value="floor2">2nd Floor - 2BHK Units</option>
            <option value="floor3">3rd Floor - 3BHK Units</option>
            <option value="floor4">4th Floor - 3BHK Units</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>View Mode:</label>
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              background: '#333',
              color: 'white',
              cursor: 'pointer',
              width: '200px'
            }}
          >
            <option value="perspective">Perspective View</option>
            <option value="top">Top View</option>
          </select>
        </div>

        <div style={{ fontSize: '12px', marginTop: '15px', opacity: 0.8 }}>
          <p style={{ margin: '5px 0' }}>🖱️ Left click + drag to rotate</p>
          <p style={{ margin: '5px 0' }}>🖱️ Right click + drag to pan</p>
          <p style={{ margin: '5px 0' }}>🖱️ Scroll to zoom</p>
        </div>
      </div>

      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 10,
        background: 'rgba(0,0,0,0.7)',
        padding: '15px',
        borderRadius: '10px',
        color: 'white'
      }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Room Types</h4>
        <div style={{ display: 'grid', gap: '8px', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', background: '#87CEEB', border: '1px solid white' }}></div>
            <span>Living/Dining</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', background: '#FFD700', border: '1px solid white' }}></div>
            <span>Master Bedroom</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', background: '#98FB98', border: '1px solid white' }}></div>
            <span>Bedroom</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', background: '#FF6347', border: '1px solid white' }}></div>
            <span>Kitchen</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', background: '#40E0D0', border: '1px solid white' }}></div>
            <span>Bathroom</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', background: '#DDA0DD', border: '1px solid white' }}></div>
            <span>Balcony</span>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          position={viewMode === 'top' ? [0, 50, 0] : [30, 25, 30]}
          fov={60}
        />

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={viewMode === 'top' ? 0 : Math.PI / 2}
          minPolarAngle={viewMode === 'top' ? 0 : 0}
        />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-10, 10, -10]} intensity={0.3} />
        <pointLight position={[0, 10, 0]} intensity={0.5} />

        {/* Grid */}
        <Grid
          args={[100, 100]}
          cellSize={1}
          cellThickness={0.5}
          cellColor="#6e6e6e"
          sectionSize={5}
          sectionThickness={1}
          sectionColor="#9d4b4b"
          fadeDistance={100}
          fadeStrength={1}
          position={[0, -0.01, 0]}
        />

        {/* Render selected floor */}
        <Floor3DView floorType={selectedFloor} />
      </Canvas>
    </div>
  )
}

export default FloorPlan3D
