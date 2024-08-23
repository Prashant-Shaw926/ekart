import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: true
})
export class setBackground implements OnInit{
    // private element: ElementRef;
    constructor(private element: ElementRef){
        // this.element = element;
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = '#36454F';
        this.element.nativeElement.style.color = '#fff'
    }
}