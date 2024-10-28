
//setting an event listener to id button.
//by clicking the button calculateSpeed function is called/cb
const speed = document.getElementById('button').addEventListener('click', calculateSpeed);
const licenseStatus = document.getElementById('licenseStatus');

function calculateSpeed(){
    //speed value is retrived from input field with the id of speed
    //number of demerit points are calculated based on the difference of speed entered and the limit speed which is 70km/hr
    const speed = document.getElementById('speed').value;
    const demeritPoints = Math.floor((speed - 70) / 5);
    if(speed < 70){
        licenseStatus.innerText = 'ok';
    }else if(speed <= 80){
        licenseStatus.innerText = 'ok';
    //if the speed limit is between 70km/h and 80km/h the license status is ok
    //If the speed limit is 80km/h there are 2 demerits point given and the license is ok
    }else{
        licenseStatus.innerText = 'License Status: License suspended'
    }//if the speed exceed 80km/h the license is suspended
    document.getElementById('result').innerText = `Result: ${demeritPoints} demerit points`;
}