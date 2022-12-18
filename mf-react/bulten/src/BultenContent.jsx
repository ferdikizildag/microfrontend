import React from "react";
import moment from 'moment';
import data from './data';

import "./index.css";

export default function BultenContent() {
  console.log(moment.now());
  return (
    <div>
      <div className="matchItem">
        <div className="teams">
          
        </div>
        <div className="odds">
          <span>MS1</span>
          <span>MS0</span>
          <span>MS2</span>
        </div>
      </div>
      {
        data.map((item, key) => (
          <div key={key} className="matchItem">
            <div className="teams">
              <span>{item.homeTeam}</span>
              <span>-</span>
              <span>{item.awayTeam}</span>
            </div>
            <div className="odds">
              <span>{item.odds.ms1}</span>
              <span>{item.odds.ms0}</span>
              <span>{item.odds.ms2}</span>
            </div>
          </div>
        ))
      }
    </div >
  )
};
