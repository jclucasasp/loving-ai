import useLoggedInUserState from "@/hooks/use-loggedin-user-state"

export default async function EmailToken(email: string) {
    const loggedInUser = useLoggedInUserState();

    const data = {
        service_id: import.meta.env.VITE_EMAIJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_API_KEY,
        template_params: {
            'to_email': email,
            'to_name': loggedInUser?.firstName + " " + loggedInUser?.lastName,
            'message': 'This email has been send due to a request on Loving AI website. If you received it in error, please send an email to jclucasasp@gmail.com with the heading "Unauthorized Email".',
        }
    }

    return await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}