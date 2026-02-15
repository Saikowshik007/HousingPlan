function UnitHeader({ type, children }) {
  return (
    <div className={`unit-header ${type}`}>
      {children}
    </div>
  )
}

export default UnitHeader
