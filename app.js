let table = document.getElementById('table')
let rowEl = document.getElementById('input-row')
let columnEl = document.getElementById('input-column')

function isValid() {
    let row = rowEl.value
    let column = columnEl.value

    if(row.length || column.length == 0){
        alert('Number of rows/columns cannot be empty')
        return false
    }

    if( parseInt(row) || parseInt(column) > 9) {
        alert('Number of rows/columns cannot be greater than 9')
        return false
    }

    if(parseInt(row) || parseInt(column) <= 0) {
        alert('Number of rows/columns cannot be less than 1')
        return false
    }
    return true
}

function createTable(){
    let row = rowEl.value
    let column = columnEl.value

    if(isValid(row))
    {
      for(let rowIndex = 0; rowIndex < row; rowIndex++)
      {
          let tr = document.createElement('tr')

          for(let colIndex = 0; colIndex < column; colIndex++){
              let td = document.createElement('td')
              tr.appendChild(td)
          }

          table.appendChild(tr)
          document.getElementById('input-row').value = ""
          document.getElementById('input-column').value = ""
      }
    }
}

//Provisional function
function resetTable(){
    window.location.reload()
}