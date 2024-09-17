import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewUserProfileInterface } from "@/lib/interfaces";
import { CreateNewUserProfile } from "@/api/profiles-api";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { redirect } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {

  const [formObject, setformObject] = useState<NewUserProfileInterface>({
    id: "", age: 0, bio: "", firstName: "", lastName: "", gender: "",
    ethnicity: "", myersBriggsPersonalityType: "", imageUrl: "", email: "", password: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    await CreateNewUserProfile(formObject).then((res) => {
      if (res) {
        toast({
          title: 'Profile Created',
          description: `Your profile has been created successfully`,
          action: <ToastAction altText="Okay" >Continue</ToastAction>
        })
      }
    });
    redirect('/login');
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformObject({ ...formObject, [event.target.id]: event.target.value });
  };

  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <Card className='w-full max-w-lg'>
        <CardHeader className='text-center text-2xl'>
          <div className='flex justify-center mb-3'>
            <img src="/heart.png" alt="heart with arrow through it" height={80} width={80} />
          </div>
          <CardTitle>Lets Get Started</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            
            <Input type="text" name='firstName' id="firstName" placeholder="First Name" value={formObject.firstName} onChange={handleChange} required/>
            
            <Input type="text" name='lastName' id="lastName" placeholder="Last Name" value={formObject.lastName} onChange={handleChange} required/>
            
            <Input type="email" name='email' id="email" placeholder="Email" value={formObject.email} onChange={handleChange} required/>
            
            <Input type="password" name='password' id="password" placeholder="Password" value={formObject.password} onChange={handleChange} required/>

            <Input type="number" name='age' id="age" placeholder="Age" value={formObject.age} onChange={handleChange} required/>

            <Input type="text" name='ethnicity' id="ethnicity" placeholder="Ethnicity" value={formObject.ethnicity} onChange={handleChange} required/>

            <Input type="text" name='gender' id="gender" placeholder="Gender" value={formObject.gender} onChange={handleChange} required/>

            <Textarea name='bio' id="bio" placeholder="Bio" value={formObject.bio} onChange={handleChange} required/>

            <Input type="text" name='imageUrl' placeholder="Image Url" id="imageUrl" value={formObject.imageUrl} onChange={handleChange} required/>

            <Input type="text" name='myersBriggsPersonalityType' placeholder="Myers Briggs Personality Type" id="myersBriggsPersonalityType" value={formObject.myersBriggsPersonalityType} onChange={handleChange} required/>

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
  );
}
