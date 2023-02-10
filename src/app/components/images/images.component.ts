import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/models';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  @Input()
  gifs:Gif[] = []
}
