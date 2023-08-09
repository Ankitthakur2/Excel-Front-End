$(document).ready(function () {
    for(let i = 1; i <101; i++) {
        let ans = "";
        let n = i;

        while (n > 0) {
            let rem = n % 26;

            if (rem === 0) {
                ans = "Z" + ans;
                n = Math.floor(n / 26) - 1;
            } else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }

        const columnNameContainer = $('.column-name-container');

        const newColumn = $('<div></div>')
            .text(ans)
            .addClass('column-name')
            .addClass(ans)
            .attr('id', i);

        columnNameContainer.append(newColumn);


        
        const rowNameContainer = $('.row-name-container');

        const newRow = $('<div></div>')
            .text(i)
            .addClass('row-name')
            .addClass(i.toString())
            .attr('id', i);

        rowNameContainer.append(newRow);


    }



   for(let i=1;i<=100;i++)
   {
    let row = $(`<div class="cell-row"></div>`);

    for(let j=1;j<=100;j++)
    {
        
        let column = $(`<div class="input-cell" contenteditable="true" id="row-{i}col-{j}"> </div>`);
        row.append(column);
    }
    $(".input-cell-container").append(row);
   }


   $(".align-icon").click(function(){

     $(".align-icon.selected").removeClass("selected");

      $(this).addClass("selected");

     })


     $(".style-icon").click(function(){
        $(this).toggleClass("selected");
     })


     $(".input-cell").click(function(){
        $(".input-cell.selected").removeClass("selected");

        $(this).addClass("selected");
     })

     $(".input-cell-container").scroll(function(){
        $(".column-name-container").scrollLeft(this.scrollLeft);
     })

     $(".input-cell-container").scroll(function(){
        $(".row-name-container").scrollTop(this.scrollTop);
     })

});
