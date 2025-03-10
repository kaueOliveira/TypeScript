// Em TypeScript, um tipo literal é um tipo que representa um valor específico, em vez de um conjunto de valores possíveis. 
// Ele restringe uma variável a ter um único valor exato, tornando o código mais seguro e previsível.

let tamanho: 10 | 20 | 30;

tamanho = 10; // ✅ Válido
//tamanho = 25; // ❌ Erro! 25 não é permitido

//Se você atribuir um valor literal diretamente a uma variável const, TypeScript automaticamente infere o tipo literal:

const status1 = "sucesso"; // Tipo inferido: "sucesso"
let status2 = "sucesso";  // Tipo inferido: string (não um literal)

let status3 = "sucesso" as const; // Agora é um tipo literal "sucesso"

