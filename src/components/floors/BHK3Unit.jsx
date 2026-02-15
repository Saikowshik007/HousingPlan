import Room from '../common/Room'

function BHK3Unit({ position }) {
  const isFront = position === 'front'

  return (
    <div className="fb-unit bhk3-fb">
      {isFront ? (
        <>
          {/* Balcony */}
          <Room type="balcony" name="Front Balcony" size="24' x 4'" style={{ gridColumn: '1/-1' }} />

          {/* Living + Kitchen */}
          <Room type="hall" name="Living + Dining Hall" size="16' x 14'" style={{ gridColumn: '1/3' }} />
          <Room type="kitchen" name="Kitchen" size="8' x 10'" />

          {/* 3 Bedrooms */}
          <Room type="master" name="Master Bedroom" size="12' x 13'" />
          <Room type="bedroom" name="Bedroom 2" size="10' x 11'" />
          <Room type="bedroom" name="Bedroom 3" size="10' x 11'" />

          {/* Bathrooms */}
          <Room type="bath" name="M. Bath" size="8'x5'" />
          <Room type="bath" name="Bath 2" size="5'x5'" />
          <div className="room pooja" style={{ display: 'grid', gap: '2px', padding: 0, background: 'var(--text)' }}>
            <Room type="pooja" name="Pooja" style={{ minHeight: '22px' }} />
            <Room type="wash" name="Wash" style={{ minHeight: '22px' }} />
            <Room type="bath" name="Bath 3" style={{ minHeight: '22px' }} />
          </div>

          {/* Passage */}
          <Room type="passage" name="Passage / Lobby" size="Internal corridor" style={{ gridColumn: '1/-1' }} />
        </>
      ) : (
        <>
          {/* Passage */}
          <Room type="passage" name="Passage / Lobby" style={{ gridColumn: '1/-1' }} />

          {/* Bathrooms */}
          <Room type="bath" name="M. Bath" size="8'x5'" />
          <Room type="bath" name="Bath 2" size="5'x5'" />
          <div className="room pooja" style={{ display: 'grid', gap: '2px', padding: 0, background: 'var(--text)' }}>
            <Room type="bath" name="Bath 3" style={{ minHeight: '22px' }} />
            <Room type="pooja" name="Pooja" style={{ minHeight: '22px' }} />
            <Room type="wash" name="Wash" style={{ minHeight: '22px' }} />
          </div>

          {/* 3 Bedrooms */}
          <Room type="master" name="Master Bedroom" size="12'x13'" />
          <Room type="bedroom" name="Bedroom 2" size="10'x11'" />
          <Room type="bedroom" name="Bedroom 3" size="10'x11'" />

          {/* Living + Kitchen */}
          <Room type="hall" name="Living + Dining Hall" size="16' x 14'" style={{ gridColumn: '1/3' }} />
          <Room type="kitchen" name="Kitchen" size="8' x 10'" />

          {/* Balcony */}
          <Room type="balcony" name="Rear Balcony" size="24' x 4'" style={{ gridColumn: '1/-1' }} />
        </>
      )}
    </div>
  )
}

export default BHK3Unit
