import ListItem from "./ListItem"

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(
        private _list: ListItem[] = []
    ) { }


    get list(): ListItem[] {
        return this._list
    }


    set list(list: ListItem[]) {
        this.list = list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('myList')
        if(!storedList)
            return
        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)
        
        parsedList.forEach(item => {
            FullList.instance.addItem(
                new ListItem(item._id, item._item, item._checked)
            )
        })
    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string) {
        this._list = this._list.filter(i => i.id !== id)
        this.save()
    }
}