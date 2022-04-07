(function ($) {
  $(function () {
    $('#area-btu-form').validate({
      errorClass: 'errors',
      rules: {
        btu_length: {
          required: true,
          number: true
        },
        btu_width: {
          required: true,
          number: true
        }
      },
      messages: {
        btu_length: {
          number: "Input should be numberic."
        },
        btu_width: {
          number: "Input should be numberic."
        }
      },
      highlight: function (element) {
        $(element).parent().addClass('error');
      },
      unhighlight: function (element) {
        $(element).parent().removeClass('error')
      },
      submitHandler: function (form) {
        getAreaBtu();
      }
    });
    // $('#wall-btu-form').validate({
    //   errorClass: 'errors',
    //   rules: {
    //     wall_length: {
    //       required: true,
    //       number: true
    //     },
    //     wall_width: {
    //       required: true,
    //       number: true
    //     }
    //   },
    //   messages: {
    //     wall_length: {
    //       number: "Input should be numberic."
    //     },
    //     wall_width: {
    //       number: "Input should be numberic."
    //     }
    //   },
    //   highlight: function (element) {
    //     $(element).parent().addClass('error');
    //   },
    //   unhighlight: function (element) {
    //     $(element).parent().removeClass('error')
    //   },
    //   submitHandler: function (form) {
    //     getWallBtu();
    //   }
    // });
    $('#window-btu-form').validate({
      errorClass: 'errors',
      rules: {
        west_facing: {
          required: true,
          number: true
        },
        other_facing: {
          required: true,
          number: true
        },
      },
      messages: {
        west_facing: {
          number: "Input should be numberic."
        },
        other_facing: {
          number: "Input should be numberic."
        }
      },
      highlight: function (element) {
        $(element).parent().addClass('error');
      },
      unhighlight: function (element) {
        $(element).parent().removeClass('error')
      },
      submitHandler: function (form) {
        getWindowBtu()
      }
    });

    $('#occupants-btu-form').validate({
      errorClass: 'errors',
      rules: {
        num_people: {
          required: true,
          number: true
        }
      },
      messages: {
        num_people: {
          number: "Input should be numberic."
        }
      },
      highlight: function (element) {
        $(element).parent().addClass('error');
      },
      unhighlight: function (element) {
        $(element).parent().removeClass('error')
      },
      submitHandler: function (form) {
        getOccupantBtu()
      }
    });


    $('#machinery-watt').validate({
      errorClass: 'errors',
      rules: {
        'machinery[]': {
          number: true
        }
      },
      messages: {
        'machinery[]': {
          number: "Input should be numberic"
        }
      },
      highlight: function (element) {
        $(element).parent().addClass('error');
      },
      unhighlight: function (element) {
        $(element).parent().removeClass('error')
      },
      submitHandler: function (form) {
        getMachineryWatt()
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

//global variable
var totalAreaBtu, totalWallBtu, totalWindowBtu, totalOccupantBtu, totalEquipmentBtu, totalLightingBtu, totalHeatLoadBtu, totalCapacity;

var _areaBTU = 49;
var _wallBTU = 218;
var _westWindowBTU = 141;
var _otherWindowBTU = 55;
var _occupantBTU = 1550;
var _equipmentWatts = 3.4;
var _lightingWatts = 3.4;
var _fanskw = 0.1;
var _tvkw = 0.2;
var _computerskw = 0.15;
var _refrigeratorkw = 0.5;
var _lightingkw = 0.02;
var _capacityBTU =12000;


function getAreaBtu(e) {
  var btuLength = document.querySelector('#btu-length').value;
  var btuWidth = document.querySelector('#btu-width').value;
  totalAreaBtu = parseFloat(btuLength) * parseFloat(btuWidth) * parseFloat(_areaBTU)
  document.querySelectorAll('.calc--form')[0].classList.remove('visible');
  document.querySelectorAll('.calc--form')[1].classList.add('visible');
  document.querySelectorAll('.btn-floating')[1].classList.remove('disabled');
  return false;
}

function getWallBtu(){
  var wallLength = document.querySelector('#wall-length').value;
  var wallWidth = document.querySelector('#wall-width').value;
  totalWallBtu = (parseFloat(wallLength)  + parseFloat(wallWidth)) * parseFloat(_wallBTU)
  document.querySelectorAll('.calc--form')[1].classList.remove('visible');
  document.querySelectorAll('.calc--form')[2].classList.add('visible');
  document.querySelectorAll('.btn-floating')[2].classList.remove('disabled');
  return false;
}

function getWindowBtu(e) {
  var westFacing = document.querySelector('#west-facing').value;
  var otherFacing = document.querySelector('#other-facing').value;
  totalWindowBtu = parseFloat(westFacing * _westWindowBTU) + parseFloat(otherFacing * _otherWindowBTU)
  document.querySelectorAll('.calc--form')[1].classList.remove('visible')
  document.querySelectorAll('.calc--form')[2].classList.add('visible')
  document.querySelectorAll('.btn-floating')[2].classList.remove('disabled')
  return false;
}

function getOccupantBtu(e) {
  var peopleNumber = document.querySelector('#num-people').value;
  totalOccupantBtu = parseFloat(peopleNumber * _occupantBTU)
  document.querySelectorAll('.calc--form')[2].classList.remove('visible')
  document.querySelectorAll('.calc--form')[3].classList.add('visible')
  document.querySelectorAll('.btn-floating')[3].classList.remove('disabled')
  return false;
}

function getMachineryWatt(e) {
    //kw
  var fans = document.querySelector('#fans').value;
  if(fans == ""){
    fans =0;
  }
  var tv = document.querySelector('#tv').value;
  if(tv == ""){
    tv =0;
  }
  var computers = document.querySelector('#computers').value;
  if(computers == ""){
    computers =0;
  }
  var refrigerator = document.querySelector('#refrigerator').value;
  if(refrigerator == ""){
    refrigerator =0;
  }

  var lighting = document.querySelector('#lighting').value;
  if(lighting == ""){
    lighting =0;
  }

  var totalAppliancesWatt = parseFloat(_fanskw * fans) +  parseFloat(_tvkw * tv) +  parseFloat(_computerskw * computers)+  parseFloat(_refrigeratorkw * refrigerator);
  var totalEquipmentBtu = parseFloat(totalAppliancesWatt * _equipmentWatts);  
  var totalLightingBtu = parseFloat(_lightingkw * lighting * _lightingWatts)
  totalHeatLoadBtu = parseFloat(totalAreaBtu) /*+ parseFloat(totalWallBtu)*/ + parseFloat(totalWindowBtu) + parseFloat(totalOccupantBtu) + parseFloat(totalEquipmentBtu) + parseFloat(totalLightingBtu);
  totalCapacity = totalHeatLoadBtu / _capacityBTU;
  var roundUpTotal = Math.round(totalCapacity * 100) / 100;
  document.querySelector('#total-cooling-capacity').textContent = roundUpTotal;
  document.querySelectorAll('.calc--form')[3].classList.remove('visible')
  document.querySelectorAll('.calc--form')[4].classList.add('visible');
  document.querySelectorAll('.btn-floating')[4].classList.remove('disabled')
  return false;
}

//back form
function backForm(prev, next) {
  document.querySelectorAll('.calc--form')[next].classList.remove('visible')
  document.querySelectorAll('.calc--form')[prev].classList.add('visible')
  document.querySelectorAll('.btn-floating')[next].classList.add('disabled')
}


