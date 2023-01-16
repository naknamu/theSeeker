import styled from 'styled-components';

const Table = (props) => {

    const {userDatabase} = props;
    
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
                {userDatabase.map((i, index) => 
                    <tr key={index}>
                        <TD>{index + 1}</TD>
                        <TD>{userDatabase[index].name}</TD>
                        <TD>{userDatabase[index].time}</TD>
                    </tr>
                )}
            </tbody>
        </TableStyled>
    );
}

const TableStyled = styled.table`
    border-collapse: collapse;
    border: 2px solid rgb(200,200,200);
    letter-spacing: 1px;
`;

const TD = styled.td`
    border: 1px solid rgb(190,190,190);
    padding: 1rem 8rem;
    text-align: center;
`;
 
export default Table;
export {TD};