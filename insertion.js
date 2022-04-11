//Function for insertion sort
function Insertion()
{
    delay=0;

    for(var i=0; i<array_size; i++){

        var key  = bar_sizes[i];

        bar_update(bars[i], bar_sizes[i], "ffcb69");//yellow
        
        var j = i-1;

        while(j>=0 && bar_sizes[j]>key)
        {

            bar_update(bars[j], bar_sizes[j], "#980000");//red
            bar_update(bars[j+1], bar_sizes[j+1], "#980000");//red

            bar_sizes[j+1] = bar_sizes[j];

            bar_update(bars[j+1], bar_sizes[j+1], "#980000");//red
            bar_update(bars[j], bar_sizes[j], "#344966");//blue

            if(j==i-1){
                bar_update(bars[j+1], bar_sizes[j+1], "ffcb69");//yellow
            }

            else{
                bar_update(bars[j+1], bar_sizes[j+1], "#344966");//blue
            }

            j-=1;
        }

        bar_sizes[j+1] = key;

       for(var t = 0; t<i; t++){
           bar_update(bars[t], bar_sizes[t], "#208B3A");//green
       }

    }

    bar_update(bars[i-1], bar_sizes[i-1], "#208B3A");//green
    
    enable_buttons();
}