import { useState } from 'react'
import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Tabs from './components/Tabs'
import StiltFloor from './components/floors/StiltFloor'
import Floor1 from './components/floors/Floor1'
import Floor2 from './components/floors/Floor2'
import Floor3 from './components/floors/Floor3'
import Floor4 from './components/floors/Floor4'
import CostEstimate from './components/CostEstimate'
import Building3D from './components/3d/Building3D'

function App() {
  const [activeTab, setActiveTab] = useState('stilt')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'stilt':
        return <StiltFloor />
      case 'f1':
        return <Floor1 />
      case 'f2':
        return <Floor2 />
      case 'f3':
        return <Floor3 />
      case 'f4':
        return <Floor4 />
      case '3d':
        return <Building3D />
      case 'cost':
        return <CostEstimate />
      default:
        return <StiltFloor />
    }
  }

  return (
    <div className="container">
      <Header />
      <br />
      <InfoBar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content active">
        {renderTabContent()}
      </div>
    </div>
  )
}

export default App
