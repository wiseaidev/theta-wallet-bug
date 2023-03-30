import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThetaWalletConnect from "@thetalabs/theta-wallet-connect";
import './App.css'

function App() {
  const [accounts, setAccounts] = useState(0)

  const handleConnectWallet = async () => {

    await ThetaWalletConnect.connect();
    setAccounts(await ThetaWalletConnect.requestAccounts());
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleConnectWallet}>
          Connect Theta Wallet
        </button>
      </div>
      <p className="read-the-docs">
        Account: {accounts ? accounts[0] : null}
      </p>
    </div>
  )
}

export default App
