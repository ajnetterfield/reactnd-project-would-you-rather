import React from 'react';

const LeaderboardRow = ({ answered, asked, avatarURL, highlight, name, position }) => (
  <tr className={highlight ? 'leaderboard-row highlight' : 'leaderboard-row'}>
    <th>{position}</th>

    <td>
      <img
        alt={`Avatar of ${name}`}
        className="avatar"
        src={avatarURL}
      />
    </td>

    <td>{name}</td>
    <td className="text-right">{asked}</td>
    <td className="text-right">{answered}</td>
  </tr>
);

export default LeaderboardRow;
