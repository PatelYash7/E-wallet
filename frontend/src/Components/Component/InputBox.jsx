export function InputBox({label,placeholder,type,onChange}){
    return(
        <div className="flex flex-col gap-1 p-2">
            <div className=" text-start ">{label}</div>
            <input type={type} onChange={onChange} placeholder={placeholder} className="p-2 border-2  rounded-md w-full"/>
        </div>
    )
}