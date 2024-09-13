import useLoggedInUserState from '../hooks/use-loggedin-user-state';
import { LoginAuth } from '../api/user-auth';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Link } from 'lucide-react';

interface LoginFormInterface {
  email: string;
  password: string;
}

type StateTypes = 'profile' | 'match' | 'chat' | 'login';
export default function Login({ setCurrentScreen }: { setCurrentScreen: React.Dispatch<React.SetStateAction<StateTypes>> }) {

  const [formObject, setformObject] = useState<LoginFormInterface>({ email: "", password: "" });
  const { toast } = useToast();

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
      toast({
        title: 'Login Failed',
        variant: 'destructive',
        action: <ToastAction altText="Okay" >Okay</ToastAction>
      })
      return;
    }
    updateLoggedInUser(data);
  }

  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <Card className='max-w-sm'>
        <CardHeader className='text-center text-2xl'>
          <CardTitle>Are you ready to meet the Cuties?</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name='email' id="email" value={formObject.email} onChange={handleChange} />
            <div className='flex justify-between items-center'>
            <Label htmlFor="password">Password</Label>
            <Button variant='link' onClick={() => setCurrentScreen('login')} className='text-slate-400'>Forgot Password?</Button>
            </div>
            <Input type="password" name='password' id="password" value={formObject.password} onChange={handleChange} />
            <Button type='submit' variant='default'
              disabled={!formObject.email || !formObject.password}
              className='border w-full rounded-full mt-6 p-2'>
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </section>
  )

  // return (
  //   <div className="flex flex-col justify-center items-center h-screen">
  //     <section className='border rounded-xl  p-6'>
  //       <div className='bg-gray-200 p-3 rounded-xl mb-6'>
  //         <h3 className='font-bold text-xl text-center'>Welcome</h3>
  //       </div>
  //       <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
  //         <label htmlFor="email">Email</label>
  //         <input type="email" name='email' id="email" value={formObject.email} onChange={handleChange} />
  //         <label htmlFor="password">Password</label>
  //         <input type="password" name='password' id="password" value={formObject.password} onChange={handleChange} />
  //         <Button variant='default' disabled={!formObject.email || !formObject.password} className='border rounded-full mt-6 p-2'>Login</Button>
  //       </form>
  //     </section>
  //   </div>
  // );
}
