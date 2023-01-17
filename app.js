function dataShowing() {
  // console.log(usersData)
  const getJsonHttpRequest = new XMLHttpRequest();
  getJsonHttpRequest.onreadystatechange = (data) => {
    if (data.target.readyState == 4 && data.target.status === 200) {
      const jsonData = JSON.parse(data.target.responseText);
      const myTable = document.querySelector("#data-table");
      jsonData.forEach((row) => {
        myTable.insertAdjacentHTML(
          "beforeend",
          `
                            <tr>
                                <td>${row["id"]}</td>    
                                <td>${row["name"]}</td>    
                                <td>${row["lastName"]}</td>    
                                <td>${row["age"]}</td>    
                                <td>${row["callNumber"]}</td>   
                                <td>${row["workshop"]}</td>   
    
                            </tr>
                        `
        );
      });
    }
  };
  getJsonHttpRequest.open("GET", "./users-data.json");
  getJsonHttpRequest.send();
}
