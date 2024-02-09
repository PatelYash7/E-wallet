import { Link } from "react-router-dom";

export function BottomText({label,heading}){
    return <div className='flex items-center justify-center p-2'>
    <p>
        {label}
        <Link to={'/signin'} className="pl-1 underline"> {heading}</Link>
    </p>
</div>
}