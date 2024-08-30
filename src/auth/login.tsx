import useLoggedInUserState from '../hooks/use-loggedin-user-state';
import { LoginAuth } from '../api/user-auth';
import { FormEvent, useState } from 'react';

interface LoginFormInterface {
  email: string;
  password: string;
}

type StateTypes = 'profile' | 'match' | 'chat' | 'login';
export default function Login({ setCurrentScreen }: { setCurrentScreen: React.Dispatch<React.SetStateAction<StateTypes>> }) {

  const [formObject, setformObject] = useState<LoginFormInterface>({ email: "", password: "" });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setformObject({ ...formObject, [e.currentTarget.name]: e.currentTarget.value });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    handleLogin();
    setCurrentScreen('profile');
  }

  const { updateLoggedInUser } = useLoggedInUserState();

  const handleLogin = async () => {
    const data = await LoginAuth(formObject.email, formObject.password);
    if (!data) {
      console.log('Failed to login');
      return;
    }
    updateLoggedInUser(data);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <section className='border rounded-xl bg-gray-50 p-10'>
        <div className='bg-gray-400 rounded-full'>
          <h3 className='font-bold text-xl text-center mb-6'>Welcome</h3>
        </div>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id="email" value={formObject.email} onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id="password" value={formObject.password} onChange={handleChange} />
          <button type="submit" className='border rounded-full bg-blue-500 mt-6'>Login</button>
        </form>
      </section>
    </div>
  );
}
