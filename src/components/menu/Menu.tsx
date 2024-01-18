import styled from "styled-components";

export const Menu = (props: { menuItems: string[] }) => {
    return (
        <ul>
            {
                props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href={`#${item}`} aria-label={item}>
                                <Mask>
                                    {item}
                                </Mask>
                                <Mask>
                                    {item}
                                </Mask>
                            </Link>
                        </ListItem>
                    )
                })
            }
        </ul>
    )
}

const ListItem = styled.li`
    
`

const Link = styled.a`

`

const Mask = styled.span`

`