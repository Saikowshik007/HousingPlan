import Room from '../common/Room'

function BHK2Unit({ position, unitName, sqft }) {
  const isFront = position === 'front'

  return (
    <div className="fb-unit bhk2-fb">
      {isFront ? (
        <>
          {/* Row 1: Balcony */}
          <Room
            type="balcony"
            name="Front Balcony"
            size="24' x 4' - Road facing, natural light"
            style={{ gridColumn: '1/-1' }}
          />

          {/* Row 2: Living + Kitchen */}
          <Room type="hall" name="Living + Dining Hall" size="16' x 12'" style={{ gridColumn: '1/3' }} />
          <Room type="kitchen" name="Kitchen" size="8' x 10'" />

          {/* Row 3: Bedrooms */}
          <Room type="master" name="Master Bedroom" size="12' x 13'" />
          <Room type="bedroom" name="Bedroom 2" size="10' x 12'" />
          <div className="room pooja" style={{ display: 'grid', gap: '2px', padding: 0, background: 'var(--text)' }}>
            <Room type="pooja" name="Pooja" size="4'x4'" style={{ minHeight: '30px' }} />
            <Room type="wash" name="Wash" size="4'x5'" style={{ minHeight: '30px' }} />
          </div>

          {/* Row 4: Bathrooms */}
          <Room type="bath" name="Attached Bath" size="8' x 5'" />
          <Room type="bath" name="Common Bath" size="7' x 5'" />
          <Room type="passage" name="Passage" size="4' wide" />
        </>
      ) : (
        <>
          {/* Row 1: Bathrooms */}
          <Room type="bath" name="Common Bath" size="7' x 5'" />
          <Room type="bath" name="Attached Bath" size="8' x 5'" />
          <Room type="passage" name="Passage" size="4' wide" />

          {/* Row 2: Bedrooms */}
          <Room type="master" name="Master Bedroom" size="12' x 13'" />
          <Room type="bedroom" name="Bedroom 2" size="10' x 12'" />
          <div className="room pooja" style={{ display: 'grid', gap: '2px', padding: 0, background: 'var(--text)' }}>
            <Room type="pooja" name="Pooja" size="4'x4'" style={{ minHeight: '30px' }} />
            <Room type="wash" name="Wash" size="4'x5'" style={{ minHeight: '30px' }} />
          </div>

          {/* Row 3: Living + Kitchen */}
          <Room type="hall" name="Living + Dining Hall" size="16' x 12'" style={{ gridColumn: '1/3' }} />
          <Room type="kitchen" name="Kitchen" size="8' x 10'" />

          {/* Row 4: Balcony */}
          <Room
            type="balcony"
            name="Rear Balcony"
            size="24' x 4' - Open/garden facing"
            style={{ gridColumn: '1/-1' }}
          />
        </>
      )}
    </div>
  )
}

export default BHK2Unit
