function marks(){     
    let grade = prompt ("Enter your marks here ")
    let result;
    if (grade>79 ) {
        result ="A"
    }
    if (grade<=79 && grade>=60 ) {
        result="B"
    
    }
    if (grade <=59&& grade >=49) {
        result="C"
    
    }
    if (grade <=49 && grade <=40) {
        result="D"
    
    }
    if (grade<=40) {
        result="E"
    }
    document.getElementById("demo").innerHTML = result;
    }