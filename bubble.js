// Function for Bubble Sort
function Bubble(){
    delay=0;

    for(var i=0; i<array_size-1; i++){
        for(var j=0; j<array_size-1-i; j++){
            bar_update(bars[j], bar_sizes[j], "#ffcb69");
            if(bar_sizes[j]>bar_sizes[j+1])
            {
                bar_update(bars[j], bar_sizes[j], "#980000"); 
                bar_update(bars[j+1], bar_sizes[j+1], "#980000");

                var temp = bar_sizes[j];
                bar_sizes[j] = bar_sizes[j+1];
                bar_sizes[j+1] = temp;
                bar_update(bars[j], bar_sizes[j], "#980000");
                bar_update(bars[j+1], bar_sizes[j+1], "#980000");   
            }
            bar_update(bars[j], bar_sizes[j], "#344966");
        }
        bar_update(bars[j], bar_sizes[j], "#208B3A");
    }
    bar_update(bars[0], bar_sizes[0], "#208B3A");

    enable_buttons();
}