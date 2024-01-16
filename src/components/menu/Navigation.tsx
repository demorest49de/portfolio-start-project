import {SBurgerMenuNav} from "./SBurgerMenuNav";
import SDesktopMenuNav from "./SDesktopMenuNav";

export type menuSettings = {
    items: Array<string>, BurgerMenuVisible: boolean,
}

export const Navigation = (props: { menuItems: string[] }) => {
    return (
        <SDesktopMenuNav>
            <ul>
                {
                    props.menuItems.map((item, index) => {
                        return <li key={index}>
                            <a href="#" aria-label={item}>{item}
                            </a></li>
                    })
                }
            </ul>
        </SDesktopMenuNav>
    )
}