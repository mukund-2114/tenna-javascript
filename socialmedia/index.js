const title = document.getElementById("title");
const caption = document.getElementById("caption");
const avatar = document.getElementById("avatar");
const postsContainer = document.getElementById("posts");
localStorage.setItem("author","mukund")

let posts = []; // store all posts

function createPost() {
    const file = avatar.files[0];

    if (!file) {
        alert("Please select an image");
        return;
    }

    const post = {
        title: title.value,
        caption: caption.value,
        image: URL.createObjectURL(file)
    };

    posts.push(post);
    renderPosts();

    // clear inputs
    title.value = "";
    caption.value = "";
    avatar.value = "";
}

function renderPosts() {
    postsContainer.innerHTML = "";

    posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.style.border = "1px solid #ccc";
        postDiv.style.padding = "10px";
        postDiv.style.marginBottom = "10px";

        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.caption}</p>
            <img src="${post.image}" width="200" />
        `;

        postsContainer.appendChild(postDiv);
    });
}
