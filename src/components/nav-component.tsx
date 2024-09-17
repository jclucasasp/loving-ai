import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Nav() {

    const navigate = useNavigate();

    const loggedInUser = JSON.parse(sessionStorage.loggedInUser);

    return (
        <nav className='flex justify-between mb-6'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger >
                        <User className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => navigate('/profile')} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Profiles</p>
                    </TooltipContent>
                </Tooltip>

                <Button variant={"link"} className='text-purple-400'
                    onClick={() => navigate('userProfile')}>
                    <p className='font-bold'>Rizz Master: </p>
                    {loggedInUser?.firstName + " " + loggedInUser?.lastName}
                </Button>

                <div className='w-9 h-9' />
                <Tooltip>
                    <TooltipTrigger>
                        <MessageCircle className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => navigate('/match')} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Matches</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>
    );
}