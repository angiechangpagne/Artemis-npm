import * as React from "react";
import ReactJson from "react-json-view";

interface iProps{
  getCache: () => void,
  queries: object[],
  cache: any,
}

const ApolloGraphQLCache: React.FC<iProps> = ({ queries, getCache, cache }) => {
  React.useEffect(() => {
    getCache()
  }, [queries])

  return (
    <div id="cache-container"> 
      <div id="cache-hThree">
        <h3>CACHE</h3>
      </div>
      <div id='cache-data'>
        <ReactJson theme="google"
        src={cache}
        name={null}
        iconStyle="triangle"
        indentWidth={1}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
        />
      </div>
    </div>
  );
};

export default ApolloGraphQLCache;
