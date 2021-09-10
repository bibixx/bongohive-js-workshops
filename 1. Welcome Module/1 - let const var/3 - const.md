## Constant values with `const`

Value of the variable declared with `const` cannot be changed, which means it needs to be set at the time of it's declaration

``` js
const age = 32;
age = 42;
// TypeError: Assignment to constant variable.
```

> We can tho modify the properties of the object declared with const
>``` js
>const user = {
>    name: "Bill",
>    age: 28
>}
>
>user.age = 18
>// user: { name: "Bill", age: 18 }
>```
> it works because const prevents us from changing the **value** and in case of the object the value is a reference to that object, when we change the object the reference doesn't change so everything is fine
