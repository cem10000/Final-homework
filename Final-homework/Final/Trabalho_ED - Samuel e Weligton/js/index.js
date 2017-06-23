start();

function start(){

    Pessoas = {
       list:[],
        adicionar: function(pessoa) {
            if ("undefined" === typeof localStorage.pessoas) {
                this.list.push(pessoa);
                this.salvar();
                criarNovoContato(pessoa);
            }else{
                this.pegarContatosSalvos();
                if (pessoa) {
                    for (var indice in this.list) {
                        if (contato.nome === this.contatos[indice].nome) {
                            throw new Error('O contato ja existe !!!');
                            return;
                        }
                    }
                    this.contatos.push(contato);
                    this.salvar();
            }
        }  
        criarNovoContato(pessoa);

        },

        salvar: function () {
            var contatosString = JSON.stringify(this.list);
            localStorage.list = contatosString;
        },
        pegarContatosSalvos: function () {
            this.list = JSON.parse(localStorage.list);
        },
    }

    document.getElementById('submit').onsubmit=function input(event){
        event.preventDefault();

        var pessoa = {
            Nome : document.getElementById('nome').value,
            Email : document.getElementById('email').value, 
        }

        Pessoas.adicionar(pessoa);

    };


    var criarNovoContato = function (pessoa) {
        console.log(pessoa);

        var newP = document.createElement('li');
        var list = document.getElementById('meuobj');
         list.appendChild(newP);

        var text1 = document.createTextNode(pessoa.Nome);
             newP.appendChild(text1);


        var text2 = document.createTextNode(pessoa.Email);
            newP.appendChild(text2);

         var content = text1.value +'=========='+ text2.value;

        var texto = document.createTextNode(content);
        newP.appendChild(texto);



    }


};




