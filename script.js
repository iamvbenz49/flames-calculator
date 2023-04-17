document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Retrieve form field values
  var your_name = document.getElementById('fname').value.toUpperCase();
  var crush_name = document.getElementById('sname').value.toUpperCase();
  
  // Your JavaScript code to use the form data
  console.log('Your Name: ' + fname);
  console.log("Your Crush's Name: " + sname);

  obj1 = {}
  obj2 = {}

  function check_count(name,obj){
    for(let i =0;i<name.length;i++){
          if(name[i]==" "){
            continue;
          }
          if (obj.hasOwnProperty(name[i])) {
              obj[name[i]]+=1;
          }
          else{
              obj[name[i]]=1;
          }
      }
      return obj
  }

  let x = check_count(your_name,obj1);
  let y = check_count(crush_name,obj2);
  let count = 0;

  console.log(obj1);
  for(let i in x){
      if(y.hasOwnProperty(i)){
          count+=Math.abs(x[i]-y[i]);
      }
  }
  for(let i in x){
      if(!(y.hasOwnProperty(i))){
          count+=x[i];
      }
  }
  for(let i in y){
      if(!(x.hasOwnProperty(i))){
          count+=y[i];
      }
  }
  console.log(x,y)
  console.log(count)
  ls = ["F","L","A","M","E","S"]
  var k = 0;
  for(let i = 0;ls.length!=1;i++){
      for(let j =0;j<count;j++){
          if(k==ls.length-1){
              k = 0;
          }
          k++;
      }
      ls.splice(k,1);
  }
  console.log(ls)
  let res_text = "v";
  if(ls[0]=="F"){
      res_text = "You Guys Can Be Good Friends";
  }
  else if(ls[0]=="L"){
      res_text = "You Guys Can Be Great Lovers"
  }
  else if(ls[0]=="A"){
    res_text = "It's just a Affection"
  }
  else if(ls[0]=="M"){
    res_text = "You guys will get Married in future"
  }
  else if(ls[0]=="E"){
    res_text = "You Guys can Great Enemies"
  }
  else if(ls[0]=="S"){
    res_text = "Treat her/him like your Sister/Brother"
  }
  var form = document.getElementById('myForm');
  form.style.display = 'none';
  
  var output = document.getElementById('output');
  output.innerHTML = 'Your Name: ' + your_name + '<br>' + "Your Crush's Name: " + crush_name + '<br>' + res_text;
  output.style.display = 'block';
  form.style.display = 'none';
});

