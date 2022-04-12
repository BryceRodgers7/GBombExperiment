import React from "react";
import { GBombGame } from "./gBombGameFetcher";

type Props = { games: GBombGame[] };

export function GBombGameTable(props: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>guid</th>
          <th>id</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        {props.games.map((game) => (
          <tr>
            <td> {game.guid} </td> <td> {game.id}</td> <td>{game.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
