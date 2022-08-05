import React from "react";

import ListItem from "./ListItem";

const ListContainer = ({ data }: any) => {
  return (
    <>
      <div className=" mx-auto full">
        <h2 className="text-xl">Fixtures</h2>
        <div className="container mx-auto grid grid-cols-1">
          {data.map((fixture: any) => (
            <ListItem item={fixture}
            key={fixture.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListContainer;
