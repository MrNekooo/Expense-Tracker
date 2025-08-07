import { useEffect, useState } from "react"

const Main = () => {

    // States
    const [expenses, setExpenses] = useState([])
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState();
    const [category, setCategory] = useState("");

    // useEffect for title Page
    useEffect(() => {
        document.title = "Expense Tracker"
    })

    // Get Values
    function handleDescriptionProduct(e){
        setDescription(e.target.value)
    }
    function handleAmountProduct(e){
        setAmount(e.target.value)
    }
    function handleCategoryProduct(e){
        setCategory(e.target.value)
    }

    // Add Product
    function addProduct(){
        if(description !== "" && amount !== "" && category !== ""){
            const newExpense = {
                description,
                amount: Number(amount),
                category
            }
            setExpenses(e => [...e, newExpense])

            // Reset Inputs
            setDescription("")
            setAmount("")
            setCategory("")
        }
    }

    // Delete Product
    function deleteProduct(index){
        const updatedProduct = expenses.filter((_,i) => i !== index)

        setExpenses(updatedProduct)
    }


  return (
    <div className="p-10">
        <div className="flex flex-row justify-center items-center gap-3 max-lg:flex-col">
            <>
                <label className="font-bold text-xl">Description :</label>
                <input  type="text" 
                        value={description}
                        placeholder="e.g. Tomato"
                        className="px-4 py-1 outline-none max-lg:w-xl max-sm:w-full"
                        onChange={handleDescriptionProduct} />
            </>

            <>
                <label className="font-bold text-xl">Amount :</label>
                <input  type="number"
                        value={amount}
                        placeholder="e.g. 10"
                        className="px-4 py-1 outline-none max-lg:w-xl max-sm:w-full"
                        onChange={handleAmountProduct} />
            </>

            <>
                <label className="font-bold text-xl">Category :</label>
                <select className="cursor-pointer max-lg:w-xl max-sm:w-full"
                        value={category}
                        onChange={handleCategoryProduct} >

                    <option>Select a Category</option>

                    <option value="Clothes">Clothes</option>

                    <option value="Food">Food</option>

                    <option value="Entertainment">Entertainment</option>

                    <option value="Book">Book</option>

                    <option value="Electronics">Electronics</option>
                </select>
            </>
        </div>
        <div className="flex items-center justify-center mb-20 mt-10">

            <button type="submit"
                    className="bg-sky-600 px-10 py-1 text-white font-bold rounded cursor-pointer transition-all delay-50 ease-in hover:bg-sky-800 w-2xl max-lg:w-xl max-sm:w-full"
                    onClick={addProduct} >
                Add
            </button>

        </div>

        <ul className="flex flex-wrap items-center justify-center gap-3 font-semibold">
            {/* if you wanna return the values, you have to use "()" and then write your codes */}
                                                    {/*e.g. (<li> ... </li>) */}
            {expenses.map((expense, index) => (
                <li key={index}
                    className="bg-orange-200 px-8 py-2 rounded-2xl flex flex-col items-start justify-start" >
                    <div>{expense.description}</div>
                    <div>{`$${expense.amount}`}</div>
                    <div>{`Category: ${expense.category}`}</div>
                    <button type="submit"
                            className="bg-red-500 hover:bg-red-800 text-white px-3 rounded mt-4 m-auto cursor-pointer transition-all delay-50 ease-in"
                            onClick={() => deleteProduct(index)}>
                        DELETE
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Main