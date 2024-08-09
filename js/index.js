let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function() {
    let file = inputFile.files[0];
    if (file) {
        profilePic.src = URL.createObjectURL(file);
    }
};
