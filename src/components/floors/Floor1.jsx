import FloorCard from '../common/FloorCard'
import UnitHeader from '../common/UnitHeader'
import StairRow from '../common/StairRow'
import BHK2Unit from './BHK2Unit'
import Legend from '../Legend'

function Floor1() {
  return (
    <FloorCard
      title="1st Floor - 2BHK (Front) + 2BHK (Back)"
      description="Each unit: 24 ft x 40 ft = ~960 sq ft | Full width, proper rooms"
    >
      <div className="fb-plan">
        <div className="direction-label dir-road">ROAD SIDE (Front - 30 ft)</div>

        <UnitHeader type="front-lbl">UNIT A - 2 BHK (Front Unit) | 960 sq ft</UnitHeader>
        <BHK2Unit position="front" />

        <StairRow
          leftLabel="Unit A Entrance"
          rightLabel="Unit B Entrance"
          stairText="Staircase + Lift"
          stairSubtext="8' x 16' | Common Landing"
          style={{ minHeight: '70px' }}
        />

        <UnitHeader type="back-lbl">UNIT B - 2 BHK (Back Unit) | 960 sq ft</UnitHeader>
        <BHK2Unit position="back" />

        <div className="direction-label dir-rear">REAR SIDE (Back)</div>
      </div>

      <Legend />
    </FloorCard>
  )
}

export default Floor1
