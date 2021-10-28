import ToggleSwitchComponent from '../../app/base-component/toogle-switch/toggle-switch.component';
import { useAppDispatch } from '../../app/hooks';
import { TextParser } from '../../app/service/text-parser.service';
import { onToggleChange } from './../../app/slice/main-menu.slice';
import './main-view.css';

export interface IMainViewComponent {
    items: IMainViewChild[],
    depth: number;
}

export interface IMainViewChild {
    id: string,
    isAllowed: boolean,

}

function MainViewComponent(props: IMainViewComponent) {
    const textParserService: TextParser = new TextParser();
    const dispatch = useAppDispatch();
    return (
        <div className="flex-row">
            {props.items.map((menu: any, index: number) => (
                <div className={`card ${props.depth < 1 && 'pb-5'}`} key={index}>
                    <div className={`pl-${props.depth}`} style={{ textAlign: 'left' }} key={index}>
                        <ToggleSwitchComponent
                            isRound={true}
                            onChange={(e) => {
                                dispatch(onToggleChange(menu))
                            }}
                            value={menu.isAllowed}
                        />
                         <label className="label-checkbox">
                            {textParserService.beatufiulLabel(menu.id)}
                        </label>
                    </div>
                    {menu?.childs && (
                        <MainViewComponent items={menu?.childs} depth={props.depth+1} />
                    )}
                </div>
            ))}

        </div>
    )
}

export default MainViewComponent
