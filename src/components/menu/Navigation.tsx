import {SBurgerMenuNav} from "./SBurgerMenuNav";
import SDesktopMenuNav from "./SDesktopMenuNav";

export type menuSettings = {
    items: Array<string>, BurgerMenuVisible: boolean,
}

export const Navigation = (props: { settings: menuSettings }) => {
    return (
        <SDesktopMenuNav>
            <ul>
                {
                    props.settings.items.map((item, index) => {
                        return <li key={index}>
                            <a href="#" aria-label={item}>{item}
                            </a></li>
                    })
                }
            </ul>
        </SDesktopMenuNav>
    )
}