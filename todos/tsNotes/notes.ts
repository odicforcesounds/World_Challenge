const staticList: string[] = ['A', 'B', 'C']; 
console.log(staticList.indexOf('B'))

enum Size { Small, Medium, Large }
let mySize = Size.Small;

console.log(mySize)

type Employee = {
  readonly id: number,
  name: string,
  retire:(date: Date) => void
}

let employee: Employee = {
  id: 1,
  name: "Oscar",
  retire: (date:Date) => {
    console.log(date)
  }
}
