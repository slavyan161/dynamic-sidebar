export class MainMenuService {
    static filterMenu(menus: any, clickedData?: string) {
        menus.forEach((value: any) => {
            if (value.id === clickedData) {
                value.isAllowed = !value.isAllowed;
            } else if (value.childs) {
                this.filterMenu(value.childs, clickedData);
            }
        })
    }

    static isAllowedChild(items: any) {
        if (items && items.length > 0) {
            const isAllowed = items.filter((item: any) => item.isAllowed === true);
            return isAllowed.length > 0 ? true : false;
        }

        return false;
    }
}