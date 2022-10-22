
function searchFun(){

    let filter = document.getElementById("searchInput").value.toUpperCase();
    let myTable = document.getElementById("tableContacts");
    let tableRow = myTable.getElementsByTagName('tr');
    
    for(var i=0; i<tableRow.length; i++){
        let tableColumn  = tableRow[i].getElementsByTagName("td")[0];
        if (tableColumn){
            let textValue = tableColumn.tableContent || tableColumn.innerHTML;

            if(textValue.toUpperCase().indexOf(filter) > -1 ){
                tableRow[i].style.display = "";
                // tableRow[i].style.background = 'red';

            }else{
                tableRow[i].style.display = "none";
            }
        }

    }


}