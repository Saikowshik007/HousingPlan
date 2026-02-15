import FloorCard from '../common/FloorCard'
import UnitHeader from '../common/UnitHeader'
import StairRow from '../common/StairRow'
import BHK3Unit from './BHK3Unit'

function Floor3() {
  return (
    <FloorCard
      title="3rd Floor - 3BHK (Front) + 3BHK (Back)"
      description="Each unit: 24 ft x 44 ft = ~1,056 sq ft | Extra bedroom + bathroom"
    >
      <div className="fb-plan">
        <div className="direction-label dir-road">ROAD SIDE (Front)</div>

        <UnitHeader type="bhk3">UNIT E - 3 BHK (Front) | 1,056 sq ft</UnitHeader>
        <BHK3Unit position="front" />

        <StairRow
          leftLabel="Unit E"
          rightLabel="Unit F"
          stairText="Staircase + Lift"
          style={{ minHeight: '70px' }}
        />

        <UnitHeader type="bhk3">UNIT F - 3 BHK (Back) | 1,056 sq ft</UnitHeader>
        <BHK3Unit position="back" />

        <div className="direction-label dir-rear">REAR SIDE</div>
      </div>
    </FloorCard>
  )
}

export default Floor3
