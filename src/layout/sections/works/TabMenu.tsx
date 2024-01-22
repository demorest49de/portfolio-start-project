import styled from "styled-components";
import {Link} from "../../../components/link/Link";
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

  @media ${theme.media.tablet}{
    gap: 10px;
  }
`

const ListItem = styled.li`
  position: relative;
  padding: 0 10px;
  z-index: 1;
`