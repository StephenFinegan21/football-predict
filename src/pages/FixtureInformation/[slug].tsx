import React from "react";
import { useTestGetH2H } from "../../api/useTestGetH2H";
import Image from "next/image";
import TeamRecentForm from "../../components/TeamRecentForm";
import TeamAttributes from "../../components/TeamAttributes";

const FixtureInformation = () => {
  const pre = useTestGetH2H();
  console.log(pre[0]);
  const teams = pre[0]?.teams;
  const predictions = pre[0]?.predictions;
  const comparison = pre[0]?.comparison;




  return (
    <>
      <div className="w-4/5 mx-auto bg-slate-50 ">
        <div className="block md:flex">
          <div className="w-full  text-center py-12 flex flex-col justify-center ">
            <div>
            <Image
              src={"/Chelseabadge.png"}
              alt={teams?.home.name + "crest"}
              width={50}
              height={50}
            />

            <p> {teams?.home.name}</p>
            </div>
            {!teams?.home.league.form &&
             <p>No form</p>}
              {teams?.home.league.form &&
            <TeamRecentForm form  = {teams?.home.league.form} />
              }
          </div>

          <div className="w-full  text-center py-12  ">
            <Image
              src={"/Chelseabadge.png"}
              alt={teams?.home.name + "crest"}
              width={50}
              height={50}
            />
            <p> {teams?.home.name}</p>
            {!teams?.away.league.form &&
             <p>No form</p>}
              {teams?.away.league.form &&
            <TeamRecentForm form  = {teams?.away.league.form} />
              }
              
          </div>
          
        </div>
        {teams && 
        <div className="grid grid-cols-2 gap-4">
        <TeamAttributes 
          attributes = {teams.home.last_5}
          isHomeTeam = {true}
        />
        <TeamAttributes 
          attributes = {teams.away.last_5}
          isHomeTeam = {false}
        />
        </div>
}
      </div>
    </>
  );
};

export default FixtureInformation;
