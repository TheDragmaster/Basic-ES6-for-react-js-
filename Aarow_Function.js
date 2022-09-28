//const square = function(number) {
    //return number * number;    normal function
//}


const square = (number) => number * number; //aarow function
console.log(square(5));

    const jobs = [
        { id: 1, isActive: true},
        { id: 2, isActive: true},
        { id: 3, isActive: false},
    ];

// const activeJobs = jobs.filter(function(job) { return job.isActive; }); normal function
const activeJobs = jobs.filter(job => job.isActive); //aarow function
console.log(activeJobs)

