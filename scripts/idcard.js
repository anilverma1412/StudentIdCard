function submitcard(){
    document.getElementById("img2").innerText = document.getElementById("image").value;
    document.getElementById("nameVal").innerText = document.getElementById("studentName").value;
    document.getElementById("calssVal").innerText = document.getElementById("class").value;
    document.getElementById("rollnoVal").innerText = document.getElementById("rollNo").value;
    document.getElementById("dobVal").innerText = document.getElementById("dob").value;
    document.getElementById("contactVal").innerText = document.getElementById("contactNo").value;

   // console.log(stdNametxt,classtxt,rollNotxt,dobtxt,contactNotxt);
}
function printIdCard(){
    window.print();
}