const actions = require("./actions")
// @ponicode
describe("actions.actionIncrement", () => {
    test("0", () => {
        let callFunction = () => {
            actions.actionIncrement()
        }
    
        expect(callFunction).not.toThrow()
    })
})
