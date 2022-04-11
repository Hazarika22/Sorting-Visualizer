//Quick Sort Function
function Quick()
{
    delay=0;

    quickSort(0,array_size-1);

    enable_buttons();
}

function quick_part(start, end)
{
    var i = start + 1;
    var piv = bar_sizes[start] ;
    bar_update(bars[start],bar_sizes[start],"#ffcb69");// #ffcb69

        for(var j =start + 1; j <= end ; j++ )
        {
           
            if (bar_sizes[ j ] < piv)
            {
                bar_update(bars[j],bar_sizes[j],"#ffcb69");// #ffcb69

                bar_update(bars[i],bar_sizes[i],"#980000");//red
                bar_update(bars[j],bar_sizes[j],"#980000");//red

                var temp=bar_sizes[i];
                bar_sizes[i]=bar_sizes[j];
                bar_sizes[j]=temp;

                bar_update(bars[i],bar_sizes[i],"#980000");//red
                bar_update(bars[j],bar_sizes[j],"#980000");//red

                bar_update(bars[i],bar_sizes[i],"#344966");//blue
                bar_update(bars[j],bar_sizes[j],"#344966");//blue

                i += 1;
            }
    }
    bar_update(bars[start],bar_sizes[start],"#980000");//red
    bar_update(bars[i-1],bar_sizes[i-1],"#980000");//red
    
    var temp=bar_sizes[start];
    bar_sizes[start]=bar_sizes[i-1];
    bar_sizes[i-1]=temp;

    bar_update(bars[start],bar_sizes[start],"#980000");//red
    bar_update(bars[i-1],bar_sizes[i-1],"#980000");//red

    for(var t=start;t<=i;t++)
    {
        bar_update(bars[t],bar_sizes[t],"#208B3A");//green
    }

    return i-1;
}

function quickSort (start, end )
{
    if( start < end )
    {
        var piv_pos = quick_part(start, end ) ;     
        quickSort (start, piv_pos -1);
        quickSort (piv_pos +1, end) ;
    }
 }