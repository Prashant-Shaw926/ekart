import { Component } from '@angular/core';
import { LeftSectionComponent } from './left-section/left-section.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { RightSectionComponent } from './right-section/right-section.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LeftSectionComponent,MiddleSectionComponent,RightSectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
