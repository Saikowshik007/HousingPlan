function CostTable({ title, items, subtotal, subtotalLabel }) {
  return (
    <div className="cost-card">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Details</th>
            <th className="amt">Est. Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, index) => (
            <tr key={index}>
              <td>{row.item}</td>
              <td>{row.details}</td>
              <td className="amt">{row.cost}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td colSpan="2">{subtotalLabel}</td>
            <td className="amt">{subtotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CostTable
