function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        return cb(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  
  const data = getData("https://jsonplaceholder.typicode.com/users", function(data) {
      data.forEach((data) => {
        document.getElementById('main_data').innerHTML+=`<tr>
        <th>${data.id}</th>
        <th>${data.name}</th>
        <th>${data.username}</th>
        <th>${data.email}</th>
        <th>${data.address.street},${data.address.suite},${data.address.city}</th>
        <th>${data.company.name}</th>
        </tr>`;      
      });
    });