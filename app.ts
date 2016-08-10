
import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
@Component({
selector: 'hello-world',
template: `
<div>
<ul>
<li *ngFor="let name of names">Hi {{name}}
</li>
</ul>
</div>
`
})
class HelloWorld {
name:string[];
constructor(){
	this.names =['Wanjila', 'Joan', 'Josephine', 'Mary', 'Caroline'];
}

}
bootstrap(HelloWorld);