import FloorCard from '../common/FloorCard'
import UnitHeader from '../common/UnitHeader'
import StairRow from '../common/StairRow'
import BHK2Unit from './BHK2Unit'

function Floor4() {
  return (
    <FloorCard
      title="4th Floor - 2BHK (Front) + 2BHK (Back)"
      description="Same as 1st & 2nd floor layout | Unit G + Unit H | Terrace access above"
    >
      <div className="fb-plan">
        <div className="direction-label dir-road">ROAD SIDE (Front)</div>

        <UnitHeader type="front-lbl">UNIT G - 2 BHK (Front) | 960 sq ft</UnitHeader>
        <BHK2Unit position="front" />

        <StairRow
          leftLabel="Unit G"
          rightLabel="Unit H"
          stairText="Staircase + Lift"
          stairSubtext="Terrace above"
          style={{ minHeight: '70px' }}
        />

        <UnitHeader type="back-lbl">UNIT H - 2 BHK (Back) | 960 sq ft</UnitHeader>
        <BHK2Unit position="back" />

        <div className="direction-label dir-rear">REAR SIDE</div>
      </div>
    </FloorCard>
  )
}

export default Floor4
