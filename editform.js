let formContainer = document.getElementById("form-container")
let UlEl = document.getElementById("ul-el")
let userSummary = document.getElementById("user-summary")

function openEditForm(){ 
    formContainer.innerHTML=`<form action=""><input type="text" placeholder="Name" class="form-el" id="name"><br>
        <input type="text" class="form-el" placeholder="Surname" id="surname"><br>
        <input type="text"class="form-el" placeholder="Email" id="email"><br>
        <input type="text" class="form-el" placeholder="Phone" id="phone"><br>
        <h4>Summary</h4>
        <textarea name="" value="" class="form-el" placeholder="Summary" style="text-indent: 0px" id="summary" cols="30" rows="10">
        </textarea>
        <button onclick="applyChanges()">APPLY</button>
        <button onclick="closeForm()">CANCEL</button>
        
        
        </form>`
}
function applyChanges(){
    let names = document.getElementById("name")
let surname = document.getElementById("surname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let summary = document.getElementById("summary")
  userSummary.innerText = summary.value
 UlEl.innerHTML = `<li>Name: ${names.value}</li>
 <li>Surname: ${surname.value}</li>
 <li>Email: ${email.value}</li>
 <li>Phone: ${phone.value}</li>
 `

    formContainer.innerHTML=""
}
function accountForm(){
    
    formContainer.innerHTML=`<form action="">
    <h4>Change Password</h4><input type="text" placeholder="Enter Old Password" class="form-el" id="old-pw"><br>
        <input type="text" class="form-el" placeholder="Enter New Password" id="new-pw"><br>
        <input type="text"class="form-el" placeholder="Enter New Password Again" id="new-pw2"><br>
        <button onclick="">Change Password</button>
        <h4>Change email</h4>
        <input type="text" class="form-el" placeholder="Enter New Email" id="new-email"><br>
        
        <button onclick="">Change Email</button><br>
        
        <button onclick="closeForm()" style="margin: 5px;">CANCEL</button>
     
        </form>`

        

}
function closeForm(){
    formContainer.innerHTML=""
}
 