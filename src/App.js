import { useState } from 'react';
import './App.css';
import contract from './contracts/data.json';
import { ethers } from 'ethers';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('Results');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedOption === "") {
      alert("Please select a choice!");
    } else {
      const selectedOptionValue = selectedOption;
      setDescription(selectedOptionValue);

      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const addr = "0xE5E28674E55EBcC0808C06796FCd48Ee2e6A8dBB";
      const abi = contract.abi;
      const priceFeed = new ethers.Contract(addr, abi, signer);

      priceFeed.getChainlinkDataFeedLatestAnswer(selectedOptionValue).then((roundData) => {
        if (selectedOptionValue==="BTC/ETH"){
          const adjust = roundData/ 1e18;
          setColor(adjust);
        }else{
          const adjust = roundData/ 1e8;
          setColor(adjust);
        }
        
    });
    }
  };

  return (
    <div className="app-container">
      <h2 className='app-headline'>Fjorian Musaraj ID: 101462447 BCDV-4023</h2>
      <h2 className="app-heading">Select a Currency Pair</h2>
      <select className="app-dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="BTC/USD">BTC/USD</option>
        <option value="ETH/USD">ETH/USD</option>
        <option value="LINK/USD">LINK/USD</option>
        <option value="BTC/ETH">BTC/ETH</option>
      </select>
      <button className="app-button" onClick={handleSubmit}>
        Get Conversion
      </button>
      <div id="result" className="app-result" style={{ color }}>
        {description}: {color}
      </div>
    </div>
  );
}

export default App;
