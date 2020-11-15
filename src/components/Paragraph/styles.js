import styled from 'styled-components'


export default styled.p`
  margin-bottom: 16px;
  color: ${({ theme, color = 'darkGrey' }) => theme.colors[color]};
  word-wrap: break-word;
  line-height: 27px;

  ${({ styles }) => ({ ...styles })}
`
