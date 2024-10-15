import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import { PersonalityTypeInterface } from "@/lib/interfaces";
import { CreateNewUserProfile } from "@/api/profiles-api";
import { NewUserForm, NewUserSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

export default function SignUp() {

  const navigate = useNavigate();

  const { personalityTypes }: { personalityTypes: PersonalityTypeInterface[] } = useLocation().state;

  const { toast } = useToast();

  const form = useForm<NewUserForm>({
    resolver: zodResolver(NewUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      otp: "",
      confirm: "",
      age: 0,
      ethnicity: "",
      bio: "",
      image: "",
      imageUrl: "",
      gender: "",
      myersBriggsPersonalityType: "",
    },
  });


  const onSubmit = async (data: NewUserForm) => {

    const result = NewUserSchema.safeParse(data);

    if (!result.success) {
      toast({
        title: "Validation failed.",
        description: result.error.message, variant: "destructive",
        action: <ToastAction altText="Retry">Retry</ToastAction>
      });
      return;
    }

    // Helper class to send a multipart form
    let formData = new FormData();

    for (let key in data) {
      if (key === 'image') {
        formData.append(key, data[key as keyof NewUserForm] as File);
      } else {
        formData.append(key, data[key as keyof NewUserForm]);
      }
    }

    await CreateNewUserProfile(formData).then((res) => {
      if (!res) {
        toast({
          variant: 'destructive',
          description: 'Email already taken. Please try again.',
          action: <ToastAction altText="Retry" >Retry</ToastAction>
        });
        return;
      }

      console.log("Response from server: ", res);

      navigate('/', { state: { email: result.data.email, password: result.data.password } });
    });
  }

  return (
    <section className='flex flex-col justify-center items-center'>
      <Card className='w-full max-w-lg'>
        <CardHeader className='text-center text-2xl'>
          <div className='flex justify-center mb-3'>
            <img src="/heart.png" alt="heart with arrow through it" height={80} width={80} />
          </div>
          <CardTitle className="text-fuchsia-500">Lets Get Started</CardTitle>
        </CardHeader>
        <CardContent>

          <Form {...form}>
            <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField control={form.control} name="firstName" render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={"John"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="lastName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={"Doe"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="nonAlien@defHuman.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="confirm" render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="otp" render={({ field }) => (
                <FormItem hidden>
                  <FormControl>
                    <Input type="text" {...field} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="age" render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type={"number"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="ethnicity" render={({ field }) => (
                <FormItem>
                  <FormLabel>Ethnicity</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={"Hopefully not alien"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="bio" render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder={"I am definitely not an alien"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>


              <FormField control={form.control} name="image" render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input type="file" {...fieldProps} accept="image/jpeg, image/jpg"
                      onChange={(e) => onChange(e.target.files?.[0])} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="imageUrl" render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Url</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={"image url"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="gender" render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={"..."} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="MALE">MALE</SelectItem>
                      <SelectItem value="FEMALE">FEMALE</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}></FormField>

              <FormField control={form.control} name="myersBriggsPersonalityType" render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Your Myers Briggs Personality Type
                  </FormLabel>
                  <Select onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={"..."} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {personalityTypes.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.type}
                        </SelectItem>
                      )
                      )}  </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}></FormField>

              <Button variant={"secondary"} type="submit" className="mt-6 rounded-full w-full">Submit</Button>
            </form>
          </Form>

        </CardContent>
      </Card>
    </section>
  );
}