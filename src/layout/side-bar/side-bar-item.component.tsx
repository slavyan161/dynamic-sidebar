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
                    <div className="sidebar">
                        {isAllowed && (
                            <div className={`parent ${MainMenuService.isAllowedChild(childs) ? `has-child ${collapsed}` : ''}`} onClick={() => setCollapsed(!collapsed)}>
                                {textParserService.beatufiulLabel(id)}
                            </div>
                        )}
                        {collapsed && childs?.map((child: any, index: number) => (
                            <SideBarItemComponent key={index} {...child} />
                        ))}

                    </div>
                </li>
            )}
        </>
    );
}

export default SideBarItemComponent
