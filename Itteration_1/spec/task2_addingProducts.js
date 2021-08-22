/* globals describe beforeEach expect it Controller */

describe('Task 3 Adding Products:', () => {
    describe('Product', () => {
        let theProduct
        beforeEach(() => {
            theProduct = new Product('Dilbert', 'Brown', 500, 150)
        })

        describe('should have .name property', () => {
            it('should have a .name property', () => {
                expect('name' in theProduct).to.be.true
            })
            it('should be specified', () => {
                expect(theProduct.name).to.equal('Dilbert')
            })
        })

        describe('should have .colour property', () => {
            it('should have a .colour property', () => {
                expect('colour' in theProduct).to.be.true
            })
            it('should be Brown', () => {
                expect(theProduct.colour).to.equal('Brown')
            })
        })
        describe('should have .weight property', () => {
            it('should have a .weight property', () => {
                expect('weight' in theProduct).to.be.true
            })
            it('should be 500', () => {
                expect(theProduct.weight).to.equal(500)
            })
        })
        describe('should have .price property', () => {
            it('should have a .price property', () => {
                expect('price' in theProduct).to.be.true
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

describe('Testing the coin Object from the setup method of Controller', () => {
    describe('Creating a VendingMachine', () => {
        let theVendingMachine
        beforeEach(() => {
            theVendingMachine = Controller.setup()
        })

    })

})
