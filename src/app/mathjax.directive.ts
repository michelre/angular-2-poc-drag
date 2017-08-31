import { Directive, ElementRef, Input } from '@angular/core';

declare var MathQuill: any;
declare var MathJax: any;

@Directive({
  selector: '[MathQuill]'
})
export class MathJaxDirective {

  @Input('MathQuill') texExpression: string = '';
  MQ = MathQuill.getInterface(2);
  options: any = {
    restrictMismatchedBrackets: true
  }

  constructor(private el: ElementRef) {}

  ngOnInit(){
    if(this.el.nativeElement.getAttribute('TexExp')) {
      const mathField = this.MQ.MathField(this.el.nativeElement, this.options);
      this.el.nativeElement.innerHTML = mathField.latex(this.el.nativeElement.getAttribute('TexExp')).html();
    }
  }

  ngOnChanges() {
    const mathField = this.MQ.MathField(this.el.nativeElement, this.options);
    console.log(mathField)
    this.el.nativeElement.innerHTML = mathField.latex(this.texExpression).html();
  }

}
