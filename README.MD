## FERRAMENTAS UTILIZADAS NO PROJETOO

styled-components é o resultado de questionarmos como poderíamos aprimorar CSS para estilizar sistemas de componentes React. Ao nos concentrarmos em um único caso de uso, conseguimos otimizar a experiência para os desenvolvedores, bem como a saída para os usuários finais.

Além da experiência aprimorada para desenvolvedores, os componentes estilizados fornecem

CSS crítico automático : os componentes estilizados controlam quais componentes são renderizados em uma página e injeta seus estilos e nada mais, de forma totalmente automática. Combinado com a divisão de código, isso significa que seus usuários carregam a menor quantidade de código necessária.
Sem bugs de nome de classe : os componentes estilizados geram nomes de classe exclusivos para seus estilos. Você nunca precisa se preocupar com duplicação, sobreposição ou erros ortográficos.
Exclusão mais fácil de CSS : pode ser difícil saber se um nome de classe é usado em algum lugar em sua base de código. os componentes estilizados tornam isso óbvio, já que cada detalhe do estilo está vinculado a um componente específico. Se o componente não for usado (que as ferramentas podem detectar) e for excluído, todos os seus estilos serão excluídos com ele.
Estilo dinâmico simples : adaptar o estilo de um componente com base em seus adereços ou um tema global é simples e intuitivo, sem ter que gerenciar manualmente dezenas de classes.
Manutenção fácil : você nunca precisa procurar em arquivos diferentes para encontrar o estilo que afeta seu componente, portanto, a manutenção é fácil, não importa o tamanho de sua base de código.
Prefixo automático do fornecedor : escreva seu CSS de acordo com o padrão atual e deixe que os componentes estilizados cuidem do resto.

# with npm

npm install --save styled-components

# with yarn

yarn add styled-components


# REACT NAVIGATION INICIANDO ....

O React Navigation é composto de alguns utilitários principais e esses são usados ​​pelos navegadores para criar a estrutura de navegação em seu aplicativo. Não se preocupe muito com isso por enquanto, ficará claro em breve! Para antecipar o trabalho de instalação, vamos também instalar e configurar dependências usadas pela maioria dos navegadores, então podemos prosseguir com o início da escrita de algum código.

** expo install @react-navigation/native =>
** expo install react-native-screens react-native-safe-area-context

# REACT NAVIGATION INICIADO AGORA COM OS TIPO DE NAVEGAÇOES ....

=> Primeiro vamos instalar o tipo d enavegação em pilha que e o tipo de navegação chamada Stack_Navigation
\*\* expo install @react-navigation/native-stack

=> Agora iremos utilizar tabem um tipo d enavegação chamada Drawer que e aquele tipo tipo de navegaçlão que quando
usuario arrasta a o dedo l na tela do cel vem a nagaão
** expo install @react-navigation/drawer
=> Apos instalar o Drawer precisamos instalar as seguintes dependecias junto
** expo install react-native-gesture-handler react-native-reanimated

## CONFIGURAÇÃO API

## Chave da API (v3 auth)

4b680ce4c188159492bcafc2610293a4

## Exemplo de Requisição de API

https://api.themoviedb.org/3/movie/550?api_key=4b680ce4c188159492bcafc2610293a4

## Token de Leitura da API (v4 auth)

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjY4MGNlNGMxODgxNTk0OTJiY2FmYzI2MTAyOTNhNCIsInN1YiI6IjYxNTM2MTc1ZDY1OTBiMDA4YzZiZmIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A4LVuJGzcp3XRPT5rpusUqghGacUwqyxDK1lPpZVE

## GET => BUSCA FILMES EM CARTAS

vamos buscar os filmes em cartazes e na liguagem brasileira pt-br e apenas com uma pagina
https://api.themoviedb.org/3/movie/now_playing?api_key=4b680ce4c188159492bcafc2610293a4&language=pt-BR&page=1

## PARA TRABALHAMOS COM REQUISIÇÃO

expo install axios

geito tradicional de requisicao
async function getMovies(){
const response = await api.get('/movie/now_playing',{
params:{
api_key: key_api,
language: 'pt-BR',
page: 1,
}
});
setNowMovies(response.data)
console.log(response.data)
};

## LIB PARA MANIPULAR VOTO (STARS)

react-native-stars é um versátil componente de revisão de estrelas nativas do react com compatibilidade de meia estrela e imagens personalizadas, tamanhos de estrelas, contagem de estrelas, espaçamento entre estrelas e exibição de valor.
expo install react-native-stars

## WEB VIEW

react-native-webviewfornece um WebViewcomponente que renderiza o conteúdo da web em uma visualização nativa.
expo install react-native-webview
