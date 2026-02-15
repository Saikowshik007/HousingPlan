function Room({ type, name, size, style, children }) {
  if (children) {
    return (
      <div className={`room ${type}`} style={style}>
        {children}
      </div>
    )
  }

  return (
    <div className={`room ${type}`} style={style}>
      <div className="rn">{name}</div>
      {size && <div className="rs">{size}</div>}
    </div>
  )
}

export default Room
