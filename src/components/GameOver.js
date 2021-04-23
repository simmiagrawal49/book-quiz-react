import styled from 'styled-components'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;
const RetryButton = styled.button`
    border: 1px solid #616A94;
    border-radius: 50px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    &:hover {
        color: white;
        background-color: #616A94;
    }
`;
const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <div>
            <Title>Game Over</Title>
            <Points>You did {pts} out of 20!</Points>
            <RetryButton onClick={refreshPage}>Retry</RetryButton>
        </div>
    )
}

export default GameOver;