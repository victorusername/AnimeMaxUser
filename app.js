var listaFilmes = []
var listaNomes = []
var links = []


listaFilmes.push("https://i.pinimg.com/originals/47/19/21/4719215e2b8edf91571fb487a5560d96.jpg")
listaFilmes.push("https://i.quotev.com/img/q/u/20/4/12/leno6imwoh.jpg")
listaFilmes.push("https://i.pinimg.com/736x/b9/fc/4c/b9fc4c052063ec003a1fac475ace0e6c.jpg")
listaFilmes.push("https://3.bp.blogspot.com/-Yfx2woETqfM/Wun3o904YtI/AAAAAAAAPN4/S6YQtqj_DxYz7QoZhtmR9YwO9ULeocomwCLcBGAs/s1600/Pikachu%2BPokemon%2Borigem%2Bdesign%2Boriginal.jpg")
listaFilmes.push("https://www.hqzona.com.br/wp-content/uploads/2019/05/Hinata_Hyuga.png")


listaNomes.push("Usuário 1")
listaNomes.push("Usuário 2")
listaNomes.push("Usuário 3")
listaNomes.push("Usuário 4")
listaNomes.push("Usuário 5")


links.push("https://animesonehd.xyz/")
links.push("https://animesonehd.xyz/")
links.push("https://animesonehd.xyz/")
links.push("https://animesonehd.xyz/")
links.push("https://animesonehd.xyz/")



for (var i=0; i<listaFilmes.length; i++) {
  document.write(`
    <h3 class='box'>
      <img src='${listaFilmes[i]}'>
      <span>${"<a href=" + links[i] + ">" + listaNomes[i] + "</a>"}</span>
    </h3>
  `)
}