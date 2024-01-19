import styled from "styled-components";
import theme from "../../../styles/Theme.Styled";

export const TabMenu = (props: { menuItems: string[] }) => {
    return (
        <StyledTabMenu>
            {
                props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href={`#${item}`} aria-label={item}>
                                {item}
                            </Link>
                        </ListItem>
                    )
                })
            }
        </StyledTabMenu>
    )
}


const StyledTabMenu = styled.ul`
  min-height: inherit;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`

const ListItem = styled.li`
  position: relative;
  padding: 0 10px;
  z-index: 1;
`

const Link = styled.a`
  font-size: 14px;
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${theme.colors.white};

  &:before {
    content: '';
    display: inline-block;
    height: 10px;
    position: absolute;
    bottom: -4px;
    left: 0px;
    right: 0px;
    background-color: ${theme.colors.accent};
    z-index: -2;
  }
`
