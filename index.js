function calculateGrade(mark){
    let grade;
   if(mark >= 80 && mark <= 100){
       grade = 'A';
   }else if(mark >= 60 && mark <= 79){
       grade = 'B';
   }else if(mark >= 50 && mark <= 59){
       grade = 'C';
   }else if(mark >= 0 && mark <= 39){
       grade = 'E'
   }else{
       alert('Invalid input')
   }
   return grade;
}

// This code has two functions calculateGrade(mark) and displayGrade()
//calculateGrade(mark) this is the students test marks, it has a single argument that is mark
//displayGrade() takes the input from HTML with the id of (mark)
//after the marks are calcluated they are shown in the Result  or stored in the (result) id
//For each mark entered from 100 to 0 there is a corresponding grade displayed.
//Using the mark entered will calculate the grade of the student and display the results.



function displayGrade(){
   const mark = document.getElementById('mark').value
   const grade = calculateGrade(mark);
   document.getElementById('Result').innerHTML = `Result:${grade}`;
}