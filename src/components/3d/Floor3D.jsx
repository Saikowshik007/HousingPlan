import Room3D from './Room3D'
import { SCALE } from '../../data/buildingData'

function Floor3D({ floor, opacity = 1, showCeiling = false }) {
  const { yOffset } = floor

  // Stilt floor has flat rooms array; residential floors have frontRooms/staircase/backRooms
  const allRooms = floor.rooms
    ? floor.rooms
    : [...floor.frontRooms, floor.staircase, ...floor.backRooms]

  return (
    <group>
      {/* Floor slab - only visible when opacity is low */}
      {opacity < 0.5 && (
        <mesh position={[
          12 * SCALE,
          yOffset * SCALE - 0.01,
          48 * SCALE,
        ]}>
          <boxGeometry args={[24.5 * SCALE, 0.3 * SCALE, 97 * SCALE]} />
          <meshStandardMaterial color="#8B7D6B" transparent opacity={opacity * 0.6} />
        </mesh>
      )}

      {/* Rooms */}
      {allRooms.map((room, i) => (
        <Room3D
          key={`${floor.id}-${i}`}
          {...room}
          yOffset={yOffset}
          opacity={opacity}
          showCeiling={showCeiling}
        />
      ))}
    </group>
  )
}

export default Floor3D
