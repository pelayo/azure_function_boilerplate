import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function HttpExample(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

export async function HttpExample2(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello2, ${name}!` };
};

app.http('HttpExample', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HttpExample
});

app.http('HttpExample2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: HttpExample2
});
