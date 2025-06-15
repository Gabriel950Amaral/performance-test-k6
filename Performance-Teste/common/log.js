

export function CreateErrorLogFile(path) {
	const logLine = "DateTime;UserName;Filial;cpf;sku;ct;RequestUrl;RequestBody;ResponseCode;ReposeBody";
	console.log(`[LOGFILE][${path}] ${logLine}`);
}

export function CreateAccessLogFile(path) {
	const logLine = "DateTime;UserName;Filial;cpf;sku;ct;RequestUrl;ResponseCode";
	console.log(`[LOGFILE][${path}] ${logLine}`);
}

export function CreateAccessFullLogFile(path) {
	const logLine = "DateTime;UserName;Filial;cpf;sku;ct;RequestUrl;ResponseCode;ResponseBody";
	console.log(`[LOGFILE][${path}] ${logLine}`);
}

export function CreateDistributedVusLogFile(path) {
	const logLine = "DateTime;scenario;vu;iteration;module;message";
	console.log(`[LOGFILE][${path}] ${logLine}`);
}

export function CreateDistributedUterationLogFile(path) {
	const logLine = "vu;vu";
	console.log(`[LOGFILE][${path}] ${logLine}`);
}

export function CreateLinkLogFile(path) {
	const logLine = "DateTime;scenario";
	console.log(`[LOGFILE][${path}] ${logLine}`);
}

export function saveToCsv(path, textLine) {
	// Em vez de salvar em arquivo, apenas loga no console
	console.log(`[CSV][${path}] ${textLine}`);
}

export function saveRequestlog(response, username, filial, cpf, sku, ct) {
	var jsonBody = JSON.stringify(response.body);
	jsonBody = jsonBody.replace(/\n/g, '');

	// Loga as informações no console ao invés de salvar em arquivo
	console.log(`[ACCESS_LOG] ${convertDate(Date().toLocaleString())};${username};${filial};${cpf};${sku};${ct};${response.request.url};${response.status}`);
	console.log(`[FULL_LOG] ${convertDate(Date().toLocaleString())};${username};${filial};${cpf};${sku};${ct};${response.request.url};${response.status};${jsonBody}`);
	if (response.status > 300) {
		console.log(`[ERROR_LOG] ${convertDate(Date().toLocaleString())};${username};${filial};${cpf};${sku};${ct};${response.request.url};${response.request.body};${response.status};${jsonBody}`);
	}
}
	
export function convertDate(dateString) {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);
	const seconds = ('0' + date.getSeconds()).slice(-2);
	return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

export function convertDateForFile(dateString) {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);
	const seconds = ('0' + date.getSeconds()).slice(-2);
	return `${year}_${month}_${day}_${hours}_${minutes}_${seconds}`;
}


