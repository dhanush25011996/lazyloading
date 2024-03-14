import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import fakeData from "../../db.json";
import "./LazyLoading.css";

const source = fakeData.data;

const LazyLoading = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 10 }));
  const [hasMore, setHasMore] = useState(true);

  console.log(dataSource);

  const fetchMoreData = () => {
    if (dataSource.length < source.length) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 10 })));
      }, 2000);
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
    <h1 className="heading_h">LAZY LOADING</h1>
     <div className="container">
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h3 className="loading_h">Loading ...</h3>}
        endMessage={<h3 className="dataend_h">End of Data</h3>}
      >
        {dataSource.map((_, index) => {
          const sourceItem = source[index];
          if (sourceItem) {
            return (
              <div key={index} className="datadiv">
                <h1 className="post_h">DATA:{sourceItem.id}</h1>
                <p className="id_p">ID: {sourceItem.id}</p>
                <p className="name_p">Name: {sourceItem.name}</p>
                <p className="email_p">Email: {sourceItem.email}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </InfiniteScroll>
    </div>
    </>
   
  );
};

export default LazyLoading;
