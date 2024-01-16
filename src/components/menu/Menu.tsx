
export const Menu = (props: { menuItems: string[] }) => {
    return (
        <ul>
            {
                props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="#" aria-label={item}>{item}
                        </a></li>
                })
            }
        </ul>
    )
}

