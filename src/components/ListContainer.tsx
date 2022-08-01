import React from "react";
import styled from "styled-components";
import { RootObject } from "../types";
import ListItem from "./ListItem";



const ListContainer = ({ data }: any) => {
  //console.log(data);
  return (
    <>
     <div className="container mx-auto full">
 
      
        <h2 className="text-xl">Fixtures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((fixture: any) => (
            <ListItem item={fixture} />
          ))}
        </div>
        </div>
    </>
  );
};

export default ListContainer;
