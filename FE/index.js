// *****RENDER NAVBAR*********
let Navadd = document.querySelectorAll("#render_navbar");
for (let i = 0; i < Navadd.length; i++) {
    Navadd[i].innerHTML = `<div id="navbar">
    <ul><img id="gif" src="https://thumbs.gfycat.com/PleasingSelfreliantAustraliankelpie.webp">
        <li id="brand_name">Money Up</li>
    </ul>
    <ul id="navsub2">
        <li><a href="index.html">Envelopes</a></li>
        <li><a href="account.html">Accounts</a></li>
        <li><a href="budget.html">My Budget</a></li>
        <li><a href="" onmouseover="toogle1on()">Help <i class="fa-sharp fa-solid fa-caret-down"></i></a>
            <div id="toggle1" onmouseleave="toogle1off()">
                <a href="Userguide.html"> User Guide <i class="fa-sharp fa-solid fa-circle-info"></i></a>
                <a href="">Get Live Support <i class="fa-solid fa-comments"></i></a>
            </div>
        </li>
    </ul>
    <ul id="navsub1">
        <li id="user_name">Hi,Chetan!</li>
        <li>
            <div><button onmouseover="toggle2on()"> Logout </button>
                <div id="toggle2" onmouseover="toggle2on()" onmouseout="toggle2off()">
                    <div>My Profile</div>
                    <div>My Accounts</div>
                    <div>My Budget</div>
                    <div>Customer Service </div>
                </div>
            </div>
        </li>
    </ul>
</div>`
}
let toggle1 = document.querySelector("#toggle1");
let toggle2 = document.querySelector("#toggle2");
function toogle1on() {
    toggle1.style.display = "block";
}
function toogle1off() {
    toggle1.style.display = "none";
}
function toggle2on() {
    toggle2.style.display = "block";
}
function toggle2off() {
    toggle2.style.display = "none";
}

// ************NAVBAR END***********