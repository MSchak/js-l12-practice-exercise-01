const randomFolks = document.querySelector(".random-peeps");
const numUsers = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("select");

const getData = async function(numUsers) {
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults);

};

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (let user of userResults){
        let country = user.location.country;
        let name = user.name.first;
        let imageUrl = user.picture.medium;
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />`;
        randomFolks.append(userDiv);
    }
};
getData(1);

numUsers.classList.remove("hide");

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value
    getData(numUsers);
});
