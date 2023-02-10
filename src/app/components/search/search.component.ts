import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { SearchCriteria } from 'src/app/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  onSearch = new Subject<SearchCriteria>()

  searchForm!:FormGroup

  // CONSTRUCTOR
  constructor(private fb:FormBuilder) {}

  // INITIALIZING FORM
  ngOnInit(): void {
      this.searchForm = this.fb.group({
        text:this.fb.control<string>('',[Validators.required]),
        count:this.fb.control<number>(5)
      })
  }

  // Triggered upon 'Search'
  processForm() {
    const searchCriteria:SearchCriteria = this.searchForm.value
    // searchCriteria.count = parseInt(this.searchForm.value.count)
    // Push SearchCriteria object to app.component
    this.onSearch.next(searchCriteria)
    // Re-initialise form
    this.ngOnInit()
  }
}
