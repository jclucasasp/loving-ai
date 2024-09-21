import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation, useNavigate } from 'react-router-dom';
import { NewUserProfileInterface } from '@/lib/interfaces';
import { ToastAction } from '@/components/ui/toast';
import { LoginAuth } from '@/api/user-auth-api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FormEvent, useState } from 'react';

interface LoginFormInterface {
  email: string;
  password: string;
}

export default function Login() {

  const newUser = useLocation().state as NewUserProfileInterface;

  const [formData, setformData] = useState<LoginFormInterface>({ email: newUser?.email || "", password: newUser?.password || "" });
  const { toast } = useToast();


  const naviage = useNavigate();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setformData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    handleLogin();
  }

  const handleLogin = async () => {
    const data = await LoginAuth(formData.email, formData.password);
    if (!data) {
      toast({
        title: 'Login Failed',
        variant: 'destructive',
        action: <ToastAction altText="Okay" >Okay</ToastAction>
      });
      return;
    }
    sessionStorage.setItem('loggedInUser', JSON.stringify(data));
    naviage('/profile');
  }

return (
  <section className='flex flex-col justify-center items-center h-screen'>
    <Card className='max-w-sm'>
      <CardHeader className='text-center text-2xl'>
        <div className='flex justify-center mb-3'>
          <img src="/heart.png" alt="heart with arrow through it" height={80} width={80} />
        </div>
        <CardTitle>Rizz loading...</CardTitle>
      </CardHeader>
      <CardContent>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name='email' id="email" value={formData.email} onChange={handleChange} />
          <div className='flex justify-between items-center'>
            <Label htmlFor="password">Password</Label>
            <a href="/matches" className='text-slate-400 text-sm'>Forgot Password?</a>
          </div>
          <Input type="password" name='password' id="password" value={formData.password} onChange={handleChange} />
          <Button type='submit' variant='default'
            disabled={!formData.email || !formData.password}
            className='border w-full rounded-full mt-6 p-2'>
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant='link' onClick={() => naviage('/personality')} className='text-slate-400'>Don't have an account? Sign up</Button>
      </CardFooter>
    </Card>
  </section>
)
}
