import * as React from "react";
import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';


export interface iQuery {
  queries: any[],
  historyBtn: number,
}

const Query: React.FC<iQuery> = ({ queries, historyBtn }) => {
  if(queries.length !== 0 && historyBtn > -1 && historyBtn < queries.length)
    console.log('query', queries[historyBtn].outgoingQueries.variables);
  return (
    <div id="query-container">
      <div id="query-hThree">
        <h3>QUERY</h3>
      </div>
      <span>
        {queries.length !== 0 && historyBtn > -1 && historyBtn < queries.length ? 
        <GraphqlCodeBlock
            className="graphQLQuery"
            queryBody={queries[historyBtn].outgoingQueries.query}
            />
            : null
      }
      </span>
    </div>
  )
};


export default Query;