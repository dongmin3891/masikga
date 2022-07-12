interface foodName {
    id: string;
    foodKind: string;
    name : string;
}
export default interface MenuListType {
    id: number;
    storekind : string;
    image : string;
    foodName : foodName[];
    storeName : string;
    location : string;
}