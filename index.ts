#! /usr/bin/env node
import inquirer from "inquirer";
class student {
    id:string;
    name:string;
    coursesEnrolled:string[]
    feesAmount:number;

constructor(id:string,name:string,courseEnrolled:string[],feesAmount:number){
    this.id =id
    this.name =name
    this.coursesEnrolled =courseEnrolled
    this.feesAmount =feesAmount
    }
}
   let baseId =10000
   let studentId :string = "";
   let continueEnrollment =true;
  
   let students:student[]=[]

   do{
    let action=await inquirer.prompt([{
        type:"list",
        name: "ans",
        message: " please select an option  ",
        choices: ["Enroll a student","show student status"]
    }])
      if(action.ans === "Enroll a student"){
        let studentName = await inquirer.prompt([{
            type: "input",
            name: "ans",
            message: " Please enter your name: "
        }])
         let trimedstudentName =(studentName.ans).trim().toLowerCase()   
         let studentNamecheck =students.map(obj => obj.name) 
      
         if(studentNamecheck.includes(trimedstudentName) === false ){
     if(trimedstudentName !== ""){
           baseId++
           studentId ="STID" + baseId

           console.log( "your account has been created" );
           console.log( `welcome, ${trimedstudentName} ! `);

             let course = await inquirer.prompt([{
            type: "list",
            name: "ans",
            message: " please select a course",
            choices: ["Typescript","Python","css","HTML"]

        }])
             let courseFees =0
             switch(course.ans){
            case "Typescript" : courseFees = 10000;
            break;

            case "python" :courseFees =12000
            break;

            case "css" :  courseFees =20000
            break;

            case "HTML" :  courseFees =15000
            break;
   }
            let courseConfirm = await inquirer.prompt([{
                type:"confirm",
                name: "ans",
                message: " Do you want to enroll in this course "
            }])
        if(courseConfirm.ans === true){
            let Student = new student (studentId,trimedstudentName,[course.ans],courseFees)
            students.push(Student)
            console.log(" You have enrolled in this course ");
        }
       }else{
        console.log("Invalid erorr")
     }
     }else{
        console.log("This name is already exists ");
     }
   }
     else if (action.ans === "show student status"){
        if(student.length !== 0){
            let studentNamecheck = students.map(e=> e.name)

            let selectedStudent = await inquirer.prompt([{
                    type:"list",
                    name:"ans",
                    message:"please select name",
                    choices: studentNamecheck
            }])
             let foundstudent = students.find(student => student.name === selectedStudent.ans)

             console.log("student information");
             console.log(foundstudent);
             console.log ("\n");

        }else{
            console.log("Record is empty ")
        }
     }
             let userConfirm = await inquirer.prompt([{
                type:"confirm",
                name:"ans",
                message: " Do you want to continue? "
             }])
             if (userConfirm.ans === false){
                continueEnrollment = false
             }
}while(continueEnrollment)
