export default interface FoodName {
    id: string;
    foodKind: string;
    name : string;
}
export default interface MenuListType {
    id: string;
    storekind : string;
    image : string;
    foodName : FoodName[];
    storeName : string;
    location : string;
}