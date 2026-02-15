// Building dimensions in feet
// Plot: 30' x 108', After setbacks: 24' x 97'
// Each floor ~10ft height, Stilt ~12ft height

export const COLORS = {
  master: '#A8C6E0',
  bedroom: '#CDDDF0',
  hall: '#FDF2D0',
  kitchen: '#C8EACD',
  bath: '#DCC8E8',
  balcony: '#F7CFC8',
  wash: '#B8D8E8',
  pooja: '#F9E2C0',
  passage: '#E8E2DA',
  parking: '#DFE2E2',
  staircase: '#D4D4D4',
  utility: '#C8D8D8',
}

const BUILDING_WIDTH = 24 // ft (x-axis)
const UNIT_DEPTH_2BHK = 40 // ft (z-axis)
const UNIT_DEPTH_3BHK = 44 // ft (z-axis)
const STAIR_DEPTH = 16 // ft
const STILT_HEIGHT = 12
const FLOOR_HEIGHT = 10

// Helper: create room object
function room(name, type, x, z, w, d, h) {
  return { name, type, x, z, w, d, h }
}

// ─── 2BHK Unit rooms (origin at unit's front-left corner) ───
function create2BHKRooms() {
  const h = FLOOR_HEIGHT - 0.5 // room height with slab gap
  return [
    // Balcony (full width, 4' deep)
    room('Balcony', 'balcony', 0, 0, 24, 4, h),
    // Living + Dining (16' x 12')
    room('Living + Dining', 'hall', 0, 4, 16, 12, h),
    // Kitchen (8' x 10')
    room('Kitchen', 'kitchen', 16, 4, 8, 10, h),
    // Wash area (4' x 5')
    room('Wash', 'wash', 16, 14, 4, 5, h),
    // Pooja (4' x 4')
    room('Pooja', 'pooja', 20, 14, 4, 4, h),
    // Master Bedroom (12' x 13')
    room('Master Bedroom', 'master', 0, 16, 12, 13, h),
    // Bedroom 2 (10' x 12')
    room('Bedroom 2', 'bedroom', 12, 16, 10, 12, h),
    // Passage (4' wide strip)
    room('Passage', 'passage', 22, 18, 2, 10, h),
    // Attached Bath (8' x 5')
    room('Attached Bath', 'bath', 0, 29, 8, 5, h),
    // Common Bath (7' x 5')
    room('Common Bath', 'bath', 8, 28, 7, 5, h),
    // Passage near bath
    room('Passage', 'passage', 15, 28, 9, 5, h),
    // Entrance area
    room('Entrance', 'passage', 0, 34, 24, 6, h),
  ]
}

// ─── 3BHK Unit rooms ───
function create3BHKRooms() {
  const h = FLOOR_HEIGHT - 0.5
  return [
    // Balcony (full width, 4' deep)
    room('Balcony', 'balcony', 0, 0, 24, 4, h),
    // Living + Dining (16' x 14')
    room('Living + Dining', 'hall', 0, 4, 16, 14, h),
    // Kitchen (8' x 10')
    room('Kitchen', 'kitchen', 16, 4, 8, 10, h),
    // Wash area
    room('Wash', 'wash', 16, 14, 4, 4, h),
    // Pooja
    room('Pooja', 'pooja', 20, 14, 4, 4, h),
    // Master Bedroom (12' x 13')
    room('Master Bedroom', 'master', 0, 18, 12, 13, h),
    // Bedroom 2 (10' x 11')
    room('Bedroom 2', 'bedroom', 12, 18, 10, 11, h),
    // Bedroom 3 (10' x 11')
    room('Bedroom 3', 'bedroom', 12, 29, 10, 11, h),
    // Master Bath (8' x 5')
    room('M. Bath', 'bath', 0, 31, 8, 5, h),
    // Bath 2 (5' x 5')
    room('Bath 2', 'bath', 8, 31, 5, 5, h),
    // Bath 3
    room('Bath 3', 'bath', 22, 18, 2, 8, h),
    // Passage / Lobby
    room('Passage', 'passage', 0, 36, 24, 4, h),
    // Entrance area
    room('Entrance', 'passage', 0, 40, 24, 4, h),
  ]
}

// ─── Stilt Floor (parking) ───
function createStiltRooms() {
  const h = STILT_HEIGHT - 0.5
  const slotW = 9
  const slotD = 18
  return [
    // Front parking slots (4)
    room('Car Slot 1', 'parking', 0, 0, slotW, slotD, h),
    room('Car Slot 2', 'parking', slotW + 1, 0, slotW, slotD, h),
    room('Car Slot 3', 'parking', 0, slotD + 1, slotW, slotD, h),
    room('Car Slot 4', 'parking', slotW + 1, slotD + 1, slotW, slotD, h),
    // Two-wheeler + staircase
    room('Two-Wheelers', 'parking', 0, 38, 8, 10, h),
    room('Staircase + Lift', 'staircase', 8, 38, 8, 16, h),
    room('Two-Wheelers', 'parking', 16, 38, 8, 10, h),
    // Rear parking slots (4)
    room('Car Slot 5', 'parking', 0, 55, slotW, slotD, h),
    room('Car Slot 6', 'parking', slotW + 1, 55, slotW, slotD, h),
    room('Car Slot 7', 'parking', 0, 74, slotW, slotD, h),
    room('Car Slot 8', 'parking', slotW + 1, 74, slotW, slotD, h),
    // Utilities
    room('Sump Room', 'utility', 0, 93, 8, 4, h),
    room('Electrical', 'utility', 8, 93, 8, 4, h),
    room('Security', 'utility', 16, 93, 8, 4, h),
  ]
}

// ─── Staircase (common across residential floors) ───
function createStaircase() {
  return room('Staircase + Lift', 'staircase', 8, 40, 8, 16, FLOOR_HEIGHT - 0.5)
}

// ─── Floor assembly ───
// Front unit is towards road (z=0), staircase in middle, back unit towards rear

function assembleResidentialFloor(frontUnit, backUnit, frontDepth, backDepth) {
  const stair = createStaircase()
  // Front unit: z starts at 0
  const frontRooms = frontUnit.map(r => ({ ...r }))
  // Back unit: flip and offset behind staircase
  const backStart = frontDepth + STAIR_DEPTH
  const backRooms = backUnit.map(r => ({
    ...r,
    // Mirror: place from back
    z: backStart + (backDepth - r.z - r.d),
  }))
  return { frontRooms, staircase: stair, backRooms }
}

// ─── Exported building data ───
export const buildingFloors = [
  {
    id: 'stilt',
    label: 'Stilt Parking',
    yOffset: 0,
    height: STILT_HEIGHT,
    rooms: createStiltRooms(),
  },
  {
    id: 'f1',
    label: '1st Floor (2BHK + 2BHK)',
    yOffset: STILT_HEIGHT,
    height: FLOOR_HEIGHT,
    ...assembleResidentialFloor(create2BHKRooms(), create2BHKRooms(), UNIT_DEPTH_2BHK, UNIT_DEPTH_2BHK),
  },
  {
    id: 'f2',
    label: '2nd Floor (2BHK + 2BHK)',
    yOffset: STILT_HEIGHT + FLOOR_HEIGHT,
    height: FLOOR_HEIGHT,
    ...assembleResidentialFloor(create2BHKRooms(), create2BHKRooms(), UNIT_DEPTH_2BHK, UNIT_DEPTH_2BHK),
  },
  {
    id: 'f3',
    label: '3rd Floor (3BHK + 3BHK)',
    yOffset: STILT_HEIGHT + FLOOR_HEIGHT * 2,
    height: FLOOR_HEIGHT,
    ...assembleResidentialFloor(create3BHKRooms(), create3BHKRooms(), UNIT_DEPTH_3BHK, UNIT_DEPTH_3BHK),
  },
  {
    id: 'f4',
    label: '4th Floor (2BHK + 2BHK)',
    yOffset: STILT_HEIGHT + FLOOR_HEIGHT * 3,
    height: FLOOR_HEIGHT,
    ...assembleResidentialFloor(create2BHKRooms(), create2BHKRooms(), UNIT_DEPTH_2BHK, UNIT_DEPTH_2BHK),
  },
]

export const SCALE = 0.1 // 1 foot = 0.1 three.js units (for manageable scene size)
