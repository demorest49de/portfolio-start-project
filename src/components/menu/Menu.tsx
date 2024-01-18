import styled from "styled-components";
import myTheme from "../../styles/Theme.Styled";

export const Menu = (props: { menuItems: string[] }) => {
    return (
        <ul>
            {
                props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <a href={`#${item}`} aria-label={item}>
                                {item}
                                <Mask>
                                    {/*<span>*/}
                                        {item}
                                    {/*</span>*/}
                                </Mask>
                                <Mask>
                                    <span>
                                        {item}
                                    </span>
                                </Mask>
                            </a>
                        </ListItem>
                    )
                })
            }
        </ul>
    )
}

const ListItem = styled.li`
  position: relative;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  //display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid darkorange;
    //color: ${myTheme.colors.pink};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
