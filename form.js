var id = document.getElementById('txt_id');
var Names = document.getElementById('txtname');
var gender = document.getElementsByName('gender');
var courses = document.getElementById('txtcourse');
var attendent = document.getElementById("att-score");
var assignment = document.getElementById("ass-score");
var exam = document.getElementById("exam-score");
var total = document.getElementById("total-score");
var average = document.getElementById("average-score");
var grade = document.getElementById("grade");

var bodyTable = document.querySelector('tbody');
var btnsubmit = document.getElementById('submit');
var btnclear = document.getElementById('clear');
var btnupdate = document.getElementById('btnUpdate');
var btndelete = document.getElementById('btnDelete');

attendent.addEventListener("keyup",function() {
    total.value = Number(attendent.value)+Number(assignment.value)+Number(exam.value);
    average.value = (Number(attendent.value)+Number(assignment.value)+Number(exam.value))/3;
    grade.value =(average.value >=90)?"A"
                :(average.value >=80)?"B"
                :(average.value >=70)?"C"
                :(average.value >=60)?"D"
                :(average.value >=50)?"E"
                :"F";
});
assignment.addEventListener("keyup",function() {
    total.value = Number(attendent.value)+Number(assignment.value)+Number(exam.value);
    average.value = (Number(attendent.value)+Number(assignment.value)+Number(exam.value))/3;
    grade.value =(average.value >=90)?"A"
                :(average.value >=80)?"B"
                :(average.value >=70)?"C"
                :(average.value >=60)?"D"
                :(average.value >=50)?"E"
                :"F";
});
exam.addEventListener("keyup",function() {
    total.value = Number(attendent.value)+Number(assignment.value)+Number(exam.value);
    average.value = (Number(attendent.value)+Number(assignment.value)+Number(exam.value))/3;
    grade.value =(average.value >=90)?"A"
                :(average.value >=80)?"B"
                :(average.value >=70)?"C"
                :(average.value >=60)?"D"
                :(average.value >=50)?"E"
                :"F";
});
const students = [
    {
        id: "CE001",
        Name: "Sok Dara",
        gender: "Male",
        course: "Web Design",
        assScore: 90,
        attScore: 90,
        examScore: 90,
        totalScore: 270,
        average: 90.00,
        grade: "A"
    },
    {
        id: "CE002",
        Name: "Sok Mesa",
        gender: "Male",
        course: "Web Design",
        assScore: 90,
        attScore: 90,
        examScore: 90,
        totalScore: 270,
        average: 90.00,
        grade: "A"
    }
];

const showTable = ()=>{
    var showInTable ='';
    students.map((value,index,array) =>{
        showInTable += `
        <tr>
            <td>${index + 1}</td>
            <td>${value.id}</td>
            <td>${value.Name}</td>
            <td>${value.gender}</td>
            <td>${value.course}</td>
            <td>${value.attScore}</td>
            <td>${value.assScore}</td>
            <td>${value.examScore}</td>
            <td>${value.totalScore}</td>
            <td>${value.average}</td>
            <td>${value.grade}</td>
            <td><button onclick="clicker(${index})" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Click</button></td>
        </tr>
        `
    });
    bodyTable.innerHTML = showInTable;
};
const reClear = ()=>{
    id.value = "";
    Names.value = "";
    gender.value = "";
    courses.value = "";
    attendent.value = "";
    assignment.value = "";
    exam.value = "";
    total.value = "";
    average.value = "";
    grade.value = "";

    btnupdate.classList.add('d-none');
    btndelete.classList.add('d-none');
}
const btnclearEven = ()=>{
    const newBtnupdate = btnupdate.cloneNode(true);
    const newBtndelete = btndelete.cloneNode(true);

    btnupdate.parentNode.replaceChild(newBtnupdate,btnupdate);
    btndelete.parentNode.replaceChild(newBtndelete,btndelete);

    btnupdate = newBtnupdate;
    btndelete = newBtndelete;

}
const clicker = (index)=>{
    btnupdate.classList.remove('d-none');
    btndelete.classList.remove('d-none');

    id.value = students[index].id;
    Names.value = students[index].Name;
    gender.value = students[index].gender;
    courses.value = students[index].course;
    attendent.value = students[index].attScore;
    assignment.value = students[index].assScore;
    exam.value = students[index].examScore;
    total.value = students[index].totalScore;
    average.value = students[index].average;
    grade.value = students[index].grade;

    btnclearEven();

    btnupdate.addEventListener('click',function(){
        var gendertxt = '';
        if (gender[0].checked) {
            gendertxt = gender[0].value;
        } else {
            gendertxt = gender[1].value;
        }
        students[index].id = id.value;
        students[index].Name = Names.value;
        students[index].gender = gendertxt;
        students[index].course = courses.value;
        students[index].attScore = attendent.value;
        students[index].assScore = assignment.value;
        students[index].examScore = exam.value;
        students[index].totalScore = total.value;
        students[index].average = average.value;
        students[index].grade = grade.value;

        showTable();
        reClear();
    });
    btndelete.addEventListener('click',function(){
        document.getElementById('yesTodelete').addEventListener('click',function(){
            students.splice(index,1);
            showTable();
            reClear();
        })
    })
}
btnclear.addEventListener(('click'),function(){
    reClear();
})
btnsubmit.addEventListener(('click'),function(){
    var gendertxt = '';
    if (gender[0].checked) {
        gendertxt = gender[0].value;
    } else {
        gendertxt = gender[1].value;
    }

    students.push({
        id: id.value,
        Name: Names.value,
        gender: gendertxt,
        course: courses.value,
        assScore: assignment.value,
        attScore: attendent.value,
        examScore: exam.value,
        totalScore: total.value,
        average: average.value,
        grade: grade.value
    })
    showTable();
})
showTable();