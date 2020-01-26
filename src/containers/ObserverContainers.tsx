import * as React from 'react'
import HistoryContainer from "./HistoryContainer";
import Query from "../components/Query";
import GraphQLResponse from "../components/GraphQLResponse";
import Schema from "../components/Schema";
import ApolloGraphQLCache from "../components/ApolloGraphQLCache";
import GraphQLVisualizer from '../components/GraphQLVisualizer';

interface iProps{
  timeStamps: object[],
  queries: object[],
  isToggle: (index:number) => void,
  history: string[],
  historyBtn: number,
  results: string[],
  visualizerStatus: boolean,
  schemaStatus: boolean,
  url: string,
  cacheStatus: boolean,
  getCache: () => void,
  cache: any,
}
const ObserverContainer: React.RC<iProps> = ({ timeStamps, queries, isToggle, historyBtn, results, url, schemaStatus, cacheStatus, getCache, cache, history, visualizerStatus  }) => {
  return (
    <React.Fragment> 
      <div id="observerContainers">
        <HistoryContainer timeStamps={timeStamps} queries={queries} isToggle={isToggle} history={history} />
        <Query queries={queries} historyBtn={historyBtn} />
        <GraphQLResponse results={results} historyBtn={historyBtn} />
      </div> 
      {visualizerStatus ? <GraphQLVisualizer results={results} /> : null}
      {schemaStatus ? <Schema url={url} queries={queries} /> : null}
    </React.Fragment>
  )
}

export default ObserverContainer;