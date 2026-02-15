const summaryItems = [
  { label: 'Total Built-up Area', value: '10,700 sq ft', note: 'Stilt + 4 Floors' },
  { label: 'Construction Cost', value: '1.87 - 2.25 Cr', note: '@ 1,750-2,100/sq ft' },
  { label: 'Total Project Cost', value: '2.15 - 2.60 Cr', note: 'Including all extras' },
  { label: 'Per 2BHK (Const.)', value: '25 - 30 L', note: '960 sq ft unit' },
  { label: 'Per 3BHK (Const.)', value: '30 - 36 L', note: '1,056 sq ft unit' },
]

function SummaryGrid() {
  return (
    <div className="summary-grid">
      {summaryItems.map((item, index) => (
        <div className="s-card" key={index}>
          <div className="sl">{item.label}</div>
          <div className="sv">{item.value}</div>
          <div className="sn">{item.note}</div>
        </div>
      ))}
    </div>
  )
}

export default SummaryGrid
