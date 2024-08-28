import { Directive, ElementRef, Input, input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: true
})
export class setBackground implements OnInit{
    // private element: ElementRef;
    constructor(private element: ElementRef, private renderer: Renderer2){
        // this.element = element;

    }

    // @Input() backColor: string = '#36454F';
    @Input('setBackground') changeBackAndColor: {backColor: string, textColor: string};

    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeBackAndColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeBackAndColor.textColor);
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is an example title');
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = '#fff'
    }
}