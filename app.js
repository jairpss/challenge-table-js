function createTable(){
    let table = document.getElementById('table')
    let row = document.getElementById('input-row').value
    let column = document.getElementById('input-column').value

     for(let rowIndex = 0; rowIndex < row; rowIndex++){
        let tr = document.createElement('tr')

        for(let colIndex = 0; colIndex < column; colIndex++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }

        table.appendChild(tr)

        document.getElementById('input-row').value = " "
        document.getElementById('input-column').value = " "

    //  if(row > 9) {
    //      alert('Number of rows cannot be higher than 9')
    //     //  document.getElementById('input-row').value = " "
    //     //  console.log("warning")
    //  }
    //  if(column > 9) {
    //      alert('Number of columns cannot be higher than 9')
    //      document.getElementById('input-column').value = " "
    //      console.log("warning")
    //  }
    }
}
// if(row > 9) {
//     alert('Number of rows cannot be higher than 9')
// }
// if(column > 9) {
//     alert('Number of columns cannot be higher than 9')
// }
    


