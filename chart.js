
//declare vars
var sensor_height_pixels = document.getElementById("px").value;
var sensor_height_mm = 25
var focal_length = 32
var object_height_meters = 1 / 3
const height_on_sensor_range = [];
var o_hs = sensor_height_mm * 5 / 512
const distance_to_object = [];
const real_object_height = [];
const object_sizes = [];
var obj_height_on_sensor = focal_length * (object_height_meters) / document.getElementById("distance").value
//x values
const labels =
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const labels2 = [500,400,300,200,100,50,25,0];
const labels3 = [1,2,3,4,5,6,7,8,9,10];

for(let i = sensor_height_pixels; i >= 0; i--){

   // labels3[sensor_height_pixels-i] = i;
}



makeGraph1();
//makeGraph2();
makeGraph3();

//update values from form
function getVals() {
    sensor_height_pixels = document.getElementById("px").value;
    focal_length = document.getElementById("fl").value;
    object_height_meters = document.getElementById("physical").value;
    obj_height_on_sensor = focal_length * (object_height_meters) / document.getElementById("distance").value
}

function makeGraph1() {
    //Pixel Size vs distance
    //set physical size

    for (let i = 0; i < 200; i++) {
        height_on_sensor_range[i] = (focal_length * i) / sensor_height_pixels
    }

    for (let i = 0; i < height_on_sensor_range.length; i++) {
        distance_to_object[i] = [object_height_meters * focal_length / i] * 16
    }

}


function makeGraph2() {
     //Physical Size vs distance
    //set pixel sizeadsfasdf

   
}

function makeGraph3() {
    //physical size vs pixel size
   
    // rel_object_size[0] = object_height_meters;
   // console.log(object_height_meters)


   var obj_height_mm_arr = []
   for(var i = 0 ; i < 10; i++){
    obj_height_mm_arr[i] = i/9.1;

   }

    for (let i = 0; i < obj_height_mm_arr.length; i++) {


        object_sizes[i] = (obj_height_on_sensor * sensor_height_pixels ) / sensor_height_mm 
      
    //focal_length * (object_height_meters) / document.getElementById("distance").value
        //(object_height_meters * sensor_height_mm ) / sensor_height_mm;
        console.log(object_sizes[i]);
    }
}



const data = {
    labels: labels,
    datasets: [{
        label: 'Distance (m)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 0)',
        data: distance_to_object,
    }]
};

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Physical size (m)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 115)',
        data: real_object_height,
    }]
};

const data3 = {
    labels: object_sizes,
    datasets: [{
        label: 'Relative size at distance',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 209, 115)',
        data: labels3
    }]
};


const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Distance in Meters'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Pixels Wide'
                }
            }
        },
        plugins: {
            title:{
                display: true,
                text: 'Pixel Size vs Distance',
            }
        }
    },
    responsive: true
};

const config2 = {
    type: 'line',
    data: data2,
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Physical Size (m)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Distance'
                }
            }
        },
        plugins: {
            title:{
                display: true,
                text: 'Physical Size vs Distance',
            }
        }
    },
    responsive: true
};

const config3 = {
    type: 'scatter',
    data: data3,
    options: {
        spanGaps: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Pixel Size'
                    
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Physical Size (m)'
                }
            }
        }
    },
    responsive: true
};

const chart1 = new Chart(
    document.getElementById('chart1'),
    config
);





const chart3 = new Chart(
    document.getElementById('chart3'),
    config3
);


function changeData(data) {
    getVals();
    makeGraph1();
    makeGraph3();
    chart1.update();
   // setPhysical.update();
    chart3.update();
    console.log("Charts refreshed")
}


$("input").on("change keyup paste", function(){
    changeData();

})