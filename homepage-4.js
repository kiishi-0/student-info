let studentSelect = document.getElementById('students');
let studentOption;
const studentInfo = document.getElementById('info');
let selectionBox = document.getElementById('studentSelect');
let addDiv = document.getElementById('addStudent');
const studentObj = {
    // 'default':{
    //     'id-no': 0,
    //     name:'',
    //     age:20,
    //     birthday: '11-04-2001',
    //     course: 'Computer Science'
    // },
    'student_1':{
        'id-no': 1,
        name:'Anita benga',
        age:20,
        birthday: '11-04-2001',
        course: 'Computer Science'
    },
    student_2:{
        'id-no': 2,
        name:'Samuel oluwole',
        age:19,
        birthday: '14-03-2002',
        course: 'Business Administration'
    },
    student_3:{
        'id-no': 3,
        name:'Nneka Uzoma',
        age:20,
        birthday: '05-07-2001',
        course: 'Accounting'
    },
    student_4:{
        'id-no': 4,
        name:'Niniola James',
        age:19,
        birthday: '21-11-2002',
        course: 'Medical Scences'
    },
    student_5:{
        'id-no':5,
        name:'Joshua Izeng',
        age:20,
        birthday: '15-05-2001',
        course: 'Law'
    }
};
const insertStudents = () =>{// CREATE OPTION TAGS AND PUT STUDENT NAMES FROM THE DATABASE BTWN THEM
    let std;
    for(std in studentObj){
        studentOption = document.createElement('option');
        studentOption.innerText=studentObj[std].name;
        studentOption.setAttribute('id', 'opt')
        studentSelect.appendChild(studentOption);
    }
}
document.onload = insertStudents();//INSERT STUDENTS FROM THE DATABASE INTO THE SELECT TAG
document.onload = studentInfo.style.display = 'none'; 

const selectedStudent = std =>{ //DISPLAY SELECTED STUDENT 
    studentInfo.style.display = 'flex';
    selectionBox.style.display = 'none';
    for(let stud in studentObj){
        if(studentObj[stud].name === std.value){
            let id = document.getElementById('no')
            let name = document.getElementById('name');
            let age = document.getElementById('age');
            let birthday = document.getElementById('birthday');
            let course = document.getElementById('course');
            id.innerText = `Student No : ${studentObj[stud]['id-no']}`
            name.innerText = `Name - ${studentObj[stud].name}`;
            age.innerText = `Age - ${studentObj[stud].age}`;
            birthday.innerText = `Date of Birth - ${studentObj[stud].birthday}`;
            course.innerText = `Course of Study - ${studentObj[stud].course}`;
            // console.log('entered the information')
        }
    }
    
}
const back = () =>{
    studentInfo.style.display = 'none';
    selectionBox.style.display = 'flex';
    // console.log('gone back')
}
const addStudent= () =>{
    addDiv.style.height = '400px'
}
const closeDiv = () =>{
    addDiv.style.height = '0';
}
const doneAdding = () =>{
    let name =  document.getElementById('addedName');
    let age = document.getElementById('addedAge');
    let birth = document.getElementById('addedBirthday');
    let course = document.getElementById('addedCourse');
    let id = document.getElementById('addedId');
    let lenOfObj = Object.keys(studentObj).length + 1;
    console.log(name.value);

    studentObj[`Student_${lenOfObj}`] = {};
    studentObj[`Student_${lenOfObj}`]['id-no'] = id.value;
    studentObj[`Student_${lenOfObj}`]['name'] = name.value;
    studentObj[`Student_${lenOfObj}`]['age'] = age.value;
    studentObj[`Student_${lenOfObj}`]['birthday'] = birth.value;
    studentObj[`Student_${lenOfObj}`]['course'] = course.value;
    addNewStudent()
}

const addNewStudent = () =>{
    let opt = document.getElementById('opt');
    while(studentSelect.lastChild.id === opt.id){
        studentSelect.remove(opt);
    }    
    insertStudents();
}
