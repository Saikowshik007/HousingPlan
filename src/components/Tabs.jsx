const tabs = [
  { id: 'stilt', label: 'Stilt Parking' },
  { id: 'f1', label: '1st Floor' },
  { id: 'f2', label: '2nd Floor' },
  { id: 'f3', label: '3rd Floor (3BHK)' },
  { id: 'f4', label: '4th Floor' },
  { id: '3d', label: '🏢 3D View', is3D: true },
  { id: 'cost', label: 'Cost Estimate', isCost: true },
]

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${tab.isCost ? 'cost-tab' : ''} ${tab.is3D ? '3d-tab' : ''} ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Tabs
