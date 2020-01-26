import * as React from 'react'
import TimeButton from '../components/TimeButton'

interface iProps {
  i: number;
  history: string[];
  isToggle: (i: number) => void;
}

const HistoryBox: React.FC<iProps> = ({ isToggle, i, history }) => {
  return (
    <div id="queryBox" onClick={() => isToggle(i)}>
      <div>Query {i+1} </div>
      <TimeButton timeStamp={{ temp: "temp" }} histroy={history} index={i} />
    </div>
  )
}

export default HistoryBox;