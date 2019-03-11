1. Create a stateless component called IsUserLoggedIn that accepts a prop type of array of objects. The object should have a key name and value which should be the user's name. The second key should be isUserLoggedIn and the value should be a boolean. The array should have at least 3 elements inside.
   Users = [
   {
   name:'Matina',
   isUserLoggedIn:false
   },
   {
   name:'Joe',
   isUserLoggedIn:true
   },
   {
   name:'Tom',
   isUserLoggedIn:true
   },
   ]
   example <IsUserLoggedIn Users=[Users]>

2. The stateless component should iterate over each value creating an un orderled listed displaying a message stating the user's name and if the user is logged in or not.
