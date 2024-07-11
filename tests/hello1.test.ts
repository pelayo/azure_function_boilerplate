import { describe, expect, test, beforeEach } from "@jest/globals";
import { HttpExample2 } from "../src/functions/HttpExample";
import * as util from 'util'
import { HttpRequest, InvocationContext, InvocationContextInit } from "@azure/functions";


describe('HttpExample2', () => {
	// Local development request object
	const req = new HttpRequest({
		url: 'http://original-azure-function-url',
		method: 'GET',
		query: {},
		headers: { 
			connection: 'Keep-Alive',
			accept: 'application/json',
			host: 'original-azure-function-url',
			origin: 'https://functions.azure.com',
		},
		body: {},
	})

	const debugContext: InvocationContextInit = {
		invocationId: 'ID',
		logHandler: console.log
	}

	const context = new InvocationContext(debugContext)

	beforeEach(() => {

	})

	test("main http example", async () => {
		// Local development context
		const result = await HttpExample2(req, context)
		expect(result.body).toEqual("Hello2, world!")
		console.log(result)
	})
})
