import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction === 'vertical' ? 'column' : 'row'};
  flex-wrap: wrap;

  ${({ isStreched }) => isStreched ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
