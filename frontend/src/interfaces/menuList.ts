interface FoodName {
    id: string;
    foodKind: string;
    name : string;
}
export default interface MenuListType {
    id: number;
    storekind : string;
    image : string;
    foodName : FoodName[];
    storeName : string;
    location : string;
}