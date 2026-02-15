import FloorCard from '../common/FloorCard'
import UnitHeader from '../common/UnitHeader'
import StairRow from '../common/StairRow'
import BHK2Unit from './BHK2Unit'

function Floor2() {
  return (
    <FloorCard
      title="2nd Floor - 2BHK (Front) + 2BHK (Back)"
      description="Same layout as 1st floor | Unit C (Front) + Unit D (Back) | 960 sq ft each"
    >
      <div className="fb-plan">
        <div className="direction-label dir-road">ROAD SIDE (Front)</div>

        <UnitHeader type="front-lbl">UNIT C - 2 BHK (Front) | 960 sq ft</UnitHeader>
        <BHK2Unit position="front" />

        <StairRow
          leftLabel="Unit C"
          rightLabel="Unit D"
          stairText="Staircase + Lift"
          style={{ minHeight: '70px' }}
        />

        <UnitHeader type="back-lbl">UNIT D - 2 BHK (Back) | 960 sq ft</UnitHeader>
        <BHK2Unit position="back" />

        <div className="direction-label dir-rear">REAR SIDE</div>
      </div>
    </FloorCard>
  )
}

export default Floor2
