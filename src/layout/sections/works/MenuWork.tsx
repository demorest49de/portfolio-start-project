export const MenuWork = (props: { menuItems: string[] }) => {
    return (
        <ul>
            {
                props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={`#${item}`} aria-label={item}>
                                {item}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}