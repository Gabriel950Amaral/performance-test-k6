import exec from "k6/execution";
import { getCsvItem } from "../common/utils.js";
import { loginPublicApi } from "../resources/frgLoginPublicApi.js";
import { getPublicApi } from "../resources/frgLoginPublicApi.js";
import { putPublicApi } from "../resources/frgLoginPublicApi.js";
import { deletePublicApi } from "../resources/frgLoginPublicApi.js";

import { userData } from "../data/userData.js"; 
export function TestCase01() {
    const iteracao = exec.scenario.iterationInTest;

    const username = userData[getCsvItem(iteracao, userData)].username;
    const password = userData[getCsvItem(iteracao, userData)].password;

   
    loginPublicApi(username, password);
	getPublicApi();
	putPublicApi();
	deletePublicApi();
}