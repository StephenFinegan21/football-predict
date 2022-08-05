import React from "react";
import Image from "next/image";
import Link from "next/link";


const ListItem = (props: any) => {
  const { fixture, teams } = props.item;
 

  const date = new Date(fixture.date);
  return (
    <>
      <div className="bg-white py-6">
        <div className="flex items-center px-24">
          <div className="w-full flex items-center justify-between">
            <p>{teams.home.name}</p>
            <Image
              src={"/Chelseabadge.png"}
              alt={teams.home.name + "crest"}
              width={50}
              height={50}
            />
          </div>
          <p className="text-center w-full">{date.toDateString()}</p>
          <div className="w-full flex items-center justify-between">
            <Image
              src={"/ChelseaBadge.png"}
              alt={teams.away.name + "crest"}
              width={50}
              height={50}
            />
            <p>{teams.away.name}</p>
          </div>
        </div>
        <div className="text-center">
          <Link href={`/FixtureInformation/${fixture.id}`}>Stats</Link>
        </div>
      </div>
    </>
  );
};

export default ListItem;
