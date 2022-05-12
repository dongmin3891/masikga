export interface MenuListType  {
    id: string;
    kind : string;
    image : string;
    foodName : Array<{id : string, name : string}>;
    storeName : string;
    location : string;
}

