import styled, { css } from 'styled-components'

export default styled.span`
  margin: 0;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'inherit'};

  ${({ isBlack }) => isBlack && css`
    font-weight: 700;
  `};

  ${({ isHighlighted }) => isHighlighted && css`
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: 1.6rem;
    font-weight: 900;
    font-style: italic;
  `};

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
