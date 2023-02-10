import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map, take } from "rxjs";
import { Gif, SearchCriteria } from "./models";

// Service takes in search criteria and sends GET request to Giphy
@Injectable()
export class GiphyService {

    // CONSTRUCTOR
    constructor(private http:HttpClient) {}

    // METHOD
    search(searchCriteria:SearchCriteria):Promise<Gif[]> {
        // https://api.giphy.com/v1/gifs/search?q=text&limit=count&api_key=...
        const params = new HttpParams()
                            .set("q",searchCriteria.text)
                            .set("limit",searchCriteria.count)
                            .set("api_key","UkCS73gulam07h06HDttsJs6NTers0pH")
        return firstValueFrom<Gif[]>(this.http.get<any>('https://api.giphy.com/v1/gifs/search',{params})
                                                            .pipe(take(1),map(v => {
                                                                // Retrieve data JsonArray from returned result
                                                                const data:any[] = v.data
                                                                // For each object within array, map into Gif object (Return as Gif array)
                                                                return data.map(g => {
                                                                    return {
                                                                        title:g.title,
                                                                        url:g.url,
                                                                        imageUrl:g.images.fixed_height.url
                                                                    } as Gif
                                                                })
                                                            })))
    }

}