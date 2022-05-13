

let table = document.querySelector('#utenti')
table.classList.add('table')




fetch("json/user.json")
.then(res => res.json())
.then(res => {

    console.log(res);

    

    for(let utente of res){
        
        let tr = document.createElement('tr')

       
        let tdUsername = document.createElement('td')
        tdUsername.innerHTML = utente.username

        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.firstName

        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = utente.lastName

        let tdSesso = document.createElement('td')
        tdSesso.innerHTML = utente.gender

        let tdFoto = document.createElement('td')
        tdFoto.innerHTML = utente.email

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = utente.profileURL

        


        tr.append(tdUsername,tdNome,tdCognome,tdSesso,tdFoto,tdEmail)
   
   
    }
})