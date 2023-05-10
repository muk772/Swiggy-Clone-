/*
This file is for redux tutorial

So first of all we have to install npm i @redux/toolkit

then we have to install npm i react-redux

So then we have to configure store 
which will be done by 

const store=configureStore({})------------------(I)(This configureStore will come from redux toolkit)

now since we have configured our store we have to provide this store to our app. So we will wrap our app in inside 

<Provider store={store}>
<App>
</Provider>

where store is the props and {store} is coming from expression (I)

Now since we have configured our store and given the store to our app. 

So our redux and react app are connected now...


Now is the time for slice items

now the store can contain N no of slices for eg cartSlice,userSlice,AdditionSlice,PaymentSlice etc etc

So now we have to create our slice...

So in this case we are creating a slice called cartSlice

so now what we have to do is


const cartSlice=createSlice({
    name:"cart"(name of the slice)
    initialState:{
        items:[];------(there can be number of variables in initial state )
    },
    reducers:{
        addItem:(state,action)=>{
//some operation
        },

        deleteItem:(state,action)=>{
            //some operation
        }
    }

})

thenn we have to export reducer functions and cartSLice.

so 

export const {addItem,deleteItem}=cartSLice.actions

and export of cartSLice reducers

So

export default cartSlice.reducer

after this now we need to modify expression (I)(line 11)

const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})


now everything is setup 


So how do we use our slices 

so for that 

we need to use a hook called useSelector()

for eg if we want to use cartSlice in resturant.js file so we have to do

const cartItems=useSelector(Store=>store.cart.items)----------(this hook will extract the items from store)


and we can use cartItems to display anything from cart

now how do we use reducer functions


so for that

we need to use a web hook called useDispatch(this web hook comes from react-redux library)

so we will do something like this

const dispatch=useDispatch()

function addItem(item){
    dispatch(additem(item))-----------(this addItem will be imported from the cartSLice
        where we have defined this functionality inside the recducer funtionality)
}



Things to remember is 

---Reducer are also functions 

---How the redux will work======on click of a button we will dispatch an action which will call 
a reducer (which is a function) which will update our cart

-----How to show the SLices of cart====>Using useSelector() hook we can display the slices of store 

one thing to be kept in mind while using useselector hook is do not call the whole store here 
for eg

useSelector(store)---------(III)
useSelector(store=>store.cart.items)-----------(IV)

we always have to use expression (IV) or try to use expression (IV) because if we use 
expression(III) ,since the stole will be containing many slices so even if some other slice would be updated 
whereever we would have used expression(III) will get triggered. and that will lead to too many render =s 
which is indeed not good for the optimization of the react app
*/
