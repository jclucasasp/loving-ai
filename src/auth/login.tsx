import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm, LoginFormSchema } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastAction } from '@/components/ui/toast';
import { LoginAuth } from '@/api/user-auth-api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';

export default function Login() {

  const { email, password } = useLocation().state as { email: string, password: string } || {"email": "", "password": ""};

  const { toast } = useToast();

  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: email,
      password: password
    }
  });


  const naviage = useNavigate();

  const onSubmit = (data: LoginForm) => {
    const result = LoginFormSchema.safeParse(data);

    if (!result.success) {
      toast({
        title: "Validation failed.",
        description: result.error.message, variant: "destructive",
        action: <ToastAction altText="Retry">Retry</ToastAction>
      });
      return;
    }

    handleLogin(result.data);
  }

  const handleLogin = async (formData: LoginForm) => {

    const data = await LoginAuth(formData.email, formData.password);

    if (!data) {
      toast({
        title: 'Login Failed',
        variant: 'destructive',
        action: <ToastAction altText="Retry" >Retry</ToastAction>
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

          <Form {...form} >
            < form className='flex flex-col gap-2' onSubmit={form.handleSubmit(onSubmit)}>

              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input {...field} id="email" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField name="password" control={form.control} render={({ field }) => (
                <FormItem>
                  <div className='flex justify-between items-center'>
                    <Label htmlFor="password">Password</Label>
                    <a href="/matches" className='text-slate-400 text-sm'>Forgot Password?</a>
                  </div>
                  <FormControl>
                    <Input {...field} id="password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <Button type='submit' variant='secondary'
                disabled={!form.formState.isValid}
                className='border w-full rounded-full mt-6 p-2'>
                Login
              </Button>
            </form>
          </Form>

        </CardContent>
        <CardFooter>
          <Button variant='link' onClick={() => naviage('/personality')} className='text-slate-400'>Don't have an account? Sign up</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
