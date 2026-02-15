function GrandTotalTable() {
  const rows = [
    { category: 'A. Structural & Civil', low: '92,50,000', high: '1,11,50,000' },
    { category: 'B. Finishing', low: '37,00,000', high: '49,00,000' },
    { category: 'C. MEP', low: '17,60,000', high: '23,70,000' },
    { category: 'D. External & Misc', low: '18,50,000', high: '27,70,000' },
  ]

  return (
    <div className="cost-card">
      <h3>Grand Total Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th className="amt">Low</th>
            <th className="amt">High</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td className="amt">{row.low}</td>
              <td className="amt">{row.high}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Subtotal</td>
            <td className="amt">1,65,60,000</td>
            <td className="amt">2,11,90,000</td>
          </tr>
          <tr className="total-row">
            <td>Contingency (5%)</td>
            <td className="amt">8,28,000</td>
            <td className="amt">10,59,500</td>
          </tr>
          <tr className="grand-total">
            <td>GRAND TOTAL</td>
            <td className="amt">1,73,88,000</td>
            <td className="amt">2,22,49,500</td>
          </tr>
          <tr className="grand-total">
            <td>Rounded</td>
            <td className="amt">~1.74 Crore</td>
            <td className="amt">~2.22 Crore</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GrandTotalTable
