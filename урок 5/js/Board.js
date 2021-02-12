console.log(figures);
var block = document.querySelector("div");
var table = document.createElement("table");
	var tr, td, i, h = 0, g = 0;
	for(i = 1;i < 11;i++){
		tr = document.createElement("tr");
		table.append(tr);
		for(j=1;j < 11;j++){
			td = document.createElement("td");
            
            if (j == 1 ){
                td.innerText = h++;
            }
            if (j == 10){
                td.innerText = g++;
                td.classList.add("rotatable")
            }
            if ( (j == 1 || j == 10) &&(i == 1 || i == 10)) {
                td.classList.add("visually-hidden")
            }
            if (i == 1 || i == 10){
                if (j >= 2 && j <= 9) {
                    td.innerText = letters[j-2];
                    if ( i == 1) {
                        td.classList.add("rotatable")
                    }
                }
            }
            if ((j >= 2 && j <= 9) && (i >= 2 && i <= 9)) {
                if (j % 2 == 0) {
                    td.classList.add("color")
                }
                if (i % 2 ==0){
                    td.classList.toggle("color")
                }
                if (i == 2) {
                    td.innerText = figuresWhite[j - 2]
                }
                if (i == 3) {
                    td.innerText = whitePawn
                }
                if (i == 8) {
                    td.innerText = blackPawn
                }
                if (i == 9) {
                    td.innerText = figuresblack[j - 2]
                }
            }
            
			tr.append(td);
		}
        
	}
    document.getElementById("board").append(table);