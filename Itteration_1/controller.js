class Controller {
	static setup() {
		const theVendingMachine = new VendingMachine('Ara Vending Machine', 'Madras Street')

		theVendingMachine.addCoin10cent('cupro-nickel', 23.62, 5.66, 10)

		theVendingMachine.addProduct01('Dilbert', 'Brown', 500, 150)
		return theVendingMachine
	}


}