const notemessage = document.getElementById('data');

function send() {
    const messageInput = document.getElementById("message");
    const message = messageInput.value;
    console.log("message", message);
    const note = { message };

    axios.post('http://localhost:80/addnote', note)
        .then(res => {
            fetchdata();
            messageInput.value = "";
        })
        .catch(err => {
            console.log(err);
        });
}

function fetchdata() {
    axios.get('http://localhost:80/getnote')
        .then(res => {
            console.log("fetchret", res.data.data);
            display(res.data.data);
        })
        .catch(err => {
            console.log(err);
        });
}

function display(data) {
    notemessage.innerHTML = "";

    data.forEach((item) => {
        console.log("item", item);
        const notelist = document.createElement('div');
        notelist.innerHTML = `
            <div class="card-body">
                <span class="card-title">${item.message}</span>
                <button class="btngrp delete-button" data-id="${item.id}">Delete</button>
            </div>
           `;
        notemessage.appendChild(notelist);
    });

    
    const deleteButtons = notemessage.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
           
            deletedata(id);
        });
    });
}

 function deletedata(id){
    axios.delete(`http://localhost:80/deletenote/${id}`)
    .then(res => {
        console.log("fetchret", res.data);
       fetchdata();
    })
    .catch(err => {
        console.log(err);
    });
}

window.onload = function () {
    fetchdata();
};
