import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[isShow]'
})
export class ShowHideDirective{
    
    private hasView: boolean = true;
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef){

    }

    @Input() set isShow(condition: boolean){
        if(condition && this.hasView){
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = false;
        }else if(!condition && !this.hasView){
            this.viewContainer.clear();
            this.hasView = true;
        }
    }
}