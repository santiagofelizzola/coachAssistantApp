import React, { createContext, useState } from 'react'

export const PlayerContext = createContext()

const PlayerContextProvider = ({children}) => {

    const [players, setPlayers] = useState([
        { id:0, firstName: "Aimee", lastName: "Babb", goals: 3, assists: 3, position: "CM" },
        { id:1, firstName: "Brianna", lastName: "Gonzalez", goals: 3, assists: 5, position: "CM" },
        { id:2, firstName: "Ellie", lastName: "Hurd", goals: 1, assists: 8, position: "FB" },
        { id:3, firstName: "Emely", lastName: "Carr", goals: 1, assists: 8, position: "W" },
        { id:4, firstName: "Emily", lastName: "Perry", goals: 1, assists: 8, position: "CM" },
        { id:5, firstName: "Eileen", lastName: "Celis", goals: 1, assists: 8, position: "W" },
        { id:6, firstName: "Marcela", lastName: "Gaspar", goals: 1, assists: 8, position: "FB" }
      ]);

      const addPlayer = (firstName, lastName, position, goals, assists, notes) => {
        setPlayers([...players, {firstName, lastName, goals, assists, position, notes}])
      }

      const deletePlayer = (id) => {
        console.log('Deleted Player')
        console.log(players)
        setPlayers(players.filter((players) => players.id !== id))
      }

      const updatePlayer = (id, updatedPlayer) => {
        console.log('Edit Player')
        setPlayers(players.map((players) => players.id === id ? updatedPlayer : players))
      }


  return (
    <div>
        <PlayerContext.Provider value={{players, addPlayer, deletePlayer, updatePlayer}}>
            {children}
        </PlayerContext.Provider>
    </div>
  )
}

export default PlayerContextProvider