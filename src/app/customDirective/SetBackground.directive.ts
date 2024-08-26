import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: true
})
export class setBackground implements OnInit{
    // private element: ElementRef;
    constructor(private element: ElementRef, private renderer: Renderer2){
        // this.element = element;
    }

    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
        this.renderer.setStyle(this.element.nativeElement, 'color', '#fff');
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is an example title');
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = '#fff'
    }
}