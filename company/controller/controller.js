(function a() {
	angular
		.module("companyApp", ["Factories", "Services", "dx"])
		.controller("compnayController", function($scope, fetchData) {
			var data = fetchData("").then(function(response) {
				$scope.dataGridOptions = {
					dataSource: response.data,
					editing: {
						mode: "popup",
						allowUpdating: true,
						allowDeleting: true,
						icon: 'edit',
						popup: {
							title: "Employee Info",
							showTitle: true,
							width: 700,
							height: 345,
							position: {
								my: "top",
								at: "top",
								of: window
							}
						}
					},
					columns: [{
						dataField: "stageName",
					}, {
						dataField: "stageTypeCode",
					}, {
						dataField: "Stage Description",
					}, {
						dataField: "auditEnabled",
						dataType: "boolean"
					}, {
						dataField: "isActive",
						dataType: "boolean"
					}, {
						dataField: "Save",
					}, {
						dataField: "Configuration",
						width:100,
						cellTemplate: function (container, options) {
							console.log(options);
                 		   $("<div>", { "class": "img-container" })
                        		.append($("<img>", { "src": options.value }))
	                        .appendTo(container);
    	            }

					}],
					onCellPrepared: function(e) {

						if (e.rowType === "data" && e.column.command === "edit") {
							var isEditing = e.row.isEditing,
								$links = e.cellElement.find(".dx-link");

							$links.text("");

							if (isEditing) {
								$links.filter(".dx-link-save").addClass("dx-icon-save");
								$links.filter(".dx-link-cancel").addClass("dx-icon-revert");
							} else {
								$links.filter(".dx-link-edit").addClass("dx-icon-edit");
								$links.filter(".dx-link-delete").addClass("dx-icon-trash");
							}
						}
					}
				};

			});


			var folderStructure = {
				"": [
					"Prod",
				],
				"Prod": [
					"Dental and Oral Health",
					"Dental and Oral Health1",
					"Dental and Oral Health2"
				],
				"Prod\\Dental and Oral Health": [
					"Dermatology",
				],
				"Prod\\Dental and Oral Health\\Dermatology": [
					"Devices",
				],
				"Prod\\Dental and Oral Health\\Dermatology\\Devices": [
					"SampleStudy1"
				],
				"Prod\\Dental and Oral Health1": [
					"Dermatology",
				],
				"Prod\\Dental and Oral Health1\\Dermatology": [
					"Devices",
				],
				"Prod\\Dental and Oral Health1\\Dermatology\\Devices": [
					"SampleStudy2"
				],
				"Prod\\Dental and Oral Health2": [
					"Dermatology",
				],
				"Prod\\Dental and Oral Health2\\Dermatology": [
					"Devices",
				],
				"Prod\\Dental and Oral Health2\\Dermatology\\Devices": [
					"Hematology"
				],
				"Prod\\Dental and Oral Health2\\Dermatology\\Devices\\Hematology": [
					"Immunology"
				],
				"Prod\\Dental and Oral Health2\\Dermatology\\Devices\\Hematology\\Immunology": [
					"SampleStudy3"
				]
			};
			$scope.treeViewOptions = {
				createChildren: function(parent) {
					var parentId = parent ? parent.itemData.id : "";
					var fileNames = folderStructure[parentId];

					return fileNames.map(function(fileName) {
						var fullName = parentId ? parentId + "\\" + fileName : fileName;
						return {
							id: fullName,
							parentId: parentId,
							text: fileName,
							hasItems: !!folderStructure[fullName]
						};
					});
				},
				dataStructure: "plain",
				rootValue: "",
				height: 500
			};

		})
})();