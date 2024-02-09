export function Button({label,onClick}){
    return <div className="flex flex-col gap-1 p-2 mt-2">
        <button className="p-2 border-2 rounded-md w-full bg-black text-white" onClick={onClick}>{label}</button>
    </div>
}