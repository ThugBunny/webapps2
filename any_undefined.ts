let notSure: any = 4;
notSure = "maybe a string instead"; // typeof = string
notSure = false;; // typeof = boolean

let notSure: any = 4;
notSure.ifItExists(); // OK, ifItExists puede existir
notSure.toFixed(); // OK, toFixed existe, pero no es comprobado por el compilador
let prettySure: Object = 4;
prettySure.toFixed(); // Error: La propiedad 'toFixed' no existe en un 'Object'.

let list: any[] = [1, true, "free"];
list[1] = 100;


function warnUser(): void {
alert("This is my warning message");
}


let unusable: void = undefined;

