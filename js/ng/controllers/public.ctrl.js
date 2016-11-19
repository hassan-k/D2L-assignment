
(function () {
		apppublic.controller("homeController", ['$scope', '$http', homeController]);  
		function homeController ($scope, $http) {
		    var enumType =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                
		$scope.counter = 0 ;
		//var ctrl = this;
		$scope.templates = [];
		$scope.answers = [];
		
		$scope.addTemplate = function(templatename){
			var jsonA = new Object();
			jsonA.enumType =enumType[$scope.counter];
			jsonA.text ='test';
			
			$scope.answers.push(jsonA);
			$scope.counter += 1 ;
			//$scope.answers = JSON.parse(JSON.stringify(jsonA));

			$scope.templates.push(templatename);
		   console.log(enumType[$scope.counter]);
		};
		
		$scope.changeIndex = function(addText,ctrl){
            if($scope.model.enumeration==1)
                enumType=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'];
			console.log($scope.model.enumeration);
		}
		
		$scope.removeTemplate = function(templatename){
			$scope.templates.pop();
			$scope.answers.pop();
		}
	};
})();