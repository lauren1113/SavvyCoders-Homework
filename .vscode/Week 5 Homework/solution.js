// FROM USERS
// create and print a list of phone numbers
const phoneNumbers = users.map(user => user.phone);
console.log(phoneNumbers);
// create and print a list of website and email pairs (pair them in a string, array, or object)
const websiteEmailPairs = users.map(user => `${user.website}, ${user.email}`);
console.log(websiteEmailPairs);
// FROM TASKS/TODOS
// create a list of user 9's to-dos
const user9Tasks = tasks.filter(task => task.userId === 9);
console.log(user9Tasks);
// then find the number of user 9's incomplete tasks
// quickest way: 
user9Tasks.filter(task => task.completed ==== false).length;
// alternate way:
const user9IncompleteTasks = user9Tasks.reduce((acc, curr) => {
  if (!curr.completed) {
    return acc + 1;
  }
  return acc;
}, 0);
console.log(user9IncompleteTasks);
// FROM POSTS
// create a list of user 5's posts
const user5Posts = posts.filter(post => post.userId === 5);
console.log(user5Posts);
// then, create a list of title and body pairs
const user5TitleBodyPairs = user5Posts.map(post => {
  return {
    title: post.title,
    body: post.body
  };
});
console.log(user5TitleBodyPairs);
// BONUS CHALLENGE, FROM TASKS/TODOS
// create an object that summarizes the incomplete tasks of users 3, 7, & 8
const users378IncompleteTasksSummary = tasks.reduce((acc, curr) => {
  // if userId is 3, 7, or 8
  if (curr.userId === 3 || curr.userId === 7 || curr.userId === 8) {
    // if userId is not already a key in the accumulator object
    if (!acc[`user${curr.userId}`]) {
      // add userId as key in accumulator object and
      // initialize summary object for that userId
      acc[`user${curr.userId}`] = {
        totalTasks: 1,
        totalIncomplete: 0,
        incompleteTasks: []
      };
      // if the current task is incomplete
      if (!curr.completed) {
        // add one to the incomplete total and
        // add the title to the list of incomplete tasks
        acc[`user${curr.userId}`].totalIncomplete += 1;
        acc[`user${curr.userId}`].incompleteTasks.push(curr.title);
      }
      // return the accumulator object
      return acc;
    }
    // (if userId is 3, 7, or 8 and)
    // (if userId is already in the accumulator object)
    // add one to task total
    acc[`user${curr.userId}`].totalTasks += 1;
    // if the current task is incomplete
    if (!curr.completed) {
      // add one to the incomplete total and
      // add the title to the list of incomplete tasks
      acc[`user${curr.userId}`].totalIncomplete += 1;
      acc[`user${curr.userId}`].incompleteTasks.push(curr.title);
    }
    //return the accumulator object
    return acc;
  }
  // if the userId is NOT 3, 7, or 8
  // just return the accumulator object
  return acc;
}, {});
console.log(users378IncompleteTasksSummary);