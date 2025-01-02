import React, { useState } from 'react';

const ZakatCalculator = () => {
  const [assets, setAssets] = useState('');
  const [liabilities, setLiabilities] = useState('');
  const [zakat, setZakat] = useState(null);
  const [error, setError] = useState(null);

  const calculateZakat = () => {
    setError(null); // Clear previous errors

    // Convert empty strings to zero
    const assetsValue = assets === '' ? 0 : parseFloat(assets);
    const liabilitiesValue = liabilities === '' ? 0 : parseFloat(liabilities);

    // Validate inputs
    if (isNaN(assetsValue) || isNaN(liabilitiesValue)) {
      setError("Please enter valid numbers for assets and liabilities");
      return;
    }

    const netAssets = assetsValue - liabilitiesValue;

    if (netAssets <= 0) {
      setError("Net assets must be positive to be eligible for Zakat");
      setZakat(null);
      return;
    }

    const zakatAmount = netAssets * 0.025;
    setZakat(zakatAmount.toFixed(2)); // Format Zakat to two decimal places
  };

  const clearInputs = () => {
    setAssets('');
    setLiabilities('');
    setZakat(null);
    setError(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Zakat Calculator</h2>
      <input 
        type="text" 
        value={assets} 
        onChange={(e) => setAssets(e.target.value)} 
        placeholder="Total Assets" 
        className="block p-2 mb-4 border rounded w-full"
      />
      <input 
        type="text" 
        value={liabilities} 
        onChange={(e) => setLiabilities(e.target.value)} 
        placeholder="Total Liabilities" 
        className="block p-2 mb-4 border rounded w-full"
      />
      <div className="flex space-x-4">
        <button onClick={calculateZakat} className="bg-blue-500 text-white py-2 px-4 rounded">
          Calculate Zakat
        </button>
        <button onClick={clearInputs} className="bg-gray-500 text-white py-2 px-4 rounded">
          Clear
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {zakat !== null && <p className="mt-4 p-2 bg-gray-100 rounded shadow">Zakat: {zakat}</p>}
    </div>
  );
};

export default ZakatCalculator;