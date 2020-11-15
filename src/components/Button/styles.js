import styled from 'styled-components'

const Button = styled.button`
	border: none;
	cursor: pointer;
	padding: 10px 15px;
	font-size: 1.1rem;
	font-weight: 600;
	border-radius: 10px;
	transition: all 0.2s ease-in-out;

  ${({ styles }) => ({ ...styles })}
`

export const ButtonA = styled(Button)`
	background: ${({ theme }) => theme.colors.darkRed};
	color: ${({ theme }) => theme.colors.offOrange};
	box-shadow: ${({ theme }) => theme.shadows.elevation1};

  &:hover {
    transform: scale(1.05);
	  background-color: ${({ theme }) => theme.colors.brightRed};
  }
`

export const ButtonB = styled(Button)`
	background: ${({ theme }) => theme.colors.offOrange};
	color: ${({ theme }) => theme.colors.darkRed};
	box-shadow: ${({ theme }) => theme.shadows.elevation1};

  &:hover {
    transform: scale(1.05);
	  background-color: ${({ theme }) => theme.colors.darkRed};
  }
`