import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';
import { Gif, SearchCriteria } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngGiphy';

  // Content to push to images.component as Input
  gifs:Gif[] = []

  // CONSTRUCTOR (To hold GiphyService and send GET request)
  constructor(private giphySvc:GiphyService) {}

  // SearchCriteria object pulled from search.component
  onSearch(searchCriteria:SearchCriteria) {
    console.info('>>> Searching criteria: ', searchCriteria)
    // Execute request and return result 
    this.giphySvc.search(searchCriteria)
                  // If promise accepted, pass the Gif array as input to be displayed in images.component
                  .then(result => {
                    console.info('>>> Result: ', result)
                    this.gifs = result
                  })
                  // If promise rejected, send error
                  .catch(error => {
                    console.error('>>> Error: ', error)
                  })
  }
}
