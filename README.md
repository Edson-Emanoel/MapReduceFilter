# Diferença entre Filter, Reduce e Map

## **Filter:**

- **Propósito**: _O Filter serve para selecionar elementos que atendem a um critério._

- **Critério para fazer um Filter**: _Precisamos de um Array, com um campo(ou propriedade) que será usado no filtro(ou filter)._

- **Resultado**: _O resultado do filter é um novo array com os elementos do original que atendem ao critério definido. Ele pode ser diferente em tamanho, mas os elementos(objetos) mantêm os mesmos campos ou propriedades._

> [!TIP]
> Exemplo: Filtrando quem pode e quem não pode ter carteira de motorista

```
const pessoas = [
  { nome: "Alice", idade: 16 },
  { nome: "Bob", idade: 30 },
  { nome: "Charlie", idade: 18 },
  { nome: "Carlos", idade: 15 },
];

// Filtro baseado no campo 'idade'
const podeDirigir = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(podeDirigir);


Retorno:

[
   { nome: "Bob", idade: 30 },
   { nome: "Charlie", idade: 18 }
]
```

<hr>

## **Reduce:**

- **Propósito**: _O Reduce serve para combinar elementos de um array (como letras, números, objetos, etc.) em um único valor, com base em uma lógica definida pelo programador._

- **Critério para fazer um Reduce**: _Precisamos de um Array, um valor inicial para o acumulador (opcional), e uma lógica de redução que define como combinar o acumulador com os elementos do Array._

- **Resultado**: _Um valor único_

> [!TIP]
> Exemplo: Somando Números

```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


Retorno:

10
```

<hr>

## **Map:**

- **Propósito**: _O Map serve para transformar os elementos de um Array original, criando um novo array com os valores transformados._

- **Critério para fazer um Map**: _Precisamos apenas um Array original_

- **Resultado**: _Cria um novo array transformado com base nos campos(propriedades) do array original._

> [!Exemplo:]
> Eleva números ao quadrado

```
const numeros = [1, 2, 3];

// Transformar(eleva) os números ao quadrados
const quadrados = numeros.map(num => num * num);

console.log(quadrados);

Retorno:

[1, 4, 9, 16]
     ou
[
      1,
      4,
      9
]
```
