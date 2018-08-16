**Laboratória - Produto final sprint 3.**
**Turma 0** - Piloto.
**Trabalho em dupla:**
 - Sabrina Andrade
 - Thatiana Cunha

16 de agosto de 2018.

---------------------------------

Festa 01

**PRODUTO FINAL: REDE SOCIAL X**
----------------
**SOBRE O PRODUTO**
Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, as redes sociais têm invadido nossa vida. Amamos, odiamos, idolatramos e muitos não conseguem viver sem elas. Nesse contexto, um empreendedor muito visionário nos encarregou de criar uma rede social. Não nos é dado muito detalhe sobre que tipo de rede social ele quer, ele só nos disse que criemos a melhor que possamos e que o convençamos de que nosso rede social terá mais sucesso.

Para tanto, há alguns pontos básicos que uma rede social deve possui:

 - Perfis de usuários 
 - Um newsfeed onde pode ver as atualizações de todos os seus contatos Um lugar para poder escrever posts 
 - Um lugar para adicionar fotos 
 - Capacidade para poder ter amigos ou para poder seguir
   pessoas/marcas dentro da rede social Ser mobile friendly

Este empreendedor, além disso, sabe que os criadores de produtos têm que pensar sempre nos usuários e espera que tenha em conta o que os usuários necessitam no momento de criar este produto, se pensa por exemplo em uma rede social para compartilhar memes ou uma para compartilhar coisas de animais de estimação ou alguma outra para compartilhas dicas de restaurantes ou receitas. Você terá que levar em conta o que é que o usuário gostaria de encontrar sobre estes temas em uma rede social.

Um exemplo: a esse empreendedor apresentaram um caso de uma rede social para químicos. Nesta rede social os químicos postam artigos sobre suas pesquisas e podem encontrar o conteúdo de acordo ao mais popular, o mais recente ou o mais comentado. Além disso, podem comentar nos artigos de seus colegar e podem pesquisar artigos de acordo com determinadas palavras-chave.

**O QUE SE PEDE? - NA PLATAFORMA LMS**

 - Trabalhar em duplas 
 - Ter um planejamento 
 - A definição do leiaute
 - Projeto mobile friendly 
 - Publicar o produto em Github Pages
 - Opcionalmente, se se desenvolve um login ou se deseja armazenar a
   informação em uma base de dados, usar Firebase.


**Valor:** 500 pontos.

<table>
<tr>
<th>Mobile First</th>
<th>Perfil de usuário</th>
<th>Newfeed</th>
<th>Interação social</th>
<th>Firebase</th>
<th>Extra</th>
<th>Extra</th>
</tr>
<tr>
<td>Reponsividade</td>
<td>Cadastro e login</td>
<td>publicar, editar, deletar</td>
<td>seguir amigos e filtro de post</td>
<td>Autenticação, banco de dados, host</td>
<td>Funcionalidade extra</td>
<td>Apresentação</td>
</tr>

<tr>
<td>0 a 5</td>
<td>0 a 5</td>
<td>0 a 5</td>
<td>0 a 5</td>
<td>0 a 5</td>
<td>0 a 5</td>
<td>0 a 5</td>
</tr>
<tr>

<td>10%</td>
<td>10%</td>
<td>30%</td>
<td>30%</td>
<td>20%</td>
<td>10%</td>
<td>10%</td>

</tr>
</table>


**INSTRUÇÕES DOS MENTORES**
----------------

**FIREBASE AUTHENTICATION**
•	Cadastro com email, senha
•	Login com email e senha


**FIREBASE REALTIME DATABASE**
•	Post com texto e filtro de visualização (todos e amigos).
•	Timeline com filtro de posts, seus posts, posts dos amigos e todos (seus + amigos)
•	Seguir amigos a sua rede social (esquema twitter)

**FIREBASE HOSTING**
•	Hospedagem do app pelo Firebase.

**BOOTSTRAP/MEDIA QUERY/GRID**
•	Design pensando em mobile first, isso quer dizer que ele tem que funcionar muito bem na versão mobile e também na versão web
________________________________________

**EXTRAS**

 - Cadastro com email, senha e nome **(extra)**. 
	 - Dica: ao fazer o cadastro pelo Auth do Firebase, também criar usuário no banco passando nome e email.
 - Posts com imagens **(extra)**.
	 - Dica: usar o Firebase Storage    
 - Curtidas no post **(extra)**.
	 - Dica: adicionar o campo de curtidas nos posts pelo banco 
 - Usar LocalStorage para passar ID **(extra)**.
	 - Dica:  nenhuma dica.
	 - Dica: nenhuma dica.
________________________________________

**Comida & Cia**
----------------

A ideia é criar uma rede social de alimentação, onde as pessoas poderiam postar receitas e classifica-las por nacionalidade, custo, dificuldade de execução.
As pessoas podiam seguir outros usuários, ler as receitas, conforme o filtro de privacidade.
Teria uma sessão para restaurantes e chefes profissionais.
Na sessão restaurantes teria nacionalidade, custo, tempo de espera media por prato, avaliação dos clientes, mostraria se há ou não espaço para crianças e estacionamento.
Na parte dos chefes profissionais apresentaria suas especialidades, receitas recomendadas por eles, onde eles trabalham.
Separamos por versão para criar o código, e trabalhamos em equipe para viabilizar o máximo de versões dentro do prazo estipulado.

**VERSÕES**
----------------

**VERSÃO - 01**
Área de cadastro:

 - Nome; 
 - E-mail;
 - Senha;
 - ID *(gerado automaticamente pelo sistema)*.

**VERSÃO - 02**
Login com:

 - E-mail;
 - Senha.

 
**VERSÃO - 03**

 - Postar publicações;

**VERSÃO - 04**

 - Editar post;
 - Excluído post.

**SERÁ IMPLEMENTADO NO FUTURO**

**VERSÃO - 05**

 - Adicionar perfil de usuários;
 - Explorar perfis.

**VERSÃO - 06**

 - Curtidas aos posts;
 - Usuário pode seguir amigos;
 - Filtrar post:
   	 - Público;
   	 - Para amigos;

**VERSÃO - 07**

 - Só exibir post para terceiros de acordo com
   esses filtros públicos, para amigos ou privado. 
   
**VERSÃO - 08**

 - Adicionar foto;
 - Armazenar foto;

**VERSÃO - 09**

 - Adicionar perfis de restaurante com banco de dados
   Json;
   
**VERSÃO - 10**

 - Associar receitas a sua nacionalidade, exemplo: japonesa, mexicana, brasileira. 

**TELAS**
----------------

**Tela - Login**
![Login](https://firebasestorage.googleapis.com/v0/b/data-sprint-tres.appspot.com/o/index-login.jpg?alt=media&token=9bff0ae4-ef1e-44bf-a7e5-20b8d2a3cc33)

**Tela - Registro**
![enter image description here](https://firebasestorage.googleapis.com/v0/b/data-sprint-tres.appspot.com/o/registro.jpg?alt=media&token=799225f0-88a6-40c4-b288-d88568138cc4)
**Tela - Post**
![enter image description here](https://firebasestorage.googleapis.com/v0/b/data-sprint-tres.appspot.com/o/post.jpg?alt=media&token=c739ca4b-9754-4ce1-b106-6acc8b038236)
**Tela - Seguir amigos**
![enter image description here](https://firebasestorage.googleapis.com/v0/b/data-sprint-tres.appspot.com/o/pessoas%20a%20seguir.jpg?alt=media&token=ee66b5cb-606c-429e-a81a-e85f6ed44be9)
**Tela - Procurar hastag**
![enter image description here](https://firebasestorage.googleapis.com/v0/b/data-sprint-tres.appspot.com/o/busca%20de%20hastag.jpg?alt=media&token=04d0008f-bc02-4b30-b146-1f287cd767f9)
**Tela - Procurar localização**
![enter image description here](https://firebasestorage.googleapis.com/v0/b/data-sprint-tres.appspot.com/o/busca%20de%20local.jpg?alt=media&token=79a8b6a5-c557-44a7-83db-a6286d54c46d)