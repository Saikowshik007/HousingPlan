function FloorCard({ title, description, children }) {
  return (
    <div className="floor-card">
      <h2>{title}</h2>
      <div className="desc">{description}</div>
      {children}
    </div>
  )
}

export default FloorCard
