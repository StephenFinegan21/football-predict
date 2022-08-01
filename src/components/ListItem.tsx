import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FixtureInformation from "../pages/FixtureInformation/[slug]";

const ListItem = (props: any) => {
  const { fixture, teams } = props.item;
  console.log(fixture);

  const date = new Date(fixture.date);
  return (
    <>
      <div className="bg-gray-50">
      <p className="text-center">{date.toDateString()}</p>
        <div className="flex ">
        <div className="w-full  text-center py-12  ">
          

          <Image
            src={"/Chelseabadge.png"}
            alt={teams.home.name + "crest"}
            width={50}
            height={50}
          />
          <p>{teams.home.name}</p>
        </div>

        <div className="w-full  text-center py-12">
          <Image
            src={"/ChelseaBadge.png"}
            alt={teams.away.name + "crest"}
            width={50}
            height={50}
          />
          <p>{teams.away.name}</p>
        </div>
        </div>
        <div className='text-center'>
        <Link  href={`/FixtureInformation/${fixture.id}`}>Stats</Link>
        </div>
      </div>
    </>
  );
};

export default ListItem;
