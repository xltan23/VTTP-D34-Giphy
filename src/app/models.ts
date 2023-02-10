// Create SearchCriteria Model (Object to contain form inputs)
export interface SearchCriteria {
    text:string
    count:number
}

// Create Gif Model (Object array to show)
export interface Gif {
    title:string
    url:string
    imageUrl:string
}