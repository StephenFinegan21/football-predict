import React, {useState} from "react";
import styled from "styled-components";
import StatTable from "../components/StatTable";
import Box from "../components/Box";
import Legend from "../components/Legend";
import BarChart from "../components/BarChart";

const Flex = styled.div`
  display: flex;
  width: 95%;
  margin: auto;
  justify-content: space-around;

 
 
  

  @media (min-width: 800px) {
    max-width: 100%;
    margin: auto;
  }
`;

const Record = ({ homeFixtures, awayFixtures, homeTeam, awayTeam }: any) => {
  

const homeStats = {
  winPercentage : Math.floor((homeFixtures.wins.total / homeFixtures.played.total * 100)),
  drawPercentage : Math.floor((homeFixtures.draws.total / homeFixtures.played.total * 100)),
  lossPercentage : Math.floor((homeFixtures.loses.total / homeFixtures.played.total * 100)),
}
const awayStats = {
  winPercentage : Math.floor((awayFixtures.wins.total / awayFixtures.played.total * 100)),
  drawPercentage : Math.floor((awayFixtures.draws.total / awayFixtures.played.total * 100)),
  lossPercentage : Math.floor((awayFixtures.loses.total / awayFixtures.played.total * 100))
}

const homePlayHomeStats = {
  winPercentage : Math.floor((homeFixtures.wins.home / homeFixtures.played.home * 100)),
  drawPercentage : Math.floor((homeFixtures.draws.home / homeFixtures.played.home* 100)),
  lossPercentage : Math.floor((homeFixtures.loses.home / homeFixtures.played.home * 100)),
}


const homePlayAwayStats = {
  winPercentage : Math.floor((homeFixtures.wins.away / homeFixtures.played.away * 100)),
  drawPercentage : Math.floor((homeFixtures.draws.away / homeFixtures.played.away  * 100)),
  lossPercentage : Math.floor((homeFixtures.loses.away / homeFixtures.played.away  * 100)),
}
const awayPlayHomeStats = {
  winPercentage : Math.floor((awayFixtures.wins.home / awayFixtures.played.home * 100)),
  drawPercentage : Math.floor((awayFixtures.draws.home / awayFixtures.played.home * 100)),
  lossPercentage : Math.floor((awayFixtures.loses.home / awayFixtures.played.home * 100)),
  
}
const AwayPlayAwayStats = {
  winPercentage : Math.floor((awayFixtures.wins.away / awayFixtures.played.away  * 100)),
  drawPercentage : Math.floor((awayFixtures.draws.away / awayFixtures.played.away  * 100)),
  lossPercentage : Math.floor((awayFixtures.loses.away / awayFixtures.played.away  * 100)),
}

const [stats, setStats] = useState([homeStats, awayStats])
const [activeBtn, setActiveBtn] = useState('all')

const Button = styled.button`
  background-color: #162c41;
  color:white;
  border: none;
  margin: 2px;
  border-radius: 2px;
  width: 60px;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
`

const ButtonContainer = styled.div`
  
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: auto;

`

const changeStats = (stats : any, btn : any) => {
  setStats(stats)
  setActiveBtn(btn)
}


  
  return (
    <>
      <Box>
        <ButtonContainer>
        <Button className={activeBtn === 'all' ? 'active' : 'inactive'} onClick={() => changeStats([homeStats, awayStats], 'all')}>All</Button>
        <Button className={activeBtn === 'home' ? 'active' : 'inactive'}  onClick={() => changeStats([homePlayHomeStats, homePlayAwayStats], 'home')}>Home</Button>
        <Button className={activeBtn === 'away' ? 'active' : 'inactive'}  onClick={() => changeStats([awayPlayHomeStats, AwayPlayAwayStats], 'away')}>Away</Button>
        </ButtonContainer>
        <Flex>
          <h4>{homeTeam}</h4> 
          <h4>{awayTeam}</h4> 
        </Flex>
        <Flex>
          <BarChart stats={stats[0]} />
          <BarChart stats={stats[1]}/>
        </Flex>
      </Box>
  
      <Box>
        <StatTable
          title="Games Played"
          homeTeam={homeTeam}
          homeStats={homeFixtures.played}
          awayTeam={awayTeam}
          awayStats={awayFixtures.played}
        />
      </Box>
      <Box>
        <StatTable
          title="Wins"
          homeTeam={homeTeam}
          homeStats={homeFixtures.wins}
          awayTeam={awayTeam}
          awayStats={awayFixtures.wins}
        />
      </Box>
      <Box>
        <StatTable
          title="Losses"
          homeTeam={homeTeam}
          homeStats={homeFixtures.loses}
          awayTeam={awayTeam}
          awayStats={awayFixtures.loses}
        />
      </Box>
      <Box>
        <StatTable
          title="Draws"
          homeTeam={homeTeam}
          homeStats={homeFixtures.draws}
          awayTeam={awayTeam}
          awayStats={awayFixtures.draws}
        />
      </Box>
    </>
  );
};

export default Record;
