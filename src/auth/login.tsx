import { FormEvent, useState } from 'react';

interface LoginFormInterface {
  email: string;
  password: string;
}
export default function Login() {

  const [formObject, setformObject] = useState<LoginFormInterface>({} as LoginFormInterface);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setformObject({ ...formObject, [e.currentTarget.name]: e.currentTarget.value });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formObject);
    e.currentTarget.reset();
    setformObject({} as LoginFormInterface);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <section className='border rounded-xl bg-gray-50 p-10'>
        <div className='bg-gray-400 rounded-full'>
          <h3 className='font-bold text-xl text-center mb-6'>Welcome</h3>
        </div>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id="email" onInput={handleChange} value={formObject.email} />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id="password" onInput={handleChange} value={formObject.password} />
          <button type="submit" className='border rounded-full bg-blue-500 mt-6'>Login</button>
        </form>
      </section>
    </div>
  );
}
