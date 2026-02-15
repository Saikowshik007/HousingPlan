const infoItems = [
  { label: 'Plot', value: "30'x108'", note: '3,240 sq ft | 7.44 cents' },
  { label: 'After Setbacks', value: "24'x97'", note: '~2,328 sq ft/floor' },
  { label: 'Unit Mix', value: '6+2', note: '6 x 2BHK + 2 x 3BHK' },
  { label: 'Floors', value: 'Stilt+4', note: 'With Lift & Staircase' },
  { label: '2BHK Size', value: '~960 sq ft', note: "24' x 40'" },
  { label: '3BHK Size', value: '~1,056 sq ft', note: "24' x 44'" },
]

function InfoBar() {
  return (
    <div className="info-bar">
      {infoItems.map((item, index) => (
        <div className="info-item" key={index}>
          <div className="lbl">{item.label}</div>
          <div className="val">{item.value}</div>
          <div className="note">{item.note}</div>
        </div>
      ))}
    </div>
  )
}

export default InfoBar
