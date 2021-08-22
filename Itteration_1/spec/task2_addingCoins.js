/* globals describe beforeEach expect it Controller */

describe('Task 3 Adding Coins:', () => {
    describe('Coin', () => {
        let theCoin
        beforeEach(() => {
            theCoin = new Coin('cupro-nickel', 23.62, 5.66, 10)
        })

        describe('should have .alloy property', () => {
            it('should have a .alloy property', () => {
                expect('alloy' in theCoin).to.be.true
            })
            it('should be cupro-nickel', () => {
                expect(theCoin.alloy).to.equal('cupro-nickel')
            })
        })

        describe('should have .diameter property', () => {
            it('should have a .diameter property', () => {
                expect('diameter' in theCoin).to.be.true
            })
            it('should be 23.62', () => {
                expect(theCoin.diameter).to.equal(23.62)
            })
        })
        describe('should have .weight property', () => {
            it('should have a .weight property', () => {
                expect('weight' in theCoin).to.be.true
            })
            it('should be 5.66', () => {
                expect(theCoin.weight).to.equal(5.66)
            })
        })
        describe('should have .value property', () => {
            it('should have a .value property', () => {
                expect('value' in theCoin).to.be.true
            })

            it('should be 10', () => {
                expect(theCoin.value).to.equal(10)
            })
        })

    })



})

describe('vending machine changes', () => {
    describe('Creating a VendingMachine', () => {
        let theVendingMachine
        beforeEach(() => {
            theVendingMachine = Controller.setup()
        })


    })

})

