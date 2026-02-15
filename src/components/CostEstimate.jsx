import CostTable from './cost/CostTable'
import SummaryGrid from './cost/SummaryGrid'
import GrandTotalTable from './cost/GrandTotalTable'
import NoteBox from './cost/NoteBox'

function CostEstimate() {
  return (
    <>
      <SummaryGrid />

      <CostTable
        title="A. Structural & Civil Work"
        items={[
          { item: 'Foundation (Pile/Raft)', details: 'G+4 building, soil-dependent', cost: '12,00,000 - 15,00,000' },
          { item: 'RCC Structure', details: 'Columns, beams, slabs - Stilt+4', cost: '58,00,000 - 68,00,000' },
          { item: 'Brickwork & Plastering', details: 'AAC/Red bricks, internal+external', cost: '18,00,000 - 23,00,000' },
          { item: 'Staircase + Headroom', details: 'RCC staircase, MS/SS railing', cost: '4,50,000 - 5,50,000' },
        ]}
        subtotal="92,50,000 - 1,11,50,000"
        subtotalLabel="Subtotal - Structural"
      />

      <CostTable
        title="B. Finishing Work"
        items={[
          { item: 'Flooring (Vitrified Tiles)', details: 'All 8 units + common areas, 2x2 or 2x4', cost: '12,00,000 - 16,00,000' },
          { item: 'Doors & Windows', details: 'Teak main door, flush internal, UPVC windows', cost: '8,50,000 - 11,00,000' },
          { item: 'Painting', details: 'Putty + Primer + Emulsion (Asian/Berger)', cost: '6,50,000 - 8,50,000' },
          { item: 'Kitchen Platform', details: '8 kitchens - granite slab + sink + chimney provision', cost: '4,50,000 - 6,00,000' },
          { item: 'Bathroom Fittings', details: 'Hindware/Cera sanitary + Jaquar/equivalent CP fittings', cost: '5,50,000 - 7,50,000' },
        ]}
        subtotal="37,00,000 - 49,00,000"
        subtotalLabel="Subtotal - Finishing"
      />

      <CostTable
        title="C. MEP (Electrical, Plumbing, Fire)"
        items={[
          { item: 'Electrical', details: 'Concealed wiring, modular switches, MCB/DB panel', cost: '7,50,000 - 9,50,000' },
          { item: 'Plumbing & Drainage', details: 'CPVC/PPR pipes, SWR drainage, all 8 units', cost: '6,50,000 - 8,50,000' },
          { item: 'Water Supply', details: 'Sump (10,000L) + OHT (5,000Lx2) + motor + piping', cost: '3,00,000 - 4,50,000' },
          { item: 'Fire Safety', details: 'Extinguishers + hose reel (basic for G+4)', cost: '60,000 - 1,20,000' },
        ]}
        subtotal="17,60,000 - 23,70,000"
        subtotalLabel="Subtotal - MEP"
      />

      <CostTable
        title="D. External & Miscellaneous"
        items={[
          { item: 'Lift Installation', details: '6-person, 5-stop (Stilt+4) - Johnson/Schindler', cost: '7,00,000 - 9,00,000' },
          { item: 'Compound Wall & Gate', details: 'Compound wall + collapsible/sliding MS gate', cost: '3,00,000 - 4,50,000' },
          { item: 'Rain Water Harvesting', details: 'Mandatory in AP/TS - percolation pit system', cost: '50,000 - 1,00,000' },
          { item: 'Septic Tank / STP', details: 'For 8 families (~40 people capacity)', cost: '1,50,000 - 2,50,000' },
          { item: 'Overhead Tank', details: 'Sintex 5000L x 2 with MS stand', cost: '50,000 - 70,000' },
          { item: 'Architect & Engineer Fees', details: 'Structural design + DTCP/GHMC plan approval', cost: '2,50,000 - 4,00,000' },
          { item: 'Govt Fees & Permits', details: 'Labour cess, plan approval, NOCs, misc', cost: '2,00,000 - 3,50,000' },
          { item: 'Common Area Finishing', details: 'Lobby tiles, name board, intercom, CCTV provision', cost: '1,50,000 - 2,50,000' },
        ]}
        subtotal="18,50,000 - 27,70,000"
        subtotalLabel="Subtotal - External"
      />

      <GrandTotalTable />
      <NoteBox />
    </>
  )
}

export default CostEstimate

