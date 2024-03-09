import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]) // eikhane [] emty array dear karon fetch er data gula hold ekta array tai array er default value hold emty arry jemon amar counting er somoy default value 1 dei// ar eikhane state use korar karon holo amra fetch api er data take paite pari abar na o paite pari tai state/obostha take use kora hoise.// eikhane users ke update korle useState([]) array tao update hobe users er madddhome
    // console.log(users)
    // useEffect(()=>{},[])  --> useEffect hosce ekta hook/function jeta kina duita perameter ney ekta holo callback function{()=>{}---namhin function} and arekta hosce , dependancy[]
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))   // eikhane data take setUsers function tate set kore disi tahole eita state er moddhe pawa jabe. // ei callback function er karone ekon users je variable ta ase setar moddhe stock korbe . useState([]) ei jonnoi default hisebe ekta emty array disi jar karone fetch kora data jate oi array te gie bose jay. initially eita kahali ekta array but jokhon amara setUsers(data) die call kortesi thkhon sob gulu data users e jacce.// ultimately users silo ekta emty arry setUser(data) call back function er maddohme seita ke data er value gula die update kore ditesi.
    },[])
    return (
        <div>
            <h3>Users:{users.length} </h3> 
        </div>
    )
}

/**
 * 1.declare a state to hold the data 
 * 2. useEffect with (call back and dependency array)
 * 3.use fetch to load data.
 */