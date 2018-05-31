
// // First you pick your base. You have four options:

// 1. 25cm NY Style € 8,99
// 2. 30cm NY Style € 11,49
// 3. 35cm NY Style € 13,49
// 4. 20cm NY Style € 6,45

export const pizzaBase = [
    {id: 1, cm: 25, price: 8.99},
    {id: 2, cm: 30, price: 11.49},
    {id: 3, cm: 35, price: 13.49},
    {id: 4, cm: 20, price: 6.45}
]

// After that you pick your sauce options:

// 1. White sauce
// 2. Red sauce
// 3. Double red sauce € 1,00
// 4. Mix it up € 1,50 

export const pizzaSauce = [
    {id: 1, name: 'White sauce', price: 0.00},
    {id: 2, name: 'Red sauce', price: 0.00},
    {id: 3, name: 'Double red sauce', price: 1.00},
    {id: 4, name: 'Mix it up', price: 1.50}
]

// After that you pick one or more toppings:

// 1. Pineapple
// 2. Corn
// 3. Olives (green)
// 4. Red union
// 5. Spinach
// 6. Cherry tomatoes
// 7. Chicken

export const pizzaToppings = [
    {id: 1, name: 'Pineapple', price: 0.50},
    {id: 2, name: 'Corn', price: 0.50},
    {id: 3, name: 'Olives (green)', price: 0.50},
    {id: 4, name: 'Red union', price: 0.50},
    {id: 5, name: 'Spinach', price: 0.50},
    {id: 6, name: 'Cherry tomatoes', price: 0.50},
    {id: 7, name: 'Chicken', price: 0.50}
]

// _Rules: max. 3 toppings, toppings cost € 0,50 apiece_