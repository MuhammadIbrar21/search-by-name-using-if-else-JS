function GenerateInfo() {
    let name = document.getElementById("name").value;
    if (name === "sharooz" || name === "Sharooz") {
        info = "Medical billing Guru with US Accent";
    } else if (name === "abdullah" || name === "Abdullah") {
        info = "CR sahab"
    } else if (name === "rizwan" || name === "Rizwan") {
        info = "Horse lovers"
    } else {
        info = "Bhai hor Mehnat kar"
    }

    document.getElementById("info").innerHTML = info;

}


