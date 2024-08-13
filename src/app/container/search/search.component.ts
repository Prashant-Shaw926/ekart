import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output() selectedFilterSearch = new EventEmitter<string>();

  // onClickSearchButton(event: Event){

  // }

  @ViewChild('searchInput') searchInputElement: ElementRef;

  updateSearchText(){
    this.searchText = this.searchInputElement.nativeElement.value;
    this.selectedFilterSearch.emit(this.searchText)
  }

}
