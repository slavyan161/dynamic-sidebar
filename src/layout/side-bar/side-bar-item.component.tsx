import React from "react";
import { TextParser } from "../../app/service/text-parser.service";
import { MainMenuService } from "../../app/slice/main-menu-service";

export interface ISideBarItem {
    id: string,
    isShowed: boolean,
    isAllowed: boolean,
    childs?: ISideBarItem[],
}


function SideBarItemComponent(props: ISideBarItem) {
    const textParserService: TextParser = new TextParser();

    const [collapsed, setCollapsed] = React.useState(false);
    const { id, isAllowed, childs } = props;
    return (
        <>
            {isAllowed && (
                <li className="items">
                    <ul>
                        {isAllowed && (
                            <li className={`parent ${MainMenuService.isAllowedChild(childs) ? `has-child ${collapsed}` : ''}`} onClick={() => setCollapsed(!collapsed)}>
                                {textParserService.beatufiulLabel(id)}
                            </li>
                        )}
                        {collapsed && childs?.map((child: any, index: number) => (
                            <ul>
                                <SideBarItemComponent key={index} {...child} />
                            </ul>
                        ))}

                    </ul>
                </li>
            )}
        </>
    );
}

export default SideBarItemComponent
