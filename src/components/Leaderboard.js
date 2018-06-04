import React from 'react';
import { connect } from 'react-redux';

import LeaderboardRow from './LeaderboardRow';

const Leaderboard = ({ authedUser, users }) => {
  const leaderboardData = Object.keys(users).map(x => ({
    answered: Object.keys(users[x].answers).length,
    asked: users[x].questions.length,
    avatarURL: users[x].avatarURL,
    id: users[x].id,
    name: users[x].name
  })).sort((a, b) => (b.answered + b.asked) - (a.answered + a.asked));

  return (
    <table className="leaderboard">
      <thead>
        <tr className="leaderboard-header">
          <th className="w-1"></th>
          <th className="w-1"></th>
          <th>Name</th>
          <th className="w-1 text-right">Asked</th>
          <th className="w-1 text-right">Answered</th>
        </tr>
      </thead>

      <tbody>
        {leaderboardData.map(({ answered, asked, avatarURL, id, name }, index) => (
          <LeaderboardRow
            answered={answered}
            asked={asked}
            avatarURL={avatarURL}
            highlight={authedUser === id}
            key={id}
            name={name}
            position={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  };
};

export default connect(mapStateToProps)(Leaderboard);
