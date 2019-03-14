var Excel = require('exceljs');

function makeExcel(result) {
	var workbook = new Excel.Workbook();//创建一个文件
	workbook.creator = 'BertaData-API';
	workbook.lastModifiedBy = 'BertaData-API';
	workbook.created = new Date();
	workbook.modified = new Date();
	
	var sheet = workbook.addWorksheet('预警名单');//创建一个工作组
//创建列
	sheet.columns = [
		{header: '用户名', key: 'userName', width: 25},
		{header: '方法名', key: 'methodName', width: 25},
		{header: '到期时间', key: 'expiredDate', width: 25},
	];
	sheet.addRows(result);//创建行
	var filename = 'student.xlsx';
	workbook.xlsx.writeFile(filename).then(function () {
		console.log('success');
	}, function (err) {
		console.log(err);
	});
}
module.exports = {
	makeExcel
}
