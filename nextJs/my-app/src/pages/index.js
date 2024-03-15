import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Index = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const filter = useRef();

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0',
      },
      headers: {
        'X-RapidAPI-Key': 'd0e111736amsh5eb8d4eddd93c34p12bd26jsn12d0685e839c',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.data.coins);
      setFilteredData(response.data.data.coins); // Set initial filteredData
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = () => {
    const searchText = filter.current.value.toLowerCase();
    const filtered = data.filter((val) => val.symbol.toLowerCase().includes(searchText));
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the coin code to filter"
        onChange={handleChange}
        ref={filter}
      />
      <div className="grid grid-cols-4 gap-2">
        {filteredData.map((val) => (
          <div key={val.id} style={{ width: '20%' }}>
            <img src={val.iconUrl} alt="" />
            <h1>{val.symbol}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
