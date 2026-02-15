function StairRow({ leftLabel, rightLabel, stairText, stairSubtext, style }) {
  return (
    <div className="fb-stair-row" style={style}>
      <div className="passage-side">{leftLabel}</div>
      <div className="stair-center">
        <div className="rn">{stairText}</div>
        {stairSubtext && <div className="rs">{stairSubtext}</div>}
      </div>
      <div className="passage-side">{rightLabel}</div>
    </div>
  )
}

export default StairRow
