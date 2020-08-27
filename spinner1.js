
/*

setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);
  
  */
 let z = 200;

 for (let i = 0; i < 100; i++) {
   setTimeout(() => {
     process.stdout.write('\r |   ');
   }, z + (i * 1000));
   setTimeout(() => {
     process.stdout.write('\r /   ');
   }, 2 * z + (i * 1000));
   setTimeout(() => {
     process.stdout.write('\r -   ');
   }, 3 * z + (i * 1000));
   setTimeout(() => {
     process.stdout.write('\r \\   ');
   }, 4 * z + (i * 1000));
   setTimeout(() => {
     process.stdout.write('\r |   ');
   }, 5 * z + (i * 1000));
 }