import {Close, Description, Provider, Root, Title, Viewport} from "@radix-ui/react-toast";
import {Dispatch, SetStateAction} from "react";

export default function Toast(
    {
        title,
        description,
        closeText = 'OK',
        open = false,
        setOpen,
    }: {
        title: string,
        description?: string,
        closeText?: string,
        open: boolean,
        setOpen: Dispatch<SetStateAction<boolean>>,
    }
) {
    return (
        <Provider swipeDirection={'right'}>
            <Root
                className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
                open={open}
                onOpenChange={setOpen}
            >
                <Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                    {title}
                </Title>
                {(description) && (
                    <Description className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]">
                        {description}
                    </Description>
                )}
                <Close asChild className="[grid-area:_action]">
                    <button
                        className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8"
                    >{closeText}</button>
                </Close>
            </Root>
            <Viewport
                className="[--viewport-padding:_25px] fixed bottom-[10vh] right-1 md:right-[35vw] flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none"/>
        </Provider>
    );
}
