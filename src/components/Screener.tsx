'use client';

import { useScreener } from '@/hooks/useScreener';

export const Screener = () => {
  const screenerData = useScreener();

  // {
  //   "lastPrice": 0.0173,
  //   "priceChange24hr": -0.00058,
  //   "volume24hr": 482597701,
  //   "volumeBase24hr": 8400024.23194,
  //   "trades24hr": 76960,
  //   "openInterest": 156052997,
  //   "trades5": {
  //       "total": 0,
  //       "sells": 0,
  //       "buys": 0
  //   },
  //   "trades30": {
  //       "total": 0,
  //       "sells": 0,
  //       "buys": 0
  //   },
  //   "trades60": {
  //       "total": 10,
  //       "buys": 3,
  //       "sells": 7
  //   }
  // }

  return (
    <table>
      <thead>
        <tr>
          <td>symbol</td>
          <td>lastPrice</td>
          <td>priceChange24hr</td>
          <td>volume24hr</td>
          <td>volumeBase24hr</td>
          <td>trades24hr</td>
          <td>openInterest</td>
          <td>trades5 total</td>
          <td>trades5 buy</td>
          <td>trades5 sell</td>
          <td>trades30 total</td>
          <td>trades30 buy</td>
          <td>trades30 sell</td>
          <td>trades60 total</td>
          <td>trades60 buy</td>
          <td>trades60 sell</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(screenerData).map((symbol) => {
          const ticker = screenerData[symbol];

          return (
            <tr key={symbol}>
              <td>{symbol}</td>
              <td>{ticker.lastPrice}</td>
              <td>{ticker.priceChange24hr}</td>
              <td>{ticker.volume24hr}</td>
              <td>{ticker.volumeBase24hr}</td>
              <td>{ticker.trades24hr}</td>
              <td>{ticker.openInterest}</td>
              <td>{ticker.trades5.total}</td>
              <td>{ticker.trades5.buys}</td>
              <td>{ticker.trades5.sells}</td>
              <td>{ticker.trades30.total}</td>
              <td>{ticker.trades30.buys}</td>
              <td>{ticker.trades30.sells}</td>
              <td>{ticker.trades60.total}</td>
              <td>{ticker.trades60.buys}</td>
              <td>{ticker.trades60.sells}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
