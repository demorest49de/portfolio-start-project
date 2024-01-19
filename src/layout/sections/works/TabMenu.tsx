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
    
`

const Link = styled.a`
  font-size: 14px;
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 1px;
  text-transform: uppercase;

  &:before {
    content: '';
    display: inline-block;
    height: 10px;
    
  }
`
