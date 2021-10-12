//Gerar uma lista de filmes com tamanho desejado
export function getListMovies(size, movies){
  const popularMovies = []; //começando com array de filmes vazio

  //vamos pecorre nosso filmes
  for(let i = 0,  tamanho = size; i < tamanho; i++){
    popularMovies.push(movies[i]);
  };
  return popularMovies;
};


//Gerar um numero aleatorio com a base no tamanho da lista de filmes que eu passar (GERAR MEU BANNER ALEATORIO)
//exemplo passo uma lista com 10 filmes ai ele pega do 0 e gera uma lista e mostrar qual e numero ai pegamos esse 
//numero e pegar qual que e o filme que ele mandou exeplo mandou numero 2 .. qual e filme numero 2 bascicamente e isso
export function handleBanner(movies){
  return Math.floor(Math.random() * movies.length);//pegando numero aleatorio mais so inteiro
};
