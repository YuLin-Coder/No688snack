

		var integralModule = angular.module("integralApp",[]);
			integralModule.controller("integralCtrl",function($scope){
				createTable();
			});
		var datatable=null;
		function createTable(){
			if(datatable!=null){
				datatable.destroy();
			}
				datatable=$('#table_id_example').DataTable({
					bLengthChange: false,
					searching: false,
				    ordering:  false,
				    language: {
				    	url: '/snack'+'/js/china.json'
				    },
				    "aLengthMenu":[10],
				    serverSide: true,
				    ajax:{
				    url:"/snack"+"/user/userIntegralLimit",
				    dataSrc:"data",
				    type:"post"
				    },
				    columns:[
				    	{ data:'iNumber'},
				    	{ data:'iTime'},
				    	{ data:'iDese'}
				    ]
				});
		}
		
