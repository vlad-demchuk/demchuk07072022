import React, { useState } from 'react';

const statistic = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

export const Chart = () => {
  const [landPage, setLandPage] = useState(statistic[0].time);
  const [conf, setConf] = useState(statistic[1].time);
  const [co, setCo] = useState(statistic[2].time);
  const [deal, setDeal] = useState(statistic[3].time);

  // it doesn't work propely
  // setInterval(() => {
  //   setLandPage(Math.floor(Math.random() * (100 - 1)) + 1);
  //   setConf(Math.floor(Math.random() * (100 - 1)) + 1);
  //   setCo(Math.floor(Math.random() * (100 - 1)) + 1);
  //   setDeal(Math.floor(Math.random() * (100 - 1)) + 1);
  // }, 30000);

  const countConf = (data: any) => {
    const sum = landPage + conf + co + deal;

    // eslint-disable-next-line no-mixed-operators
    const result = Math.ceil(data / sum * 100);

    return result;
  };

  return (
    <div>
      <div className="starter">
        <h1 className="title">Spent time(seconds)</h1>
        <div className="svg">
          <div className="landing">
            <div className="subtitle">Landing page</div>
            <div className="container">
              <div className="item1" style={{ gridColumn: `1/${countConf(landPage)}` }}>{landPage}</div>
            </div>
          </div>

          <div className="landing">
            <div className="subtitle">Configurator</div>
            <div className="container">
              <div className="item2" style={{ gridColumn: `${countConf(landPage)}/${countConf(landPage) + countConf(conf)}` }}>{conf}</div>
            </div>
          </div>

          <div className="landing">
            <div className="subtitle">Check-out</div>
            <div className="container">
              <div className="item3" style={{ gridColumn: `${countConf(landPage) + countConf(conf)}/${countConf(co) + countConf(landPage) + countConf(conf)}` }}>{co}</div>
            </div>
          </div>

          <div className="landing">
            <div className="subtitle">Deal</div>
            <div className="container">
              <div className="item4" style={{ gridColumn: `${countConf(co) + countConf(landPage) + countConf(conf)}/${countConf(deal) + countConf(co) + countConf(landPage) + countConf(conf)}` }}>{deal}</div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          setLandPage(Math.floor(Math.random() * (100 - 1)) + 1);
          setConf(Math.floor(Math.random() * (100 - 1)) + 1);
          setCo(Math.floor(Math.random() * (100 - 1)) + 1);
          setDeal(Math.floor(Math.random() * (100 - 1)) + 1);
        }}
      >
        Random
      </button>
    </div>
  );
};
