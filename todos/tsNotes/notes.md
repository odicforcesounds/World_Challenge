# Notas sobre o TypeScript

## Fundamentos Básicos 

### Tipos de dados no JavaScript 

- number
- string
- boolean
- null
- undefined 
- object

### Tipos de dados no TypeScript

- Todos os dados do JavaScript + 
- any: ``` let a:any; ```
- unknown
- never 
- enum ``` enum Size { A = 1, B, C} let mySize = Size.B; ```
- tuple ``` let numberNames: string[] = ['um', 'dois', três']  ``` 

### Declaração dos Dados 

```ts 
let sales: number = 123_123_123;
let course: string = "TypeScript";
let is_published: boolean = true; 
let level; // Em TypeScript as variaveis sem valor associado são do tipo <any>
// Sendo que este tipo de dados permite a conversão do tipo de dado, 
// aconselha-se a não usar nem declarar um tipo de dados <any> para evitar quebrar todos
// os benefícios de usar o TypeScript, tal como ver os erros antes de salvar. 
/*
  Em TypeScript: Tipo de dados <any> ( EVITAR USAR )
*/ 
level = 1;  // tipo de dado <any> - Operação possível 
level = "b" // tipo de dado <any> - Operação possível
level = true  // tipo de dado <any> - Operação possível
// tal comportamento só acontece em JavaScript 
/* 
  Arrays or Tuples in TypeScript 
/* 
let numberList: number[] = [1, 2, '3'] // a variavel 'numberList' é um array de números e por isso o terceiro elemento dá erro. 
let user: [number, string] = [1, 'Oscar'];
/* 
  Enums in TypeScript
*/ 
enum Lista {Ab = 1, Ac, Ad } // se o 'enum' for declarado usando o 'const': 'const enum...', existe a melhoria do código
let elementoLista = Lista.Ab;
console.log(elementoLista) 
```

  



