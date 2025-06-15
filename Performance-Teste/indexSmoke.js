
import { TestCase01 } from "./scenarios/TestCase01.js"
const SCENARIO = __ENV.VALIDACAO ? "validacao" : "rampa"

const scenarios = {
	validacao: {
		executor: "per-vu-iterations",
		vus: 1,
		iterations: 1,
		maxDuration: "30m",
	},
	rampa: {
		executor: "ramping-vus",
		startVUs: 1,
		stages: [
			{ duration: "1m", target: 10 }, 
			{ duration: "2m", target: 10 },
			{ duration: "1m", target: 0 },  
		],
	},
}

export const options = {
	scenarios: {
		[SCENARIO]: scenarios[SCENARIO],
	},

	cloud: {
		projectID: 122345,
		distribution: {
			distributionLabel: { loadZone: "amazon:br:sao paulo", percent: 100 },
		},
		// biome-ignore format: k6
		drop_metrics: ["http_req_blocked", "http_req_connecting", "http_req_receiving", "http_req_sending", "http_req_tls_handshaking", "http_req_waiting"],
		drop_tags: {
			http_req_duration: ["instance_id"],
			http_reqs: ["instance_id"],
			http_req_failed: ["instance_id"],
			checks: ["instance_id"],
		},
	},
}

export default function executorTeste() {
	TestCase01();
}

