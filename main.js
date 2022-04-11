
var inp_arr_size=document.getElementById("a_size"),array_size=inp_arr_size.value;

var inp_generate=document.getElementById("a_generate");

var inp_arr_speed=document.getElementById("a_speed");


var algo_butns=document.querySelectorAll(".algos button");

var bar_sizes=[];
var bars=[];
var margin_size;
var graph=document.getElementById("array_container");
graph.style="flex-direction:row";
/*cont.style="transform: rotate(180deg)"*/
inp_generate.addEventListener("click",generate_array);
inp_arr_size.addEventListener("input",update_array_size);

function generate_array()
{
    graph.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        bar_sizes[i]=Math.floor(Math.random() * 0.5*(inp_arr_size.max - inp_arr_size.min) ) +2;
        bars[i]=document.createElement("div");
        graph.appendChild(bars[i]);
        margin_size= 0.1;
        bars[i].style=" margin:0% " + margin_size + "%; background-color: #3498db; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (bar_sizes[i]) + "%;";
        
    }
}

function update_array_size()
{
    array_size=inp_arr_size.value;
    generate_array();
}

window.onload=update_array_size();


for(var i=0;i<algo_butns.length;i++)
{
    algo_butns[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<algo_butns.length;i++)
    {
        algo_butns[i].classList=[];
        algo_butns[i].classList.add("butt_locked");

        algo_butns[i].disabled=true;
        inp_arr_size.disabled=true;
        inp_generate.disabled=true;
        inp_arr_speed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}

//Js to visualize 
var speed=1000;

inp_arr_speed.addEventListener("input",visualize_speed);

function visualize_speed()
{
    var array_speed=inp_arr_speed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var delay=0;//This is updated ov every div change so that visualization is visible.

function bar_update(graph,height,color)
{
    window.setTimeout(function(){
        graph.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algo_butns.length;i++)
        {
            algo_butns[i].classList=[];
            algo_butns[i].classList.add("butt_unselected");

            algo_butns[i].disabled=false;
            inp_arr_size.disabled=false;
            inp_generate.disabled=false;
            inp_arr_speed.disabled=false;
        }
    },delay+=delay_time);
}