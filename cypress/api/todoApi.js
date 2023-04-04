

class TodoApi {


static add(token) {
        return  cy.request({
            url: "/api/v1/tasks",
            method: "post",
            auth: {
                bearer: token,
            },
            body: {
                isCompleted: true,
                item: "learn Automation"
            }

    });
    }
}
export default TodoApi;