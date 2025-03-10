//É um mecanismo que permite dizer explicitamente ao compilador que um valor tem um tipo específico. 
// Isso é útil quando você sabe mais sobre o tipo de um valor do que o TypeScript pode inferir automaticamente.

//Type assertion -> Recomendado quando se tem certeza que o elemento existe
const body1 = document.querySelector('body') as HTMLBodyElement;
body1.style.background = 'red';

//HtmlElement 
const input = document.querySelector('.input') as HTMLInputElement;
input.focus();

//Alternativas

//Condicional
const body2 = document.querySelector('body');
if (body2) body2.style.background = 'red';

// Non-null assertion (!) -> Não indicado
const body3 = document.querySelector('body')!;
body3.style.background = 'red';