//const animalArray = ['dog', 'cat', 'pig'];

//animalArray.push('cow');

const personObj = {
name: 'Tracee',
age: 46
};

personObj.age = 100;
personObj.occupation = 'Developer';

const printProfileData = profileDataArr => { 
  for (let i = 0; i <profileDataArr.length; i +=1) {
  console.log(profileDataArr[i]);
  }
}

console.log ('===================');

//Code below is the same as the code above
profileDataArr.forEach((profileItem) => {
  condole.log(profileItem)
});
