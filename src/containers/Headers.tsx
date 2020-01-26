import * as React from 'react';
import Dropdown from '../components/DropdownMenu';

export interface iHeaders {
  visualizerToggle: () => void,
  schemaToggle: () => void,
  cacheToggle: () => void,
}

const Headers: React.FC<iHeaders> = ({ schemaToggle, cacheToggle, visualizerToggle }) => (
  <React.Fragment>
    <div className="hOne">
      <h1>ARTEMIS</h1>
    </div>
    <div className="header-container">
      <Dropdown />
      <button className="header-item item4" onClick={() => visualizerToggle()}>
        Visualizer
      </button>
      <button className="header-item item2" onClick={() => schemaToggle()}>
        Schema 
      </button>
      <button className="header-item item3" onClick={() => cacheToggle()}>
        Cache 
      </button>
    </div>
  </React.Fragment>
)

export default Headers;