import { useState } from 'react'
import './JumiaFormStyles.css'


const JumiaForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setLoading(true)
        try{
            const response = await fetch("http://localhost:4000/users/create/user", {
                method: 'POST',
                body: JSON.stringify({firstName, lastName, email, username, password}),
                headers : {'Content-Type': 'application/json'}
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                console.log('Registration is Successfull')
            } else {
                console.log('Register Failed')
            }
        }
        catch (error) {
            console.log('an error has occured', error)
        }
        finally {
            setLoading(false)
        }

    }
   
    if (loading) {
        return <h1>Loading.....</h1>
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>FirstName </label>
            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label>LastName </label>
            <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <label>Email </label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Username </label>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label>Password </label>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input  type='submit' className='submit' />
        </form>
    </>
  )
}

export default JumiaForm