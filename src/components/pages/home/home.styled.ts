import styled from 'styled-components';

type ContainerDivProps = {
    darkThemeEnabled: boolean;
};

export const ContainerDiv = styled.div<ContainerDivProps>`
    background-color: ${({ darkThemeEnabled, theme }) =>
        darkThemeEnabled ? theme.color.darkPurple : theme.color.purple};
    height: 100vh;
`;