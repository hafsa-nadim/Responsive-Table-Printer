        function generateTable() {
            const rows = document.getElementById('rows').value;
            const cols = document.getElementById('cols').value;

            if (rows <= 0 || cols <= 0) {
                alert('Please enter valid numbers for rows and columns.');
                return;
            }

           let tableHTML = '<table>';
            tableHTML += '<tr>';

            for (let c = 1; c <= cols; c++) {
                tableHTML += '<th>Col ' + c + '</th>';
            }
            tableHTML += '</tr>';

            for (let r = 1; r <= rows; r++) {
                tableHTML += '<tr>';
                for (let c = 1; c <= cols; c++) {
                    tableHTML += '<td>Row ' + r + ' Col ' + c + '</td>';
                }
                tableHTML += '</tr>';
            }

            tableHTML += '</table>';

            document.getElementById('table-container').innerHTML = tableHTML;
        }
