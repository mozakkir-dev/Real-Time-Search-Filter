
const users = [
    {
        name: "aisha khan",
        pic: "https://plus.unsplash.com/premium_photo-1794297401129-32a4bb75dfe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "lost in thoughts, found in dreams 🌙✨"
    },
    {
        name: "zoya malik",
        pic: "https://images.unsplash.com/photo-1794938357271-ba9a7b3183ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "collecting moments, not people 🦋🤍"
    },
    {
        name: "sana sheikh",
        pic: "https://plus.unsplash.com/premium_photo-1795126099017-ce668d08a824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "a little mystery, a little magic ✨🖤"
    },
    {
        name: "meher kapoor",
        pic: "https://images.unsplash.com/photo-1795153190580-1ba9f059b0cb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "soft heart, strong mind 🌸"
    },
    {
        name: "riya sharma",
        pic: "https://images.unsplash.com/photo-1790486874869-ec8849fe3f33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "creating my own sunshine ☀️🌻"
    },
    {
        name: "inaya siddiqui",
        pic: "https://images.unsplash.com/photo-1795153624180-8b73257982e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "peace over everything 🌿🤍"
    },
    {
        name: "amisha rathore",
        pic: "https://plus.unsplash.com/premium_photo-1769105242593-53a74cfe3704?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone"
    }
];




const cardsContainer = document.querySelector(".cards-container");
const inp = document.querySelector(".inp");


// Display users
function showUsers(usersArray) {
    cardsContainer.innerHTML = "";

    usersArray.forEach((user) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = user.name;
        img.className = "bg-img";

        const blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";
        blurredLayer.style.backgroundImage = `url("${user.pic}")`;

        const content = document.createElement("div");
        content.className = "content";

        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const p = document.createElement("p");
        p.textContent = user.bio;

       

        content.append(h3, p);
        card.append(img, blurredLayer, content);
        cardsContainer.appendChild(card);
    });
}

// Real-time search
inp.addEventListener("input", () => {
    const searchValue = inp.value.toLowerCase().trim();

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue)
    );

    

    if(filteredUsers.length === 0){
         cardsContainer.innerHTML = "<p>No users found</p>";

    }
    else{
        showUsers(filteredUsers);
    }
});

// Initially display all users
showUsers(users);
