import {Typography} from "@/ui/ui_toolkit/typography/typography";
import useWindowDimension from "@/utils/useWindowDimension";
import clsx from "clsx";

interface Props {
    type: string
}

export const Banner = ({type}:Props)=>{
    const {width} = useWindowDimension()
    let typeStyle: String = "";

    switch (type) {
        case 'about':
            typeStyle='hero-about';
            break;
        case 'landing':
            typeStyle='hero-landing';
            break;
    }



    // @ts-ignore
    return (
        <div className={clsx(typeStyle)}>
            {type === 'landing'  && <Typography theme={"secondary"} component={"p"} variant={width > 769 ? "h1":"lead"}>Chez vous, partout et ailleurs</Typography>}
        </div>
    )
}