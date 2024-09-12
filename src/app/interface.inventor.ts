export interface Inventor {  
    id : number,
    first: string,
    last: string,
    year : number,
    passed : number,
 }


 export interface Product { 
    productId : number,
    productName : string,
    productCode : string,
    releaseDate : string,
    price : number,
    description : string,
    starRating : number,
    imageUrl : string,
}