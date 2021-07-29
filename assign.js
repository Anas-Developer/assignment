
function Data(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function Submit() {
    var myName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    if ((myName.length && address.length && education.length && profession.length) == null) {
        console.log("Please Fill The Form");
    } else {
        var gender1 = document.getElementById("male");
        var gender2 = document.getElementById("female");

        if (gender1.checked) {
            var checkgender = "male";
        } else if (gender2.checked) {
            var  checkgender = "female";
        }

        const myData = new Data(myName,  checkgender, address, education, profession);
        console.log(myData);
    }
}