start();

function start(){
    var buttonAdd = document.getElementById('add')
    buttonAdd.onclick = function(){
        addNewParagraph();
    };
};
    function addNewParagraph() {
        var inputName = document.getElementById('nome');
        var inputEmail = document.getElementById('email');

        var cadastroTeste = {
            nome: "teste",
            adicionar: function(teste){
                
            }
        }










        if(inputName.value.trim() == '' ||
        inputEmail.value.trim() == '') {
        alert('Informe os dois campos!');
    }else{

        //1
        var newP = document.createElement('li');
        var list = document.getElementById('teste');
        list.appendChild(newP);

       // save();

         localStorage.setItem('NOME_ALUNO', inputName.value);
        localStorage.setItem('EMAIL_ALUNO', inputEmail.value);

      

        var content = inputName.value + '=='
         + inputEmail.value ;

        var texto = document.createTextNode(content);
        newP.appendChild(texto);
         
        inputName.value = '';
        inputEmail.value = '';

       teste();
    };

    function teste(){
            var nome = document.createTextNode(contato.nome);
            var email = document.createTextNode(contato.email);
                
        }
    }
    

    

