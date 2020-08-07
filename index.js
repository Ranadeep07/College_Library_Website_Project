const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const book = document.getElementById('book');
const submit = document.getElementById('submit');
const tablebody = document.getElementById('tablebody');


const xhr = new XMLHttpRequest();

xhr.open('GET',"http://127.0.0.1:3000/submit",true);

xhr.onload = function(){
    let sno = 1
    if(xhr.status != 200){
        console.log("error")
    }else{
        let data = JSON.parse(this.responseText)
        data.forEach(element => {
            tablebody.innerHTML +=`<tr>
                            <th scope="row">${sno++}</th>
                            <td>${element.name}</td>
                            <td>${element.phone}</td>
                            <td>${element.book}</td>
                            <td>${element.dept}</td>
                        </tr>`
        });
    }
}

xhr.send()

submit.addEventListener('click',()=>{
    tablebody.innerHTML +=`<tr>
                            <th scope="row">${sno+1}</th>
                            <td>${name.value}</td>
                            <td>${phone.value}</td>
                            <td>${book.value}</td>
                        </tr>`
})
