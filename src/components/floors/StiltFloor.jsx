import FloorCard from '../common/FloorCard'
import Room from '../common/Room'

function StiltFloor() {
  return (
    <FloorCard
      title="Stilt Floor - Open Parking"
      description="24 ft x 97 ft | 8 car slots + two-wheeler parking | Sump & utilities"
    >
      <div className="fb-plan">
        <div className="direction-label dir-road">ROAD SIDE (Front - 30 ft)</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--text)' }}>
          <Room type="parking-c" name="Car Slot 1" size="9' x 18'" style={{ minHeight: '60px' }} />
          <Room type="parking-c" name="Car Slot 2" size="9' x 18'" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--text)' }}>
          <Room type="parking-c" name="Car Slot 3" size="9' x 18'" style={{ minHeight: '60px' }} />
          <Room type="parking-c" name="Car Slot 4" size="9' x 18'" />
        </div>

        <div className="fb-stair-row">
          <Room type="parking-c" name="Two-Wheelers" size="Covered Parking" />
          <div className="stair-center">
            <div className="rn">Staircase<br />+ Lift</div>
            <div className="rs">8' x 16'</div>
          </div>
          <Room type="parking-c" name="Two-Wheelers" size="Covered Parking" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--text)' }}>
          <Room type="parking-c" name="Car Slot 5" size="9' x 18'" style={{ minHeight: '60px' }} />
          <Room type="parking-c" name="Car Slot 6" size="9' x 18'" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--text)' }}>
          <Room type="parking-c" name="Car Slot 7" size="9' x 18'" style={{ minHeight: '60px' }} />
          <Room type="parking-c" name="Car Slot 8" size="9' x 18'" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2px', background: 'var(--text)' }}>
          <Room type="wash" name="Sump Room" size="Motor + Pump" style={{ minHeight: '50px' }} />
          <Room type="wash" name="Electrical Room" size="EB Panel + DG" />
          <Room type="wash" name="Security + Mail" size="Watchman Cabin" />
        </div>

        <div className="direction-label dir-rear">REAR SIDE (Back)</div>
      </div>
    </FloorCard>
  )
}

export default StiltFloor
