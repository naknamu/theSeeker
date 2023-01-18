import styled from "styled-components";

const Table = (props) => {
  const { rankUser } = props;

  const displayMedal = (num) => {
    switch (num) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return num;
    }
  };

  return (
    <TableStyled>
      <thead>
        <tr>
          <TD>Rank</TD>
          <TD>Player</TD>
          <TD>Time</TD>
        </tr>
      </thead>
      <tbody>
        {rankUser.slice(0, 10).map((i, index) => (
          <tr key={index}>
            <TD>{displayMedal(index + 1)}</TD>
            <TD>{rankUser[index].name}</TD>
            <TD>{rankUser[index].time}</TD>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
};

const TableStyled = styled.table`
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
`;

const TD = styled.td`
  border: 1px solid rgb(190, 190, 190);
  padding: 1rem 8rem;
  text-align: center;
`;

export default Table;
export { TD };
