const legendItems = [
  { color: 'var(--master)', label: 'Master Bed' },
  { color: 'var(--bedroom)', label: 'Bedroom' },
  { color: 'var(--hall)', label: 'Living/Dining' },
  { color: 'var(--kitchen)', label: 'Kitchen' },
  { color: 'var(--bath)', label: 'Bathroom' },
  { color: 'var(--balcony)', label: 'Balcony' },
  { color: 'var(--wash)', label: 'Wash Area' },
  { color: 'var(--pooja)', label: 'Pooja Room' },
  { color: 'var(--stair)', label: 'Staircase' },
  { color: 'var(--passage)', label: 'Passage' },
]

function Legend() {
  return (
    <div className="legend">
      {legendItems.map((item, index) => (
        <div className="legend-item" key={index}>
          <div className="legend-sw" style={{ background: item.color }}></div>
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default Legend
