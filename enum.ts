enum Direction {
Up = 1, // Si se le asigna un valor numerico primero, los siguientes valores empi
ezan desde el número especificado
Down = NaN, // Si le ponemos un NaN despúes de haber inicializado un valor nos ob
liga a inicializar el siguiente desués de este, esto no solo pasa con Nan, pasa con St
ring.length, etc.
Left = "asdasd".length,
Right = 1 << 1 // También admiten operadores binarios
}
var a = Direction.Up;
console.log(Direction.Down);


enum Color {Red, Green, Blue};
let c: Color = Color.Green;// 1


enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green; // 2

enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
alert(colorName); // Green


// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;
/**
* Demo
*/
var fooId: FooId;
var barId: BarId;
// Por seguridad
fooId = barId; // error
barId = fooId; // error
// Newing up
fooId = 'foo' as FooId;
barId = 'bar' as BarId;
// Los dos tipos son compatibles con la base
// que en este caso es string
var str: string;
str = fooId;
str = barId;
