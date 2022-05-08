
// let roll =  prompt('Roll Number')



studentData.map( (data,index) => {

let bnGp = `${gpaCell(data.markes.bn)}`
let enGp = `${gpaCell(data.markes.en)}`
let mathGp = `${gpaCell(data.markes.math)}`
let sGp = `${gpaCell(data.markes.s)}`
let scGp = `${gpaCell(data.markes.sc)}`
let relGp = `${gpaCell(data.markes.rel)}`

let bnGr = `${gradeCell(data.markes.bn)}`
let enGr = `${gradeCell(data.markes.en)}`
let mathGr = `${gradeCell(data.markes.math)}`
let sGr = `${gradeCell(data.markes.s)}`
let scGr = `${gradeCell(data.markes.sc)}`
let relGr = `${gradeCell(data.markes.rel)}`




if ( data.roll == 1286 ) {
    console.log(`

    Name : ${data.names}
    Class : ${data.class}
    Roll : ${data.roll}
    Gender : ${data.gender}
    Age : ${data.age}
    Location : ${data.location}
<<---------------------------------------------------->>

       You Got Gpa ${bnGp} And Grade ${bnGr}
       You Got Gpa ${enGp} And Grade ${enGr}
       You Got Gpa ${mathGp} And Grade ${mathGr}
       You Got Gpa ${sGp} And Grade ${sGr}

        
`);
}

});