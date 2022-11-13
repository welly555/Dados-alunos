var pessoas = [
    {
        "id":"01",
        "Nome":"Wellyngton",
        "Idade":"20",
        "Genero":"Masc",
        "Num":"9999999-9999",
        "Email":"welly@",
        "loc":"rua dos amores"
    },
    {
        "id":"02",
        "Nome":"Whashington",
        "Idade":"22",
        "Genero":"Masc",
        "Num":"4002-8922",
        "Email":"whash@",
        "loc":"rua das dores"
    },
    {
        "id":"03",
        "Nome":"thiago",
        "Idade":"28",
        "Genero":"Masc",
        "Num":"4002-8922",
        "Email":"thia@",
        "loc":"longe"
    },
    {
        "id":"04",
        "Nome":"Kamile",
        "Idade":"19",
        "Genero":"Fem",
        "Num":"4002-8922",
        "Email":"pitoco@",
        "loc":"rua dos amores"
    },
    {
        "id":"05",
        "Nome":"Joazinho",
        "Idade":"30",
        "Genero":"Masc",
        "Num":"4002-8922",
        "Email":"joao@",
        "loc":"rua dos desesperos"
    },
];


function Resul(id){
   
    if(id === '01'){
        document.getElementById("nome").innerText = pessoas[0].Nome
        document.getElementById("idade").innerText = pessoas[0].Idade
        document.getElementById("genero").innerText = pessoas[0].Genero
        document.getElementById("num").innerText = pessoas[0].Num
        document.getElementById("email").innerText = pessoas[0].Email
        document.getElementById("loc").innerText = pessoas[0].loc
        document.getElementById("img").setAttribute('src', '/causa e efeito/img/img01.jpg')
    }if(id === '02'){
        document.getElementById("nome").innerText = pessoas[1].Nome
        document.getElementById("idade").innerText = pessoas[1].Idade
        document.getElementById("genero").innerText = pessoas[1].Genero
        document.getElementById("num").innerText = pessoas[1].Num
        document.getElementById("email").innerText = pessoas[1].Email
        document.getElementById("loc").innerText = pessoas[1].loc
        document.getElementById("img").setAttribute('src', '/causa e efeito/img/img02.jpg')
    }if(id === '03'){
        document.getElementById("nome").innerText = pessoas[2].Nome
        document.getElementById("idade").innerText = pessoas[2].Idade
        document.getElementById("genero").innerText = pessoas[2].Genero
        document.getElementById("num").innerText = pessoas[2].Num
        document.getElementById("email").innerText = pessoas[2].Email
        document.getElementById("loc").innerText = pessoas[2].loc
        document.getElementById("img").setAttribute('src', '/causa e efeito/img/img03.jpg')
    }if(id === '04'){
        document.getElementById("nome").innerText = pessoas[3].Nome
        document.getElementById("idade").innerText = pessoas[3].Idade
        document.getElementById("genero").innerText = pessoas[3].Genero
        document.getElementById("num").innerText = pessoas[3].Num
        document.getElementById("email").innerText = pessoas[3].Email
        document.getElementById("loc").innerText = pessoas[3].loc
        document.getElementById("img").setAttribute('src', '/causa e efeito/img/img04.jpg')
    }if(id === '05'){
        document.getElementById("nome").innerText = pessoas[4].Nome
        document.getElementById("idade").innerText = pessoas[4].Idade
        document.getElementById("genero").innerText = pessoas[4].Genero
        document.getElementById("num").innerText = pessoas[4].Num
        document.getElementById("email").innerText = pessoas[4].Email
        document.getElementById("loc").innerText = pessoas[4].loc
        document.getElementById("img").setAttribute('src', '/causa e efeito/img/img05.jpg')
    }if(id === '06'){
        document.getElementById("nome").innerText = ' '
        document.getElementById("idade").innerText = ' '
        document.getElementById("genero").innerText = ' '
        document.getElementById("num").innerText = ' '
        document.getElementById("email").innerText = ' '
        document.getElementById("loc").innerText = ' '
        document.getElementById("img").setAttribute('src', '/causa e efeito/img/pefil.png')
    }
}

