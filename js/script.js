// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let theForm = document.getElementById('addForm')
let theTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let numberEmployees = 0
displayEmployeeCount()

// ADD EMPLOYEE
theForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeData = []
    employeeData[0] = document.getElementById('id').value
    employeeData[1] = document.getElementById('name').value
    employeeData[2] = document.getElementById('extension').value
    employeeData[3] = document.getElementById('email').value
    employeeData[4] = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = theTable.insertRow()
    let newCell, newTextNode, deleteButton

    for (let i = 0; i < 5; i++) {
        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        newCell = newRow.insertCell()

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        newTextNode = document.createTextNode(employeeData[i])
        newCell.appendChild(newTextNode)
    }

    // CREATE THE DELETE BUTTON
    deleteButton = document.createElement('button')
    deleteButton.className = 'btn btn-danger btn-sm float-end delete'
    newTextNode = document.createTextNode('X')
    deleteButton.appendChild(newTextNode)
    newCell = newRow.insertCell()
    newCell.appendChild(deleteButton)

    // RESET THE FORM
    theForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    numberEmployees++
    displayEmployeeCount()
})

// DELETE EMPLOYEE
theTable.addEventListener('click', (e) => {
    let rowCells
    let employeeName

    // VERIFY DELETE BUTTON WAS CLICKED    
    if (e.target.classList.contains('btn')) {

        // GET USER CONFIRMATION TO DELETE ROW
        rowCells = e.target.parentElement.parentElement.childNodes
        employeeName = rowCells[1].innerHTML
        if (confirm(`Are you sure you want to delete ${employeeName} from the table?`)) {
            // REMOVE THE SELECTED ROW
            theTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            
            // DECREASE THE NUMBER OF EMPLOYEES IN THE TABLE
            numberEmployees--;
            displayEmployeeCount()
        }
    }
})

// DISPLAY EMPLOYEE COUNT
function displayEmployeeCount() {
    let theOutput = document.getElementById('empCount')
    theOutput.innerHTML = '(' + numberEmployees + ')'
}