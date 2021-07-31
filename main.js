var riddle = ["A thing in a thing in a thing","Could you give me some money Please!!","Oink , Oink , Oink time!!"];
var number = [34356,67283,83485];

function check(){
    for (let i = 0; i < number.length; i++) {
        if(parseInt(document.getElementById("huntA").value) == number[number.length - 1]) {
            document.getElementById("huntQ").innerHTML = "The last clue :<br>'It is in one of our study rooms' <br><br> Did you like my webpage?";
            document.getElementById("huntA").style.display = "none";
            document.getElementById("ch").style.display = "none";
            console.log("it got in");
        }

        if (document.getElementById("huntQ").innerHTML == riddle[i]) {
            if (parseInt(document.getElementById("huntA").value) == number[i]) {
                var r = riddle[i + 1];

                console.log("Work");
                document.getElementById("huntQ").innerHTML = r;
                //document.getElementById("huntQ").innerHTML = r;//"sdfg";//riddle[i++];
                document.getElementById("huntA").value = "";
                console.log(r);
            }
            
        }
         console.log(number[i]);
    }
}

/** <h4 id="huntQ">A thing in a thing in a thing</h4>
                    <input type="text" class="form-control my-4" placeholder="Enter Code">
                    <button class="btn btn-primary" onclick="check()">Check</button> */