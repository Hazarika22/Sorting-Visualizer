//Function for heap sort
function Heap()
{
    delay =0;
    HeapSort(array_size);
    enable_buttons();
}
function HeapiFy(index, num)
{
    bar_update(bars[index], bar_sizes[index], "ffcb69");//yellow
    var largest = index;
    var l = 2*index+1;
    var r = 2*index+2;
    if(l<num && bar_sizes[l]>bar_sizes[largest])
        largest = l;
    if(r<num && bar_sizes[r]>bar_sizes[largest])
        largest  =r;
    if(largest!=index){
        var temp = bar_sizes[index];
        bar_sizes[index] = bar_sizes[largest];
        bar_sizes[largest] = temp;
        bar_update(bars[index], bar_sizes[index], "#980000"); // #red
        bar_update(bars[largest], bar_sizes[largest], "#980000"); // #red
        HeapiFy(largest, num);
    }
}

function HeapSort(num)
{
    for(var i = Math.floor(num/2)-1; i>=0; i--){
        HeapiFy(i, num);
    }
    for(var i = num-1; i>0; i--){
        var temp = bar_sizes[0];
        bar_sizes[0] = bar_sizes[i];
        bar_sizes[i] = temp;
        bar_update(bars[0], bar_sizes[0], "#980000");// red
        bar_update(bars[i], bar_sizes[i], "#208B3A");//green
        HeapiFy(0, i);
    }
    bar_update(bars[i], bar_sizes[i], "#208B3A");//green     
}