class Boart{

    private _title : string;
    private _list : List[];


    constructor(title:string, list:List[]) {
        this._title = title;
        this._list = list;
    }

    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    get list():List[] {
        return this._list;
    }

    set list(value:Array) {
        this._list = value;
    }
}


class List{

    private _title : string;
    private _task : Task[];


    constructor(title:string, task:Task[]) {
        this._title = title;
        this._task = task;
    }


    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    get task():Task[] {
        return this._task;
    }

    set task(value:Array) {
        this._task = value;
    }
}


class Task{

    private _title : string;
    private _comment : string;


    constructor(title:string, comment:string) {
        this._title = title;
        this._comment = comment;
    }


    get comment():string {
        return this._comment;
    }

    set comment(value:string) {
        this._comment = value;
    }

    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }


}
