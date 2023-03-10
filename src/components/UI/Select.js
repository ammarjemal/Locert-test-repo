export default function Select({
    onChange,
    onBlur,
    id,
    className,
    isInValid,
    children,
    defaultValue,
    placeholder
}){
  const classes = `cursor-pointer px-3 py-2 flex items-center justify-between my-5 rounded-xl appearance-none relative w-full bg-inherit border border-slate-400 focus:ring focus:border-none focus:ring-slate-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-400 focus:ring focus:z-10 sm:text-sm ${className} ${isInValid && "border-rose-500"}`
  return(
    <select
        className={classes}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        >
        {children}
    </select>
  )
}