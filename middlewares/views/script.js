
async function postJsonData() {
  let result = await fetch('/users/signup',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify({name:'amit',email:'yqk5M@example.com',password:'12345'})
  });
  let data = await result.json();
  console.log(data);
}