//Function for selection sort
function Selection_sort()
{
    delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        bar_update(bars[i],bar_sizes[i],"#980000");//red

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            bar_update(bars[j],bar_sizes[j],"#ffcb69");//Color yellow

            if(bar_sizes[j]<bar_sizes[index_min])
            {
                if(index_min!=i)
                {
                    bar_update(bars[index_min],bar_sizes[index_min],"#344966");//blue
                }
                index_min=j;
                bar_update(bars[index_min],bar_sizes[index_min],"#980000");//red
            }
            else
            {
                bar_update(bars[j],bar_sizes[j],"#344966");//blue
            }
        }
        
        if(index_min!=i)
        {
            
            var temp=bar_sizes[index_min];
            bar_sizes[index_min]=bar_sizes[i];
            bar_sizes[i]=temp;

            bar_update(bars[index_min],bar_sizes[index_min],"#980000");//red
            bar_update(bars[i],bar_sizes[i],"#980000");//red
            bar_update(bars[index_min],bar_sizes[index_min],"#344966");//blue
        }
        bar_update(bars[i],bar_sizes[i],"#208B3A");//green
    }
    bar_update(bars[i],bar_sizes[i],"#208B3A");//green

    enable_buttons();
}