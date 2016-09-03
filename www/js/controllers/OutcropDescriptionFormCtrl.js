angular.module('starter.controllers')

  .controller('OutcropDescriptionFormCtrl', function($scope) {

    $scope.data = {
      showDelete: false
    };

    $scope.edit = function(item) {
      alert('Edit Item: ' + item.id);
    };
    $scope.share = function(item) {
      alert('Share Item: ' + item.id);
    };

    $scope.moveItem = function(item, fromIndex, toIndex) {
    };

    $scope.onItemDelete = function(item) {
      $scope.items.splice($scope.items.indexOf(item), 1)
    };
    $scope.outcropOptions=[

      {id:1,name:"Vegetation",
        options: [
          {colour:'Woodland'},
          {colour:'Heathland'},
          {colour:'Woodland'},
          {colour:'Shrubland'},
          {colour:'Grassland'},
          {colour:'N/A'}
        ]
      },
      {id:2,name:"Mineralogy",
        options: [
          {colour:'Yellow'},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:3,name:"Weathering",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:4,name:"Welding/ Lithification",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:5,name:"Joints",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:6,name:"Average grainsize",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:7,name:"sorting",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:8,name:"grain fabric",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:9,name:"roundness",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:10,name:"vesicular texture",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:11,name:"Lithic Clast Types",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      },
      {id:12,name:"Colour",
        options: [
          {colour:''},
          {colour:'Red'},
          {colour:'Green'},
          {colour:'Blue'}
        ]
      }
    ];
    $scope.listOptions = [
      {colour:''},
      {colour:'Red'},
      {colour:'Green'},
      {colour:'Blue'}
    ];
    $scope.selectedOption = $scope.listOptions[0];
  });


