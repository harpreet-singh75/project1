let users = [
  {
    name: "Bob Smith",
    email: "bobsmith@gmail.com",
  },
  {
    name: "Shubh Narang",
    email: "shubhnarang@gmail.com",
  },
  {
    name: "Mihir Sharma",
    email: "mihirsharma@gmail.com",
  },
  {
    name: "Shaurya Sharma",
    email: "shauryasharma@gmail.com",
  }
];
let userinput = document.querySelector("#search_bar");
let user_container = document.querySelector(".users_container");
let user_elem = document.createElement("div");
// let elem = document.querySelector(`${user_elem}`)
users.map((user) => {
  let { name, email } = user;
  let user_elem = document.createElement("div");
  
  user_elem.innerHTML = `
            <div class="user" >
                <div class="userimage" style="width: 3rem; border-radius: 2rem; height: 80%;"></div>
                <div class="userinfo">
                    <div class="username" style="font-size: large; font-weight: 600;">${name}</div>
                    <div class="useremail">${email}</div>
                </div>
            </div>
    `;
  user_container.append(user_elem);
});
function search_value() {
  user_container.innerHTML = "";
  let search_result = users.filter((person) => {
    let { name, email } = person;
    return (
      name.toLowerCase().includes(userinput.value) ||
      email.toLowerCase().includes(userinput.value)
    );
  

 });
     search_result.map((pers) => {
      let { name, email } = pers;
      
      user_elem.innerHTML = `
            <div class="user" >
                <div class="userimage" style="width: 3rem; border-radius: 2rem; height: 80%;"></div>
                <div class="userinfo">
                    <div class="username" style="font-size: large; font-weight: 600;">${name}</div>
                    <div class="useremail">${email}</div>
                </div>
            </div>
    `;
      user_container.append(user_elem);
   });
}
userinput.addEventListener("input", search_value)
